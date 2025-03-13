import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { toast } from 'sonner';
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';

// Default empty experience field
const formField = {
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummary: '',
  currentlyWorking: false,
};

function ProExperience() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [experienceList, setExperienceList] = useState(
    Array.isArray(resumeInfo?.experience) ? resumeInfo.experience : [formField]
  );

  // Strip HTML tags from work summary
  const stripHtmlTags = (html) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const handleChanges = (index, event) => {
    const { name, value, type, checked } = event.target;
    const updatedList = [...experienceList];
    updatedList[index][name] = type === 'checkbox' ? checked : value;
    setExperienceList(updatedList);
  };

  const handleTextEditor = (content, name, index) => {
    const updatedList = [...experienceList];
    updatedList[index][name] = content;
    setExperienceList(updatedList);
  };

  const addNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]);
  };

  const removeExperience = () => {
    if (experienceList.length > 1) {
      setExperienceList(experienceList.slice(0, -1));
    }
  };

  // Update resumeInfo with the experience list
  useEffect(() => {
    setResumeInfo({ ...resumeInfo, experience: experienceList });
  }, [experienceList]);

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4'>
      <h2 className='font-bold text-lg'>Professional Experience</h2>
      <p className='text-sm mb-4'>Add previous professional experience.</p>

      {experienceList.map((experience, index) => (
        <div key={index} className='grid grid-cols-2 my-3 border p-3 rounded-lg gap-3'>
          {/* Title */}
          <div>
            <label className='text-xs'>Title</label>
            <Input
              name='title'
              value={experience.title}
              onChange={(e) => handleChanges(index, e)}
            />
          </div>

          {/* Company Name */}
          <div>
            <label className='text-xs'>Company Name</label>
            <Input
              name='companyName'
              value={experience.companyName}
              onChange={(e) => handleChanges(index, e)}
            />
          </div>

          {/* City */}
          <div>
            <label className='text-xs'>City</label>
            <Input
              name='city'
              value={experience.city}
              onChange={(e) => handleChanges(index, e)}
            />
          </div>

          {/* State */}
          <div>
            <label className='text-xs'>State</label>
            <Input
              name='state'
              value={experience.state}
              onChange={(e) => handleChanges(index, e)}
            />
          </div>

          {/* Start Date */}
          <div>
            <label className='text-xs'>Start Date</label>
            <Input
              name='startDate'
              type='date'
              value={experience.startDate}
              onChange={(e) => handleChanges(index, e)}
            />
          </div>

          {/* End Date */}
          <div>
            <label className='text-xs'>End Date</label>
            <Input
              name='endDate'
              type='date'
              value={experience.endDate}
              onChange={(e) => handleChanges(index, e)}
              disabled={experience.currentlyWorking}
            />
          </div>

          {/* Work Summary */}
          <div className='col-span-2'>
            <RichTextEditor
              index={index}
              value={experience.workSummary}
              onChange={(content) => handleTextEditor(content, 'workSummary', index)}
            />
          </div>

          {/* Currently Working */}
          <div className='col-span-2 flex items-center gap-2'>
            <label className='text-xs'>Currently Working</label>
            <input
              type='checkbox'
              name='currentlyWorking'
              checked={experience.currentlyWorking}
              onChange={(e) => handleChanges(index, e)}
            />
          </div>
        </div>
      ))}

      {/* Add/Remove Buttons */}
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Button variant='outline' className='text-primary' onClick={addNewExperience}>
            + Add Experience
          </Button>
          {experienceList.length > 1 && (
            <Button variant='outline' className='text-primary' onClick={removeExperience}>
              - Remove Experience
            </Button>
          )}
        </div>

        <Button
          type='submit'
          onClick={() => toast.message('Saved Successfully')}
         
        >
          Save
        </Button>
      </div>

      {/* ---------- Preview Section ---------- */}
      <div className='mt-10'>
        <h3 className='font-bold text-lg mb-2'>Preview</h3>

        {experienceList.map((experience, index) => (
          <div key={index} className='mb-6'>
            <p className='font-semibold'>{experience.title}</p>
            <p>{experience.companyName}, {experience.city}, {experience.state}</p>
            <p>{experience.startDate} - {experience.currentlyWorking ? 'Present' : experience.endDate}</p>

            {/* Only show plain text work summary */}
            {experience.workSummary && (
              <div className='mt-2 text-sm text-gray-700 whitespace-pre-line'>
                {stripHtmlTags(experience.workSummary)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProExperience;
