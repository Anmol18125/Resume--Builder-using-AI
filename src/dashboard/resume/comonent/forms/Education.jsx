import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

const LOCAL_STORAGE_KEY = 'resume_education_data';

const Education = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const getInitialEducation = () => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return [
      {
        
        universityName: '',
        degree: '',
        major: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        description: '',
        currentlyStudying: false,
      },
    ];
  };

  const [educationList, setEducationList] = useState(getInitialEducation);

  const addNewEducation = () => {
    setEducationList([
      ...educationList,
      {
       
        universityName: '',
        degree: '',
        major: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        description: '',
        currentlyStudying: false,
      },
    ]);
  };

  const removeEducation = () => {
    if (educationList.length > 1) {
      const updatedList = educationList.slice(0, -1);
      setEducationList(updatedList);
    }
  };

  const handleChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    const updatedList = [...educationList];
    updatedList[index][name] = type === 'checkbox' ? checked : value;

    // If currentlyStudying is checked, clear endDate
    if (name === 'currentlyStudying' && checked) {
      updatedList[index]['endDate'] = '';
    }

    setEducationList(updatedList);
  };

  const handleSave = () => {
    toast.success('Saved Successfully!');
  };

  useEffect(() => {
    // Update resume context
    setResumeInfo({
      ...resumeInfo,
      education: educationList,
    });

    // Save to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(educationList));
  }, [educationList, setResumeInfo]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
        <h2 className="font-bold text-lg">Educational Summary</h2>
        <p className="text-sm mb-4">Add your educational details below.</p>

        {educationList.map((item, index) => (
          <div key={item.id} className="mb-4 border p-4 rounded-md">
            <div className="grid grid-cols-2 my-3 border p-3 rounded-lg gap-3">
              <div className="col-span-2">
                <label>University Name</label>
                <Input
                  name="universityName"
                  value={item.universityName}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label>Degree</label>
                <Input
                  name="degree"
                  value={item.degree}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label>Major</label>
                <Input
                  name="major"
                  value={item.major}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label>Start Date</label>
                <Input
                  name="startDate"
                  type="date"
                  value={item.startDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label>End Date</label>
                <Input
                  name="endDate"
                  type="date"
                  value={item.endDate}
                  onChange={(e) => handleChange(e, index)}
                  disabled={item.currentlyStudying}
                />
              </div>

              <div>
                <label>City</label>
                <Input
                  name="city"
                  value={item.city}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label>State</label>
                <Input
                  name="state"
                  value={item.state}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div className="col-span-2">
                <label>Description</label>
                <textarea
                  name="description"
                  value={item.description}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>

              <div className="col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="currentlyStudying"
                  checked={item.currentlyStudying}
                  onChange={(e) => handleChange(e, index)}
                />
                <label>Currently Studying</label>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-primary"
            onClick={addNewEducation}
          >
            + Add Education
          </Button>

          {educationList.length > 1 && (
            <Button
              variant="outline"
              className="text-primary"
              onClick={removeEducation}
            >
              - Remove Education
            </Button>
          )}
        </div>

        <Button type="button" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Education;
