import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalPreview from './preview/PersonalPreview'
import SummeryPreview from './preview/SummeryPreview'
import ProfessionalSummary from './preview/ProfessionalSummary'

import SkillPreview from './preview/SkillPreview'
import PreviewEducation from './preview/PreviewEducation'

const PreviewSection = () => {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor:resumeInfo?.themeColor
    }}>
      {/* personal details */}
      <PersonalPreview resumeInfo={resumeInfo} />

      {/* summary */}
      <SummeryPreview resumeInfo={resumeInfo} />

      {/* Professional details */}
      <ProfessionalSummary resumeInfo={resumeInfo}/>
      {/* education */}
      <PreviewEducation resumeInfo={resumeInfo}/>

      {/* Skills */}
      <SkillPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default PreviewSection
