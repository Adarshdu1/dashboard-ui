import React from "react";
import { SlOptionsVertical } from "react-icons/sl";

export default function StudentQueries() {
  return (
    <>
      <div className="w-[500px]">
        <div className="flex items-center justify-between pb-7">
          <div className="font-bold">Weekly Sales Stats</div>
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
              className="px-4 py-2 bg-[rgb(167,163,241)] w-24 rounded-md text-slate-900"
            >
              View
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-pink-300 rounded-md text-pink-900"
            >
              Decline
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
              className="px-4 py-2 bg-green-300 rounded-md text-green-900"
            >
              Approval
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-pink-300 rounded-md text-pink-900"
            >
              Decline
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
              className="px-4 py-2 bg-green-300 rounded-md text-green-900"
            >
              Approval
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-pink-300 rounded-md text-pink-900"
            >
              Decline
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
              className="px-4 py-2 bg-green-300 rounded-md text-green-900"
            >
              Approval
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-pink-300 rounded-md text-pink-900"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
