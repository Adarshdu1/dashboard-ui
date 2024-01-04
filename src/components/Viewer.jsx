import React from "react";
import ViewerGraph from "./ViewerGraph";
import { FaArrowTrendDown } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
export default function Viewer() {
  return (
    <>
      <div className=" w-[360px]">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 items-center">
            <p className="font-bold">Visitors</p>
            <p className="flex items-center space-x-1 text-red-600">
              <FaArrowTrendDown />
              <p>-0.3%</p>
            </p>
          </div>
          <div className="">
            <SlOptionsVertical className="text-slate-400" />
          </div>
        </div>
        <div className="pt-3 overflow-auto">
          <ViewerGraph />
        </div>
      </div>
    </>
  );
}
