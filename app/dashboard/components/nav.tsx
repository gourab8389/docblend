import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row h-20 w-full shadow-lg z-50'>
      <div className="flex mr-5 mt-2">
      <UserButton/>
      </div>
    </div>
  )
}

export default Navbar
