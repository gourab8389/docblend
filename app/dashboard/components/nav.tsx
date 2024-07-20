import { SignUp, UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky h-20 top-0 w-full shadow-lg z-50 justify-between'>
      <div className="flex mr-0 top-2">
      <UserButton/>
      </div>
    </div>
  )
}

export default Navbar
