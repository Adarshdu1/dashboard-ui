import React from "react";

export default function CourseStatus() {
  return (
    <>
      <div className="">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <p className="font-bold">Course Status</p>
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
        <div className="pt-5">
          <table className="w-full   p-2">
            <thead className="bg-gray-100  h-10 border-b">
              <tr className="text-left">
                <th className="p-2">Name</th>
                <th className="p-2">Category</th>
                <th className="p-2">Sale</th>
                <th className="p-2">Rating</th>
                <th className="p-2">Earning</th>
                <th className="p-2">Visitor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-2">
                  <div className="flex space-x-7">
                    <img src="/python_course.jpeg" width={50} alt="" />
                    <div className="">
                      <p className="font-semibold">
                        Complete Python Bootcamp in Python
                      </p>
                      <p className="text-slate-500">Development</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">Design</td>
                <td className="p-2">150</td>
                <td className="p-2">⭐4.5</td>
                <td className="p-2">$610.50</td>
                <td className="p-2">24,512</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-2">
                  <div className="flex space-x-7">
                    <img src="/excel_course.jpeg" width={50} alt="" />
                    <div className="">
                      <p className="font-semibold">
                        Advanced Excel Formulas & Functions
                      </p>
                      <p className="text-slate-500">Learn Backend</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">Development</td>
                <td className="p-2">20</td>
                <td className="p-2">⭐5.0</td>
                <td className="p-2">$55.50</td>
                <td className="p-2">6,200</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-2">
                  <div className="flex space-x-7">
                    <img src="/filmora_course.jpeg" width={50} alt="" />
                    <div className="">
                      <p className="font-semibold">Video Editor in Filmora9</p>
                      <p className="text-slate-500">Video Creation</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">Photography</td>
                <td className="p-2">56</td>
                <td className="p-2">⭐4.5</td>
                <td className="p-2">$610.50</td>
                <td className="p-2">24,512</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-2">
                  <div className="flex space-x-7">
                    <img src="/meeting.jpeg" width={50} alt="" />
                    <div className="">
                      <p className="font-semibold">
                        Online Meeting Facilitation: The 4 Secret Keys
                      </p>
                      <p className="text-slate-500">Marketing Courses</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">Marketing</td>
                <td className="p-2">150</td>
                <td className="p-2">⭐4.5</td>
                <td className="p-2">$610.50</td>
                <td className="p-2">24,512</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-2">
                  <div className="flex space-x-7">
                    <img src="/guitar.jpeg" width={50} alt="" />
                    <div className="">
                      <p className="font-semibold">
                        Intermediate Blues Rhythm Guitar
                      </p>
                      <p className="text-slate-500">Music Fundamentals</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">Music</td>
                <td className="p-2">30</td>
                <td className="p-2">⭐5.0</td>
                <td className="p-2">$110.50</td>
                <td className="p-2">6,512</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-2">
                  <div className="flex space-x-7">
                    <img src="/b2b.jpeg" width={50} alt="" />
                    <div className="">
                      <p className="font-semibold">
                        B2B Sales Masterclass: People-Focused Selling
                      </p>
                      <p className="text-slate-500">Business Courses</p>
                    </div>
                  </div>
                </td>
                <td className="p-2">Business</td>
                <td className="p-2">90</td>
                <td className="p-2">⭐4.5</td>
                <td className="p-2">$240.50</td>
                <td className="p-2">512</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
