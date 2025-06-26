// "use client";
// Dashboard wrapper is for layout
import React from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
const DahsboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex bg-gray-50 text-gray-900 w-full min-h-screen'>
      {/* Side bar part */}

      <Sidebar />
      <main className='flex flex-col w-full h-fulll py-7 px-9 bg-gray-50 md:pl-24'>
        {/* Main part including the navbar and dashboard main content */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DahsboardWrapper;
