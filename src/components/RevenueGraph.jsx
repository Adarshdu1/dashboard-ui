import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function RevenueGraph() {
  const data = [
    { visit: 20, sale: 5, month: "Jan" },
    { visit: 55, sale: 25, month: "Feb" },
    { visit: 48, sale: 32, month: "Mar" },
    { visit: 51, sale: 35, month: "Apr" },
    { visit: 79, sale: 15, month: "May" },
    { visit: 65, sale: 65, month: "June" },
    { visit: 55, sale: 68, month: "July" },
    { visit: 47, sale: 12, month: "Aug" },
    { visit: 63, sale: 20, month: "Sep" },
    { visit: 40, sale: 63, month: "Oct" },
    { visit: 38, sale: 52, month: "Nov" },
    { visit: 83, sale: 35, month: "Dec" },
  ];

  return (
    <div className="w-full mx-auto">
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis dataKey="visit" axisLine={false} tickLine={false} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="natural"
            dataKey="sale"
            stroke="#ff007f"
            fillOpacity={1}
            fill="url(#fff)"
          />
          <Area
            type="natural"
            dataKey="visit"
            stroke="#464677"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
