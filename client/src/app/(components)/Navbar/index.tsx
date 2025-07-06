"use client";
import React from "react";
import Link from "next/link";
import { Bell, Menu, Settings, Sun } from "lucide-react";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { useTheme } from "next-themes";
import Image from "next/image";

const Navbar = () => {
  const dispatch = useAppDispatch();
  // get the current state of sidebar
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  // invert the sidebar state
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const { setTheme } = useTheme();
  const toggleDarkMode = () => {
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    dispatch(setIsDarkMode(!isDarkMode));
  };
  return (
    <>
      <div className="flex justify-between items-center w-full mb-7">
        {/*LEFT SIDE */}
        <div className="flex justify-between items-center gap-5">
          <button
            className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
            onClick={toggleSidebar}
          >
            <Menu className="w-4 h-4" />
          </button>

          <div className="relative">
            {/*Input serach */}
            <input
              type="search"
              placeholder="Start typing to search for products"
              className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 pointer-events-none flex items-center">
              <Bell className="text-gray-500" size={20} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-between items-center gap-5">
          {/* Settings icon, avatar etc. */}
          <div className="hidden md:flex justify-between items-center gap-5">
            <div>
              <button onClick={toggleDarkMode}>
                {/* Button for switching day and night mode */}
                <Sun className="cursor-pointer text-gray-500" size={24} />
              </button>
            </div>
            <div className="relative">
              <Bell className="cursor-pointer text-gray-500" size={24} />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
                3
              </span>
            </div>
            <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9">
                <Image
                  src="https://s3-inventorybucket-root.s3.ap-southeast-1.amazonaws.com/profile.jpg"
                  alt="profile picture"
                  width={50}
                  height={50}
                  className="h-full object-cover rounded-full"
                />
              </div>{" "}
              {/* Avatar */}
              <span className="font-semibold">Meeseeks</span> {/* Username */}
            </div>
          </div>

          {/* Settings part NOT HIDDEN WHEN SHRINK */}
          <Link href={"/settings"}>
            <Settings />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
