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
  const [toggle, setToggle] = React.useState(true);
  return (
    <>
      <div className="flex">
        <div
          className={`w-[19%] ${
            toggle ? "block" : "hidden"
          } transition-all duration-1000 ease-in-out`}
        >
          <Sidebar />
        </div>

        <div className={`${toggle ? "w-[81%]" : "w-full"}`}>
          <div className="">
            <Navbar setToggle={setToggle} toggle={toggle} />
            <div className="flex px-10 py-5 justify-between">
              <UserStat stats="Impressions" />
              <UserStat stats="Total audience" />
              <UserStat stats="Engagements" />
              <UserStat stats="Engaged audience" />
            </div>
            <div className="px-10 py-5 flex justify-between">
              <Revenue />
              <Viewer />
            </div>
            <div className="px-10 py-5 flex  justify-between">
              <Sale />
              <WeeklyStat />
              <StudentQueries />
            </div>
            <div className="px-10 p-5">
              <CourseStatus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
