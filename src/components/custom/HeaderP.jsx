import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function HeaderP  () {

    const {user,isSignedIn}=useUser();


    
  return (
    <div className='p-3 px-5 justify-between shadow-md flex rounded-lg'>
      <img src="/logo.jpg" alt="LoGo of Resume"  width={40} height={50}/>
{
    isSignedIn? <div className='flex gap-2 items-center'> 
    <Link to={'/dashboard'}>
        <Button varient='outline'>Dashboard</Button></Link>
         <UserButton/></div>: <Link to={'/auth/sign-in'}>
      <Button>Get Started</Button>
     </Link>
}

     
    </div>
  )
}

export default HeaderP
