import { Input } from '@/components/ui/input' 
import React, { useContext, useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext'

const Skill = () => {
    const [skillList, setSkillList] = useState([
        { name: '', rating: 0 }
    ])
    
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    // Load skills from localStorage on mount
    useEffect(() => {
        const storedSkills = localStorage.getItem('skills');
        if (storedSkills) {
            setSkillList(JSON.parse(storedSkills));
        }
    }, []);

    // Save to localStorage whenever skillList changes
    useEffect(() => {
        localStorage.setItem('skills', JSON.stringify(skillList));

        // Also update ResumeInfoContext here if needed
        setResumeInfo({
            ...resumeInfo,
            skills: skillList
        });
    }, [skillList]);

    const addSkill = () => {
        setSkillList([
          ...skillList,
          { name: '', rating: 0 },
        ]);
    };
    
    const removeSkill = () => {
        setSkillList(skillList => skillList.slice(0, -1));
    };

    const handleChange = (index, name, value) => {
        const newEntries = [...skillList];
        newEntries[index][name] = value;
        setSkillList(newEntries);
    };

    const handleSave = () => {
        toast.success('Saved Successfully!');
    };

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4">
                <h2 className="font-bold text-lg">Skills</h2>
                <p className="text-sm mb-4">Add your professional skills.</p>

                <div>
                    {skillList.map((item, index) => (
                        <div key={index} className='flex justify-between border rounded-lg p-3 mb-2'>
                            <div className="w-1/2 mr-2">
                                <label className='text-xs' htmlFor="">Name</label>
                                <Input
                                defaultValue={item.name}
                                    className='w-full'
                                    value={item.name}
                                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                                />
                            </div>
                            <div className="w-1/2 ml-2 flex items-center">
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={item.rating}
                                    onChange={(v) => handleChange(index, 'rating', v)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        className="text-primary"
                        onClick={addSkill}
                    >
                        + Add Skill
                    </Button>

                    {skillList.length > 1 && (
                        <Button
                            variant="outline"
                            className="text-primary"
                            onClick={removeSkill}
                        >
                            - Remove Skill
                        </Button>
                    )}
                </div>

                <Button type="button" onClick={handleSave}>
                    Save
                </Button>
            </div>
        </div>
    );
}

export default Skill;
