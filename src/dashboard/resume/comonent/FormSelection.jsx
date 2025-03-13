import React, { useState } from 'react'
import PersonalDetails from './forms/personalDetails'
import PersonalSummary from './forms/PersonalSummary'
import { ArrowBigLeft, ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProExprience from './forms/ProExprience'
import Education from './forms/Education'
import Skill from './forms/Skill'
import { Navigate, useParams } from 'react-router-dom'
import TheameColor from './TheameColor'

const FormSelection = () => {
  const [activeFormIndex,setActiveFormIndex]=useState(1)
  const[enableNext,setEnableNext]=useState(false)
  const{resumeId}=useParams();
  return (
    <div >
     <div className='flex justify-between items-center'>
    <TheameColor />

    <div className='flex gap-2'>
      {activeFormIndex > 1 && (
        <Button size='sm' onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
          <ArrowLeft/>
        </Button>
      )}
      <Button disabled={!enableNext}
      className='flex gap-2' size='sm' onClick={() => setActiveFormIndex(activeFormIndex + 1)}>
        Next
        <ArrowRight/>
      </Button>
    </div>
  </div>
      <br />
     {/* presonal details */}
     {activeFormIndex==1?<PersonalDetails enableNext={(v)=>setEnableNext(v)} />
     :activeFormIndex==2?<PersonalSummary enableNext={(v)=>setEnableNext(v)}/>
     :activeFormIndex==3?<ProExprience enableNext={(v)=>setEnableNext(v)}/>
     :activeFormIndex==4?<Education enableNext={(v)=>setEnableNext(v)} />
     :activeFormIndex==5? <Skill enableNext={(v)=>setEnableNext(v)}  />
     :activeFormIndex==6? <Navigate to ={'/my-resume/'+resumeId+'/view'}  />
     :null}


     {/* Summary */}
     

     {/* Education */}


     {/* prpfessional Summary */}

     {/* Skills */}
    </div>
  )
}

export default FormSelection
