import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import ChartContainer from "../Components/ChartCard.jsx";

const colors = ["#8b6e60", "#8b607d", "#608b6e", "#607d8b"];

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
