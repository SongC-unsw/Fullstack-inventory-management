"use client";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className='flex gap-3 justify-between items-center pt-8 md:justify-normal'>
        {/* LOGO part */}
        {/* Sidebar align to the left when larger than md */}
        <div>logo placeholder</div>
        <h1 className='font-extrabold text-2xl'>STOCKX</h1>
        <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={() => {}}>
          {/* Menu icon to hide when larger than md */}
          <Menu className='w-4 h-4' />
        </button>
      </div>

      {/* SIDEBAR LINKS */}

      <div className='flex-grow mt-8'>{/* links here  link to not grow when page size grow*/}</div>

      {/* FOOTER*/}
      <div>
        <p className='text-center text-xs text-gray-500'>&copy; 2024 STOCKX</p>
      </div>
    </div>
  );
};

export default Sidebar;
