import React from "react";
import RevenueGraph from "./RevenueGraph";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Revenue() {
  return (
    <>
      <div className="2xl:w-full sm:w-[600px] w-[360px]">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <p className="font-bold">Revenue</p>
            <p className="flex items-center space-x-1 text-green-600">
              <FaArrowTrendUp className="sm:block hidden" />
              <p>+0.3%</p>
            </p>
          </div>
          <div className="flex sm:space-x-7 space-x-3">
            <div className="flex items-center space-x-3">
              <p className="hidden sm:block">Course Visit</p>
              <p className="sm:hidden">Visit</p>
              <div className="relative">
                <div className="absolute p-2 bg-[#464677] rounded-full -top-2"></div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <p className="sm:block hidden">Course Sale</p>
              <p className="sm:hidden">Sale</p>
              <div className="relative">
                <div className="absolute p-2 bg-[#ff007f] rounded-full -top-2"></div>
              </div>
            </div>

            <div className="sm:pl-0 pl-1">
              <select
                name="filterOption"
                id=""
                className="outline-none"
                value={"January"}
              >
                <option value="January">This month</option>
                <option value="February">February</option>
                <option value="March">March</option>

                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>

                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>

                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pt-3  overflow-auto">
          <RevenueGraph />
        </div>
      </div>
    </>
  );
}
