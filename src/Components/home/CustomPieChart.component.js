import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const pieChardStyle = {
  width: "100%",
  height: "40vh",
};

const colors = ["#51d597", "#d5518f", "#5551d5"];

function CustomPieChart({ pieData }) {
  return (
    <div style={pieChardStyle}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={pieData} fill="#8884d8" label>
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomPieChart;
