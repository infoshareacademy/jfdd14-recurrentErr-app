import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import ChartContainer from "./ChartCard";

function CustomBarChart({ barHeader, barMeta, barData }) {
  return (
    <ChartContainer header={barHeader} meta={barMeta}>
      <BarChart
        layout="vertical"
        data={barData}
        margin={{
          top: 5,
          right: 30,
          bottom: 5,
          left: 30,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" horizontal={false} />
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Bar dataKey="value" barSize={20} fill="#5551d5" />
      </BarChart>
    </ChartContainer>
  );
}

export default CustomBarChart;
