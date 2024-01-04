import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUpload } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
export default function Navbar({ toggle, setToggle }) {
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex justify-between px-10 py-7 ">
        <div className="flex items-center space-x-3 text-xl text-slate-700">
          <div
            className="hover:outline hover:outline-1 hover:rounded-md p-1 "
            onClick={handleToggle}
          >
            {toggle ? (
              <IoCloseOutline className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </div>
          <div className="font-bold">Hello Mad✋</div>
        </div>
        <div className="flex py-1 px-3 bg-gray-100 items-center space-x-1 rounded-md text-lg">
          <CiSearch className="text-gray-500 font-bold text-2xl" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here"
            className="p-1 outline-none bg-gray-100 text-gray-700"
          />
        </div>
        <div className="flex space-x-9">
          <div className="text-md">
            <button
              type="button"
              className="flex items-center space-x-1 p-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-md"
            >
              <HiOutlineUpload className="text-2xl" />
              <div className="">New Upload</div>
            </button>
          </div>
          <div className="flex items-center py-1 px-3 bg-gray-100 rounded-md">
            <div className="relative">
              <FaRegBell className="text-2xl" />
              <p className="p-[7px] rounded-full absolute bg-pink-500 top-0 right-0 outline-1 outline outline-black"></p>
              <p className="absolute top-0 right-1 text-[10px] text-white">2</p>
            </div>
          </div>
          <div className="flex items-center py-1 px-3 bg-gray-100 rounded-md">
            <AiOutlineMessage className="text-2xl" />
          </div>
          <div className="flex items-center py-1 px-3 bg-gray-100 rounded-md">
            <TbActivityHeartbeat className="text-2xl" />
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex flex-col items-end -space-y-1">
              <p className="font-bold text-slate-700">TheMad</p>
              <p className="text-slate-600">Designer</p>
            </div>
            <div className="">
              <img
                className="rounded-md"
                src="/profile_logo.jpeg"
                alt=""
                width={50}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
