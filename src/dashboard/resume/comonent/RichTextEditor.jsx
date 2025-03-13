import { Button } from '@/components/ui/button';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState, useEffect } from 'react';
import {
  BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink,
  BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnUnderline, BtnUndo,
  Editor, EditorProvider, Separator, Toolbar
} from 'react-simple-wysiwyg';
import { AIChatSession } from './../../../../services/AiModel';
import { toast } from 'sonner';
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext';

const RichTextEditor = ({ onChange, index, value: initialValue }) => {
  const PROMPT = 'position title: {positionTitle}, Based on the position title, give me 2-3 bullet points for my experience in resume. Only return bullet points, no introductions or extra text and appear only one time.';
  const [value, setValue] = useState(initialValue || '');
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  useEffect(() => {
    localStorage.setItem(`editorValue-${index}`, value);

    // Update resumeInfo experience list on editor change
    const updatedExperience = [...resumeInfo.experience];
    updatedExperience[index].workSummary = value;
    setResumeInfo({ ...resumeInfo, experience: updatedExperience });
  }, [value]);

  const GenerateSummaryFromAI = async () => {
    setLoading(true);
    try {
      const positionTitle = resumeInfo?.experience?.[index]?.title;
      if (!positionTitle) {
        toast('Please Add Position Title');
        setLoading(false);
        return;
      }

      const prompt = PROMPT.replace('{positionTitle}', positionTitle);
      const result = await AIChatSession.sendMessage(prompt);

      if (result?.response?.text) {
        let resp = await result.response.text();

        // Clean up brackets and whitespace
        resp = resp.replace(/\[|\]/g, '').trim();

        // Split bullets, remove duplicates, and format them again
        const bullets = resp.split('*').filter(Boolean).map(b => b.trim());
        const uniqueBullets = [...new Set(bullets)];
        const cleanResp = uniqueBullets.map(b => `* ${b}`).join('\n');

        setValue(cleanResp);
      } else {
        toast('No response received from AI. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast('An error occurred while generating summary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label htmlFor="summary" className="text-xs">Work Experience</label>
        <Button
          onClick={GenerateSummaryFromAI}
          size="sm"
          variant="outline"
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? <LoaderCircle className='animate-spin' /> : (
            <>
              <Brain className="h-4 w-4" />Generate From AI
            </>
          )}
        </Button>
      </div>

      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value); // Pass HTML string to parent
          }}
        >
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <BtnClearFormatting />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
