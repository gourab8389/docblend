import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-20 shadow-lg">
        <div className="absolute top-3 right-3"> 
          <Link href={'/dashboard'}>
            <Button variant={'secondary'} className="border border-gray-600 dark:border-white rounded-lg">Show Documents</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
