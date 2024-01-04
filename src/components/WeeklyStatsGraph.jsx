import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function WeeklyStatGraph({ wide }) {
  const data = [
    { visit: 20, sale: 1, month: "Mon" },
    { visit: 55, sale: 25, month: "Tue" },
    { visit: 48, sale: 12, month: "Wed" },
    { visit: 51, sale: 25, month: "Thu" },
    { visit: 79, sale: 15, month: "Fri" },
    { visit: 65, sale: 30, month: "Sat" },
    { visit: 55, sale: 28, month: "Sun" },
  ];
  return (
    <AreaChart
      width={wide}
      height={100}
      data={data}
      margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="2%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="25%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis hide={true} tickLine={false} axisLine={false} />
      <YAxis hide={true} axisLine={false} tickLine={false} />

      <Tooltip />

      <Area
        type="natural"
        dataKey="sale"
        stroke="#464677"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
}
