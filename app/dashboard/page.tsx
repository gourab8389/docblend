import { Button } from '@/components/ui/button';
import {  SignOutButton } from '@clerk/nextjs';
import React from 'react';

function Dashboard() {
  return (
    <div className=''>
      <h1>Dashboard</h1>
      <div className="absolute top-3 right-3">
      <Button variant={'outline'}>
        <SignOutButton/>
      </Button>
      </div>
    </div>
  );
}

export default Dashboard;
