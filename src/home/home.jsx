import HeaderP from '@/components/custom/HeaderP'
import { UserButton } from '@clerk/clerk-react'
import { LoaderCircle } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div>
  <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Header */}
      <HeaderP />

      {/* Spinning Loader */}
      <LoaderCircle className="animate-spin text-primary w-12 h-12 mt-10" />
      
      {/* Optional: Loading text */}
      <p className="mt-4 text-gray-500">Loading...</p>



    </div>

    <div>
      jwhvubfwkfvdbhjnb
    </div>
    </div>
  )
}

export default HomePage
