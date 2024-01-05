import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UserStat from "./components/UserStat";
import Revenue from "./components/Revenue";
import Viewer from "./components/Viewer";
import Sale from "./components/Sale";
import WeeklyStat from "./components/WeeklyStat";
import StudentQueries from "./components/StudentQueries";
import CourseStatus from "./components/CourseStatus";

export default function Hello() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <div className="flex">
        <div
          className={`sm:w-[19%] w-60 ${
            toggle ? "block" : "hidden"
          } transition-all duration-1000 ease-in-out`}
        >
          <Sidebar />
        </div>

        <div className={`${toggle ? "sm:w-[81%] overflow-auto" : "w-full"}`}>
          <div className="">
            <Navbar setToggle={setToggle} toggle={toggle} />
            <div className="grid space-y-3 sm:space-y-0 grid-cols-1 sm:grid-cols-4 sm:px-10 px-5 sm:py-5 justify-between">
              <UserStat stats="Impressions" />
              <UserStat stats="Total audience" />
              <UserStat stats="Engagements" />
              <UserStat stats="Engaged audience" />
            </div>
            <div className="sm:px-10 px-5 py-5 sm:grid sm:grid-cols-3 grid grid-cols-1 sm:space-y-0 space-y-3 sm:space-x-5">
              <div className="col-span-2">
                <Revenue />
              </div>
              <Viewer />
            </div>
            <div className="sm:px-10 px-5 py-5 sm:grid sm:grid-cols-10 grid grid-cols-1 sm:space-y-0 space-y-3 sm:space-x-10   justify-between">
              <div className="sm:col-span-2">
                {" "}
                <Sale />
              </div>
              <div className="sm:col-span-3">
                <WeeklyStat />
              </div>
              <div className="sm:col-span-5">
                {" "}
                <StudentQueries />
              </div>
            </div>
            <div className="sm:px-10 p-5">
              <CourseStatus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
