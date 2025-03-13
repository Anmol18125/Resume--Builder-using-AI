import React, { useContext } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import { ResumeInfoContext } from '@/contaxt/ResumeInfoContext'
  

const TheameColor = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const onSelectColor = (color) => {
      setResumeInfo({
        ...resumeInfo,
        themeColor: color, // fixed spelling
      });
    };
    
const colors=["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
"#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
"#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
"#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"]
  return (
    <Popover>
    <PopoverTrigger asChild>

<Button className='flex gap-2' variant='outline' size='sm'>
      <LayoutGrid/> Theme
    </Button>

    </PopoverTrigger>
    <PopoverContent>
        <h2 className='mb-2 text-sm font-bold'>Select these Theme Color</h2>
    <div className="grid grid-cols-5 gap-4">
  {colors.map((item, index) => (
    <div
    onClick={()=>onSelectColor(item)}
      key={index} // Always include a key when rendering lists in React
      className="h-5 w-5 rounded-full cursor-pointer  hover:border-black border"
      style={{
        background: item,
      }}
    ></div>
  ))}
</div>

    </PopoverContent>
  </Popover>
  
  )
}

export default TheameColor
