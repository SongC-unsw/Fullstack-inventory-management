// "use client";
import React from "react";
import Navbar from "@/app/(components)/Navbar";
const DahsboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex bg-gray-50 text-gray-900 w-full min-h-screen'>
      Sidebar
      <main className='flex flex-col w-full h-fulll py-7 px-9 bg-gray-200 md:pl-24'>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DahsboardWrapper;
