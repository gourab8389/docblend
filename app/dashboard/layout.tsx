import React from 'react';
import Navbar from './components/nav';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="">
      <Navbar/>
      {children}
    </div>
  );
};

export default Layout;
