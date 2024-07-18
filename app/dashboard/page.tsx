import { Button } from '@/components/ui/button';
import {  SignOutButton, UserButton } from '@clerk/nextjs';
import React from 'react';

function Dashboard() {
  return (
    <div className=''>
      <h1>Dashboard</h1>
      <div className="absolute top-5 right-5">
      
        <UserButton/>
      
      </div>
    </div>
  );
}

export default Dashboard;
