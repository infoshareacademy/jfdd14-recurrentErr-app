import React from 'react';
import App from '../App';
import { Header, Grid } from 'semantic-ui-react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, CartesianGrid } from 'recharts';
import ChartContainer from '../Components/ChartCard.jsx';


const items = {
  pie: {
    header: "Rodzaje wędrówek",
    meta: "Procentowy udział wędrówek w zależności od spędzonego czasu"
  },
  bar: {
    header: "Rodzaje wędrówek",
    meta: "Procentowy udział wędrówek w zależności od spędzonego czasu"
  }
};


const data = {
  pie: [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ],
  bar: [
    { name: "pon.", pv: 120 },
    { name: "wt.", pv: 30 },
    { name: "śr.", pv: 160 },
    { name: "czw.", pv: 100 },
    { name: "pt.", pv: 40 },
    { name: "sob.", pv: 10 },
    { name: "nd.", pv: 20 }
  ]
};


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
          <Grid.Column width={7}>
            <ChartContainer header={items.pie.header} meta={items.pie.meta}>
              <PieChart>
                <Pie dataKey="value" data={data.pie} fill="#8884d8" label />
              </PieChart>
            </ChartContainer>
          </Grid.Column>
          <Grid.Column width={7}>
            <ChartContainer header={items.bar.header} meta={items.bar.meta}>
              <BarChart
                data={data.bar}
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
                  padding={{ left: 15, right: 15 }}
                />
                <YAxis axisLine={false} orientation='right' tickLine={false} />
                <CartesianGrid vertical={false} />
                <Tooltip />
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