import Header from '@/components/custom/HeaderP'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext'
import PreviewSection from '@/dashboard/resume/comonent/PreviewSection'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ViewResume = () => {
  const [resumeInfo, setResumeInfo] = useState()
  const { resumeID } = useParams()

  const GetResumeInfo = async () => {
    console.log('Fetching resume for ID:', resumeID) // debug log
  
    try {
      const response = await fetch(`/api/resumes/${resumeID}`) // <-- check this URL!
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
  
      const data = await response.json()
  
      console.log('Fetched resume data:', data) // debug log
  
      setResumeInfo(data)
    } catch (error) {
      console.error('Failed to fetch resume:', error)
    }
  }
  

  useEffect(() => {
    GetResumeInfo()
  }, [])

  if (!resumeInfo) {
    return <div>Loading...</div>
  }
const handleDownload=()=>{
window.print();
}
  return (
    
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id='no-print'>
      <Header />
      <div className='my10 mx-2 md:mx-20 lg:mx-35'>
        <h2 className='text-center font-medium text-lg'>
          Congrats! Your AI-generated Resume is Completed
        </h2>
        <p className='text-center text-gray-400'>
          Now your resume is ready. You can download or share the unique URL.
        </p>
        <div className='flex justify-between px-44 my-10'>
          <Button  onClick={handleDownload}>Download</Button>
          <Button>Share</Button>
        </div>
       
      </div>   </div>
      <div id='print-area'>
          <PreviewSection />
        </div>
    </ResumeInfoContext.Provider>
  )
}

export default ViewResume
