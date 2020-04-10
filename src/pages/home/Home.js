import React from "react";
import { Grid, Statistic } from "semantic-ui-react";
import {
  toPieData,
  toBarData,
  toMaxDistance,
} from "../../modules/home/statisticFunctions.module";
import ChartCard from "../../Components/home/ChartCard.component";
import CustomBarChart from "../../Components/home/CustomBarChart.component";
import CustomPieChart from "../../Components/home/CustomPieChart.component";
import Info from "../../Components/Info/Info";
import InfoImage from "../../Components/InfoImage/InfoImage";
import "./Home.style.css";

const items = {
  pie: {
    header: "Rodzaje tras - poziom trudności",
    meta: "Ilość tras na poszczególnych poziomach trudności",
  },
  bar: {
    header: "Rodzaje tras - długość",
    meta: "Ilość poszczególnych wędrówek o określosnej długości",
  },
};

const levels = ["łatwy", "średni", "trudny"];

const distances = [
  [0, 5],
  [5, 10],
  [10, 20],
  [20, 30],
];

function Home({ places }) {
  const pieData = toPieData(levels, places);
  const barData = toBarData(distances, places);
  const maxDistance = toMaxDistance(places);
  const numOfPaths = places.length;

  return (
    <React.Fragment>
      <Grid centered columns={2} padded>
        <Grid.Column
          mobile={14}
          tablet={12}
          computer={14}
          largeScreen={12}
          verticalAlign="middle"
        >
          <ChartCard>
            <Grid stackable columns={2} className="home__info">
              <Grid.Column>
                <Info />
              </Grid.Column>
              <Grid.Column className="home__info__column">
                <InfoImage />
              </Grid.Column>
            </Grid>
          </ChartCard>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column
            mobile={14}
            tablet={12}
            computer={7}
            largeScreen={6}
            stretched
            className="home__column--padding"
          >
            <ChartCard textAlignContent="center">
              <Statistic>
                <Statistic.Value>{numOfPaths}</Statistic.Value>
                <Statistic.Label>Tras w bazie danych</Statistic.Label>
              </Statistic>
            </ChartCard>
          </Grid.Column>
          <Grid.Column
            mobile={14}
            tablet={12}
            computer={7}
            largeScreen={6}
            stretched
          >
            <ChartCard textAlignContent="center">
              <Statistic>
                <Statistic.Value className="home__statistic">
                  {maxDistance} km
                </Statistic.Value>
                <Statistic.Label>Najdłuższa trasa</Statistic.Label>
              </Statistic>
            </ChartCard>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column
            mobile={14}
            tablet={12}
            computer={7}
            largeScreen={6}
            stretched
            className="home__column--padding"
          >
            <ChartCard header={items.pie.header} meta={items.pie.meta}>
              <CustomPieChart pieData={pieData} />
            </ChartCard>
          </Grid.Column>
          <Grid.Column
            mobile={14}
            tablet={12}
            computer={7}
            largeScreen={6}
            stretched
          >
            <ChartCard header={items.bar.header} meta={items.bar.meta}>
              <CustomBarChart barData={barData} />
            </ChartCard>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
