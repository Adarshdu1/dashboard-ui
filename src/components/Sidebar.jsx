import React from "react";

import { FaRegLightbulb } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { TbPuzzle } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import { MdOutlinePersonAddAlt } from "react-icons/md";

export default function Sidebar() {
  return (
    <>
      <div className="whitespace-nowrap bg-[#464677] h-full">
        {/* Logo */}
        <div className="py-7 sm:px-10 px-7 flex items-center space-x-2">
          <div className="-rotate-45 p-1 bg-pink-500 rounded-full">
            <FaRegLightbulb className="text-xl text-white" />
          </div>
          <div className="sm:text-2xl text-lg font-bold text-white">
            Skilify Admin
          </div>
        </div>
        {/* Navbar */}
        <div className="">
          <div className="flex flex-col space-y-2 sm:px-7 px-4 pb-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center ">
                <AiOutlineHome className="sm:text-2xl text-lg" />
                <div className="sm:text-xl text-md">Dashboard</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center">
                <FaRegPlayCircle className="sm:text-2xl text-lg" />
                <div className="sm:text-xl text-md">My Course</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center">
                <CiCalendar className="font-bold sm:text-2xl text-lg" />
                <div className="sm:text-xl text-md">Calendar</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center">
                <IoBookOutline className="sm:text-2xl text-lg" />
                <div className="text-md sm:text-xl">Resource</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center">
                <TbPuzzle className="text-lg sm:text-2xl" />
                <div className="sm:text-xl text-md">Quiz</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
            <NavLink
              to="/message"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center ">
                <FiMessageSquare className="sm:text-2xl text-lg" />
                <div className="sm:text-xl text-md">Message</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
            <NavLink
              to="/status"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center">
                <FaArrowTrendUp className="sm:text-2xl text-lg" />
                <div className="sm:text-xl text-md">My Status</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center">
                <LuWallet className="sm:text-2xl text-lg" />
                <div className="sm:text-xl text-md">Wallet</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 text-slate-300 hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 rounded-xl ${
                  isActive ? "bg-white text-violet-600" : ""
                }`
              }
            >
              <div className="flex space-x-6 items-center ">
                <MdOutlinePersonAddAlt className="sm:text-2xl text-lg" />
                <div className="sm:text-xl text-md">My Account</div>
              </div>
              <div className="sm:text-lg text-md font-semibold"> &gt;</div>
            </NavLink>
          </div>
        </div>
        {/* Promotion */}
        <div className="sm:px-7 px-4 sm:py-10 py-5">
          <div className="bg-white flex flex-col items-center sm:p-7 p-5 rounded-xl space-y-7">
            <div className="">
              <img src="/vite.svg" alt="" width={100} />
            </div>
            <div className="">
              <button
                type="button"
                className="px-5 py-3 text-slate-300 bg-orange-600 rounded-md text-md hover:bg-orange-700 active:bg-orange-800 hover:text-white active:text-white"
              >
                Get Subscription
              </button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="sm:px-7 px-5 pb-5 2xl:text-base text-sm">
          <p className="font-semibold text-white whitespace-nowrap">
            Skilify Teacher Dashboard Admin
          </p>
          <p className="text-slate-300">&copy; 2024 All right reserved</p>
        </div>
      </div>
    </>
  );
}
