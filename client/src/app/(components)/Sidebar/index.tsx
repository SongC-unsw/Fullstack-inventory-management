"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Layout, LucideIcon, Menu } from "lucide-react";
import React from "react";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const currentYear = dayjs().year();
  const dispatch = useAppDispatch();
  // get the current state of sidebar
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  // invert the sidebar state
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  // styling for sidebar
  const sidebarClassNames = `flex flex-col fixed ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:64"
  } bg-white transition-all duration-200 overflow-hidden h-full shadow-md z-40`;

  interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
  }

  const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
    return (
      <Link href={href}>
        <div
          className={`cursor-pointer flex items-center ${
            isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          } hover:text-blue-500 hover:bg-blue-300 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white" : ""}`}
        >
          <Icon className='w-6 h-6 !text-gray-700' />
          <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className={sidebarClassNames}>
      {/* Pass in the styling for the whole sidebar */}
      <div className={`flex gap-3 justify-between items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
        {/* LOGO part */}
        {/* Sidebar align to the left when larger than md */}
        <div>logo placeholder</div>
        <h1 className={`font-extrabold text-2xl ${isSidebarCollapsed ? "hidden" : "block"}`}>STOCKX</h1>
        <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
          {/* only set the button on the sidebar */}

          {/* Menu icon to hide when larger than md */}
          <Menu className='w-4 h-4' />
        </button>
      </div>
      {/* SIDEBAR LINKS */}
      <div className='flex-grow mt-8'>
        {/* links here  link to not grow when page size grow*/}
        <SidebarLink href='/dashboard' icon={Layout} label='Dashboard' isCollapsed={isSidebarCollapsed} />
      </div>
      {/* FOOTER*/}
      <div>
        <p className='text-center text-xs text-gray-500'>&copy; {currentYear} STOCKX</p>
      </div>
    </div>
  );
};

export default Sidebar;
