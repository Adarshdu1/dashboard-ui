import React from "react";
import SaleGraph from "./SaleGraph";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
export default function Sale() {
  return (
    <>
      <div className="sm:w-[250px] w-[360px] text-gray-700">
        <div className="flex items-center justify-between">
          <div className="font-bold">Sale</div>
          <div className="">
            <SlOptionsVertical className="text-slate-400" />
          </div>
        </div>
        <div className="pt-2">
          <hr className="border-slate-200" />
        </div>
        <div className="relative sm:block flex justify-center">
          <SaleGraph />
          <div className="absolute top-[53%] sm:right-[53%] right-[48%] transform translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <h1 className="font-bold">3,500</h1>
            <p className="text-slate-500">Total Sale</p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between pb-3">
            <div className="whitespace-nowrap">Current Week</div>
            <div className="">2000</div>
            <div className="flex items-center space-x-1 text-green-600">
              <FaArrowTrendUp />
              <div className="">+0.3%</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="whitespace-nowrap pr-5">Last Week</div>
            <div className="">1500</div>
            <div className="flex items-center space-x-1 text-red-600">
              <FaArrowTrendDown />
              <div className="">-0.3%</div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
