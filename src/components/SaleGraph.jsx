import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Current Week", value: 2000 },
  { name: "Last Week", value: 1500 },
];

const COLORS = ["#ff4500", "#464677"]; // You can add more colors as needed

const SaleGraph = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="50%" // Set inner radius for the ring effect
            outerRadius="70%"
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
      </ResponsiveContainer>
    </div>
  );
};

export default SaleGraph;
