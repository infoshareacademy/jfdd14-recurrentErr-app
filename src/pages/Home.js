import React from 'react';
import App from '../App';
import { Header, Card, Grid } from 'semantic-ui-react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

// const items = [
//     {
//       header: 'Rodzaje wędrówek',
//       meta: 'Procentowy udział wędrówek w zależności od spędzonego czasu',
//     },
//     {
//       header: 'Czas wędrówek',
//       meta: 'Ile czasu poświęciłeś w tygodniu na wędrówki',
//     },
// ];

const items = {
    header: 'Rodzaje wędrówek',
    meta: 'Procentowy udział wędrówek w zależności od spędzonego czasu',
  };

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
      <PieChart width={420} height={400}>
        <Pie
          data={data}
          cx={172}
          cy={190}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
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
    // <div>
    //     <App />
    //     {/* <Card.Group centered fluid items={items} /> */}
    //     <Card centered item={items}>
    //       <Card.Content>
    //         <Card.Header>{items.header}</Card.Header>
    //         <Grid centered>{CustomPieChart()}</Grid>
    //         <Card.Meta>{items.meta}</Card.Meta>
    //       </Card.Content>
    //     </Card>
    // </div>
    <div>
      <App />
      <Header as='h2' textAlign='center'>Dzień dobry wędrowcze!</Header>
      <Header as='h3' textAlign='center' disabled>Masz tutaj parę statystyk dla odświeżenia pamięci</Header>
      <Grid centered stackable columns={2}>
        <Grid.Column width={7}>
          <Card centered fluid item={items}>
            <Card.Content>
              <Card.Header textAlign='center'>{items.header}</Card.Header>
              <Grid centered>{CustomPieChart()}</Grid>
              <Card.Meta textAlign='center'>{items.meta}</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={7}>
          <Card centered fluid item={items}>
            <Card.Content>
              <Card.Header textAlign='center'>{items.header}</Card.Header>
              <Grid centered>{CustomPieChart()}</Grid>
              <Card.Meta textAlign='center'>{items.meta}</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
    )
}

export default Home;


