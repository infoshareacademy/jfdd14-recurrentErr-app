import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import ChartContainer from "../Home/ChartCard";

const colors = ["#51d597", "#d1d551", "#d5518f", "#5551d5"];

function CustomPieChart(props) {
  const { pieHeader, pieMeta, pieData } = props;

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
