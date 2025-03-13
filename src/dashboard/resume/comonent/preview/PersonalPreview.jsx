import React from 'react'

const PersonalPreview = ({resumeInfo}) => {
  return (
    <div>
      <h2 className='font-bold text-center text-xl' 
       style={{color:resumeInfo?.themeColor}}>
        {resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
      <h2 className='text-center text-sm font-medium' style={{color:resumeInfo?.themeColor}}
       >{resumeInfo?.jobTitle}</h2>

       <h2 className='text-center text-xs font-normal'>{resumeInfo?.address}</h2>
       <div className='flex justify-between'>
        <h3 className='font-normal text-xs '  style={{color:resumeInfo?.themeColor}}>{resumeInfo?.phone}</h3>
        <h3 className='font-normal text-xs'  style={{color:resumeInfo?.themeColor}}>{resumeInfo?.email}</h3>
       </div>
       <hr  className='border-[1.5px] my-2' style={{borderColor:resumeInfo?.themeColor}}/>
    </div>
  )
}

export default PersonalPreview
