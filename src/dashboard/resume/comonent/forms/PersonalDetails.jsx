import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext';
import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';

function PersonalDetails({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    // Store in LocalStorage
    localStorage.setItem("resumeInfo", JSON.stringify(resumeInfo));
    console.log("Data Saved in Local Storage:", resumeInfo);

    enableNext(true);

    // Simulate loading effect
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4'>
        <h2 className='font-bold'>Personal Details</h2>
        <p>Get Started with the Basics</p>

        <form onSubmit={onSave}>
          <div className='grid grid-cols-2 mt-5 gap-3'>
            <div>
              <label className='text-sm'>First Name</label>
              <Input
                name='firstName'
                value={resumeInfo?.firstName || ''}
                required
                defaultValue={resumeInfo?.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className='text-sm'>Last Name</label>
              <Input
                name='lastName'
                value={resumeInfo?.lastName || ''}
                required
                defaultValue={resumeInfo?.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className='col-span-2'>
              <label className='text-sm'>Job Title</label>
              <Input
                name='jobTitle'
                value={resumeInfo?.jobTitle || ''}
                required
                defaultValue={resumeInfo?.jobTitle}
                onChange={handleInputChange}
              />
            </div>

            <div className='col-span-2'>
              <label className='text-sm'>Address</label>
              <Input
                name='address'
                value={resumeInfo?.address || ''}
                required
                defaultValue={resumeInfo?.address}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className='text-sm'>Phone Number</label>
              <Input
                name='phone'
                value={resumeInfo?.phone || ''}
                required
                defaultValue={resumeInfo?.phone}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className='text-sm'>Email Address</label>
              <Input
                name='email'
                value={resumeInfo?.email || ''}
                required
                defaultValue={resumeInfo?.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='mt-3 flex justify-end'>
            <Button type='submit' disabled={loading} onClick={() => toast('Personal Details Saved')}>
              {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;
