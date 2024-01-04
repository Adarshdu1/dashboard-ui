import React from "react";
import UserStatGraph from "./UserStatGraph";

export default function UserStat({ stats }) {
  return (
    <>
      <div className="w-64">
        <div className=" flex items-center justify-between">
          <div className="flex space-x-4">
            <div className="h-16 bg-[#464677] w-[2px] rounded-lg"></div>
            <div className="flex flex-col justify-between">
              <p className="font-bold text-lg text-slate-700 whitespace-nowrap">
                {stats}
              </p>
              <p className="font-bold text-2xl text-slate-700">832</p>
            </div>
          </div>
          <div className="">
            <UserStatGraph />
          </div>
        </div>
      </div>
    </>
  );
}
