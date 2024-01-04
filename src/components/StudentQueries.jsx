import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdCheckmark, IoMdOpen } from "react-icons/io";

export default function StudentQueries() {
  return (
    <>
      <div className="sm:w-[500px] w-[360px]">
        <div className="flex items-center justify-between pb-7">
          <div className="font-bold">Student Queries</div>
          <div className="">
            <SlOptionsVertical className="text-slate-400" />
          </div>
        </div>
        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center space-x-3">
            <div className="">
              <img src="/group_coding.jpeg" width={50} alt="" />
            </div>
            <div className="">
              <div className="font-semibold whitespace-nowrap">
                Machine Learning Bootcamp
              </div>

              <div className="text-slate-500">By James Board</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="sm:px-4 px-2 py-2 bg-[rgb(167,163,241)] hover:bg-[rgb(139,134,230)] hover:text-white  active:bg-[rgb(122,118,202)] sm:w-24 rounded-md text-slate-900"
            >
              <p className="sm:block hidden">View</p>
              <IoMdOpen className="sm:hidden" />
            </button>
            <button
              type="button"
              className="sm:px-4 px-2 py-2 bg-pink-300 hover:bg-pink-500 hover:text-white active:bg-pink-700 rounded-md text-pink-900"
            >
              <p className="sm:block hidden">Decline</p>
              <IoCloseOutline className="sm:hidden " />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center space-x-3">
            <div className="">
              <img src="/group_coding.jpeg" width={50} alt="" />
            </div>
            <div className="">
              <div className="font-semibold whitespace-nowrap">
                Python & R in Data Science
              </div>

              <div className="text-slate-500">Data Science</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="sm:px-4 px-2 py-2 bg-green-300 rounded-md hover:bg-green-500 active:bg-green-700 hover:text-white text-green-900"
            >
              <p className="sm:block hidden">Approval</p>
              <IoMdCheckmark className="sm:hidden" />
            </button>
            <button
              type="button"
              className="sm:px-4 px-2 py-2 bg-pink-300 rounded-md text-pink-900 hover:bg-pink-500 hover:text-white active:bg-pink-700"
            >
              <p className="sm:block hidden">Decline</p>
              <IoCloseOutline className="sm:hidden " />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center space-x-3">
            <div className="">
              <img src="/group_coding.jpeg" width={50} alt="" />
            </div>
            <div className="">
              <div className="font-semibold whitespace-nowrap">
                SuperDataScience Support
              </div>

              <div className="text-slate-500">Data Science</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="sm:px-4 px-2 py-2 bg-green-300 rounded-md text-green-900 hover:bg-green-500 active:bg-green-700 hover:text-white"
            >
              <p className="sm:block hidden">Approval</p>
              <IoMdCheckmark className="sm:hidden" />
            </button>
            <button
              type="button"
              className="sm:px-4 px-2 py-2 bg-pink-300 rounded-md text-pink-900 hover:bg-pink-500 hover:text-white active:bg-pink-700"
            >
              <p className="sm:block hidden">Decline</p>
              <IoCloseOutline className="sm:hidden " />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="">
              <img src="/group_coding.jpeg" width={50} alt="" />
            </div>
            <div className="">
              <div className="font-semibold whitespace-nowrap">
                Analyst Bootcamp 2024
              </div>

              <div className="text-slate-500">Data Science</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="sm:px-4 px-2 py-2 bg-green-300 rounded-md text-green-900 hover:bg-green-500 active:bg-green-700 hover:text-white"
            >
              <p className="sm:block hidden">Approval</p>
              <IoMdCheckmark className="sm:hidden" />
            </button>
            <button
              type="button"
              className="sm:px-4 px-2 py-2 bg-pink-300 rounded-md text-pink-900 hover:bg-pink-500 hover:text-white active:bg-pink-700"
            >
              <p className="sm:block hidden">Decline</p>
              <IoCloseOutline className="sm:hidden " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
