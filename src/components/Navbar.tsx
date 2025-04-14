import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuMessageCircleCode } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between p-4 text-gray-900 px-6 md:mx-10 ">
      <div className="hidden md:flex justify-start items-center gap-3 rounded-4xl bg-white text-gray-900 py-1  px-3 border border-gray-400 ">
        <CiSearch />
        <input
          type="search"
          placeholder="Search..."
          className="focus:border-none"
        />
      </div>
      <div className="flex flex-row w-full md:1/2  md:justify-end  items-center justify-around md:bg-inherit gap-10 ">
        <div className="flex flex-row gap-5 text-xl">
          <LuMessageCircleCode />
          <IoMdNotificationsOutline />
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="flex flex-col">
            <h2 className="text-sm text-gray-900">Victor Inn</h2>
            <span className="text-xs">Admin </span>
          </div>
          <CgProfile className="text-3xl font-medium" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
