import React from 'react';
import App from '../App';
import { Card } from 'semantic-ui-react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const items = [
    {
      header: 'Rodzaje wędrówek',
      description:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      meta: 'Procentowy udział wędrówek w zależności od spędzonego czasu',
    },
    {
      header: 'Czas wędrówek',
      description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'Ile czasu poświęciłeś w tygodniu na wędrówki',
    },
];

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart = () => {
  return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
  );
}

function Home(){
    return( 
    <div>
        <App />
        <Card.Group centered fluid items={items} />
        {CustomPieChart()}
    </div>)
}

export default Home;


