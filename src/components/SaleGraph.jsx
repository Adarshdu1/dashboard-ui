import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Current Week", value: 2000 },
  { name: "Last Week", value: 1500 },
];

const COLORS = ["#ff4500", "#464677"]; // You can add more colors as needed

const SaleGraph = () => {
  return (
    <PieChart width={220} height={220}>
      <Pie
        data={data}
        cx={110}
        cy={110}
        innerRadius={80} // Set inner radius for the ring effect
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            stroke="#334155"
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default SaleGraph;
