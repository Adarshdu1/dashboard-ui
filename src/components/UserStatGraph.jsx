import React from "react";
import { LineChart, Line } from "recharts";
export default function UserStatGraph() {
  const data = [
    { day: 1, impressions: 4 },
    { day: 2, impressions: 10 },
    { day: 3, impressions: 12 },
    { day: 4, impressions: 20 },
    { day: 5, impressions: 19 },
    { day: 6, impressions: 8 },
    { day: 7, impressions: 10 },
    { day: 8, impressions: 2 },
    { day: 9, impressions: 4 },
    { day: 10, impressions: 6 },
    { day: 11, impressions: 12 },
    { day: 12, impressions: 13 },
  ];
  return (
    <>
      <LineChart width={100} height={50} data={data}>
        <Line
          type="monotone"
          dot={false}
          dataKey="impressions"
          strokeWidth={2}
          stroke="#8884d8"
        />
      </LineChart>
    </>
  );
}
