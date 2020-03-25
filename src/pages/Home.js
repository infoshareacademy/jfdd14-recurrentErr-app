import React from 'react';
import App from '../App';
import { Header, Card, Grid } from 'semantic-ui-react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const items = {
    header: 'Rodzaje wędrówek',
    meta: 'Procentowy udział wędrówek w zależności od spędzonego czasu',
  };

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
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
        <Grid.Column width={7}>
          <Card centered fluid item={items}>
            <Card.Content>
              <Card.Header textAlign='center'>{items.header}</Card.Header>
              <div style={{ width: '100%', height: 450 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie dataKey="value" data={data} fill="#8884d8" label />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <Card.Meta textAlign='center'>{items.meta}</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={7}>
          <Card centered fluid item={items}>
            <Card.Content>
              <Card.Header textAlign='center'>{items.header}</Card.Header>
              <div style={{ width: '100%', height: 450 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie dataKey="value" data={data} fill="#8884d8" label />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <Card.Meta textAlign='center'>{items.meta}</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
      </div>
    );
}

export default Home;