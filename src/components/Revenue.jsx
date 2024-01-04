import React from "react";
import RevenueGraph from "./RevenueGraph";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Revenue() {
  return (
    <>
      <div className="w-[730px]">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <p className="font-bold">Revenue</p>
            <p className="flex items-center space-x-1 text-green-600">
              <FaArrowTrendUp />
              <p>+0.3%</p>
            </p>
          </div>
          <div className="flex space-x-7">
            <div className="flex items-center space-x-3">
              <p className="">Course Visit</p>
              <div className="relative">
                <div className="absolute p-2 bg-[#464677] rounded-full -top-2"></div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <p className="">Course Sale</p>
              <div className="relative">
                <div className="absolute p-2 bg-[#ff007f] rounded-full -top-2"></div>
              </div>
            </div>

            <div className="">
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
        <div className="pt-3">
          <RevenueGraph />
        </div>
      </div>
    </>
  );
}
