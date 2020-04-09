import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import ChartContainer from "./ChartCard";

const colors = ["#51d597", "#d5518f", "#5551d5"];

function CustomPieChart({ pieHeader, pieMeta, pieData }) {
  return (
    <ChartContainer header={pieHeader} meta={pieMeta}>
      <PieChart>
        <Pie dataKey="value" data={pieData} fill="#8884d8" label>
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ChartContainer>
  );
}

export default CustomPieChart;
