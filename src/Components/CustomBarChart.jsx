import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import ChartContainer from '../Components/ChartCard.jsx';

function CustomBarChart(props){
    return (
      <ChartContainer header={props.barHeader} meta={props.barMeta}>
        <BarChart
          layout="vertical"
          data={props.barData}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
            left: 30
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
          <Bar dataKey="czas" barSize={20} fill="#413ea0" />
        </BarChart>
      </ChartContainer>
    );
}

export default CustomBarChart;