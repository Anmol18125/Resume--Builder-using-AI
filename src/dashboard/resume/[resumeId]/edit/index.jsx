import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import FormSelection from '../../comonent/FormSelection';
import PreviewSection from '../../comonent/PreviewSection';
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext';
import { dummy } from '../../data/dummy';
// Correct the import path

const EditResume = () => {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState(dummy);

  useEffect(() => {
    setResumeInfo(dummy);
    console.log(params);
  }, [params]);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-11'>
        {/* Form Section */}
        <FormSelection />

        {/* Preview Section */}
        <PreviewSection />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
