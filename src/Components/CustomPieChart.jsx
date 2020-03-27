import React from "react";
import { PieChart, Pie } from "recharts";
import ChartContainer from "../Components/ChartCard.jsx";

function CustomPieChart(props) {
  return (
    <ChartContainer header={props.pieHeader} meta={props.pieMeta}>
      <PieChart>
        <Pie dataKey="value" data={props.pieData} fill="#8884d8" label />
      </PieChart>
    </ChartContainer>
  );
}

export default CustomPieChart;