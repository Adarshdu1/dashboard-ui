import React from "react";
import WeeklyStatGraph from "./WeeklyStatsGraph";
import { SlOptionsVertical } from "react-icons/sl";

export default function WeeklyStat() {
  return (
    <>
      <div className="sm:w-[300px] w-[360px]">
        <div className="flex items-center justify-between">
          <div className="font-bold">Weekly Sales Stats</div>
          <div className="">
            <SlOptionsVertical className="text-slate-400" />
          </div>
        </div>
        <div className="pt-2">
          <hr className="border-slate-200" />
        </div>
        <div className="pt-3 sm:block hidden">
          <WeeklyStatGraph wide={300} />
        </div>
        <div className="pt-3 sm:hidden ">
          <WeeklyStatGraph wide={360} />
        </div>
        <div className="">
          <div className="flex justify-between items-center pb-2">
            <div className="">
              <img src="/group_coding.jpeg" alt="" width={50} />
            </div>
            <div className="">
              <div className="font-semibold">Adobe XD Part 01</div>
              <div className="text-slate-500">UI/UX Design</div>
            </div>
            <div className="px-2 py-1 bg-green-300 rounded-md">$20</div>
          </div>
          <div className="flex justify-between items-center pb-2">
            <div className="">
              <img src="/group_coding.jpeg" alt="" width={50} />
            </div>
            <div className="">
              <div className="font-semibold">Adobe XD Part 02</div>
              <div className="text-slate-500">UI/UX Design</div>
            </div>
            <div className="px-2 py-1 bg-emerald-300 rounded-md">$20</div>
          </div>
          <div className="flex justify-between items-center pb-2">
            <div className="">
              <img src="/group_coding.jpeg" alt="" width={50} />
            </div>
            <div className="">
              <div className="font-semibold">Adobe XD Part 03</div>
              <div className="text-slate-500">UI/UX Design</div>
            </div>
            <div className="px-2 py-1 bg-red-300 rounded-md">$20</div>
          </div>
        </div>
      </div>
    </>
  );
}
