import { Button } from '@/components/ui/button'; 
import { Textarea } from '@/components/ui/textarea'; 
import { Brain, LoaderCircle } from 'lucide-react'; 
import React, { useContext, useEffect, useState } from 'react'; 
import { AIChatSession } from './../../../../../services/AiModel'; 
import { toast } from 'sonner';
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext';

function PersonalSummary() {
  const prompt = "Job Title: full stack developer, Based on the job title and these additional details: 'years of experience', 'key skills', 'specific area of expertise', 'accomplishments', and 'target job's requirements', provide a summary for my resume in 4-5 lines.";
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState(() => localStorage.getItem('personalSummary') || '');
  const [aiGeneratedList, setAIGeneratedList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (summary) {
      setResumeInfo(prevState => ({ ...prevState, summary }));
    }
  }, [summary, setResumeInfo]);

  const handleSave = () => {
    if (!summary.trim()) {
      toast('Please enter a summary before saving');
      return;
    }
    setLoading(true);
    setResumeInfo(prevState => ({ ...prevState, summary }));
    localStorage.setItem('personalSummary', summary);
    toast.success('Personal Summary Saved');
    setLoading(false);
  };

  const summaryFromAi = async () => {
    setAiLoading(true);
    setLoading(true);
    
    const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle || '');

    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const responseText = result?.response?.text ? await result.response.text() : '';

      // Simulating multiple suggestions
      const suggestions = [
        { summary: `Experienced Full Stack Developer with proficiency in React, Node.js, and cloud development. Known for leading teams and delivering high-quality web applications.` },
        { summary: `Mid-level Full Stack Developer skilled in JavaScript, Python, and AWS. Specializes in both front-end and back-end development, ensuring seamless user experiences.` },
        { summary: `Entry-level Full Stack Developer familiar with HTML, CSS, and JavaScript. Eager to contribute to innovative projects and grow in a dynamic team environment.` }
      ];

      setAIGeneratedList(suggestions);
      setSummary(suggestions[0].summary); // Set the first suggestion as the default summary
      toast.success('Summary Generated by AI');
    } catch (error) {
      console.error('AI Summary Generation Error:', error);
      toast.error('Failed to generate summary from AI');
    }

    setAiLoading(false);
    setLoading(false)
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4'>
      <h2 className='font-bold text-lg'>Professional Summary</h2>
      <p className='text-sm mb-4'>Add a brief summary of your job role.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='flex justify-between items-center mb-4'>
          <label htmlFor='summary' className='font-semibold'>Add Summary</label>
          <Button 
            variant='outline' 
            size='sm' 
            className='border-primary text-primary' 
            disabled={aiLoading} 
            onClick={summaryFromAi}
          >
            {aiLoading ? <LoaderCircle className='animate-spin' /> : <><Brain /> Generate From AI</>}
          </Button>
        </div>
        <Textarea 
          id='summary' 
          className='mt-2 w-full' 
          placeholder='Write your professional summary here...' 
          onChange={(e) => setSummary(e.target.value)} 
          value={summary} 
        />
        <div className='mt-3 flex justify-end'>
          <Button type='button' disabled={loading} onClick={handleSave}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </form>

      {aiGeneratedList.length > 0 && (
        <div className='mt-4'>
          <h2 className='font-bold text-lg'>Suggestions</h2>
          <select className='w-full mt-2' onChange={(e) => setSummary(e.target.value)}>
            {aiGeneratedList.map((item, index) => (
              <option key={index} value={item.summary}>
                Summary: {item.summary}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default PersonalSummary;
