import React from 'react';
import App from '../App';
import { Header, Grid } from 'semantic-ui-react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
import ChartContainer from '../Components/ChartCard.jsx';

const items = {
    header: 'Rodzaje wędrówek',
    meta: 'Procentowy udział wędrówek w zależności od spędzonego czasu',
  };

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];

const barData = [
  {
    name: 'pon.', pv: 2400,
  },
  {
    name: 'wt.', pv: 1398,
  },
  {
    name: 'śr.', pv: 9800,
  },
  {
    name: 'czw.', pv: 3908,
  },
  {
    name: 'pt.', pv: 4800,
  },
  {
    name: 'sob.', pv: 3800,
  },
  {
    name: 'nd.', pv: 4300,
  },
];

function Home(){
    return (
      <div>
        <App />
        <Header as="h2" textAlign="center">
          Dzień dobry wędrowcze!
        </Header>
        <Header as="h3" textAlign="center" disabled>
          Masz tutaj parę statystyk dla odświeżenia pamięci
        </Header>
        <Grid centered stackable columns={2}>
          <Grid.Column width={6}>
            <ChartContainer header={items.header} meta={items.meta}>
              <PieChart>
                <Pie dataKey="value" data={data} fill="#8884d8" label />
              </PieChart>
            </ChartContainer>
          </Grid.Column>
          <Grid.Column width={6}>
            <ChartContainer header={items.header} meta={items.meta}>
              <BarChart
                data={barData}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 5
                }}
                barSize={15}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis axisLine={false}/>
                <Tooltip />
                <ReferenceLine y={10000} stroke='#eee' />
                <ReferenceLine y={7500} stroke='#eee' />
                <ReferenceLine y={5000} stroke='#eee' />
                <ReferenceLine y={2500} stroke='#eee' />
                <Bar
                  dataKey="pv"
                  fill="#8884d8"
                />
              </BarChart>
            </ChartContainer>
          </Grid.Column>
        </Grid>
      </div>
    );
}

export default Home;