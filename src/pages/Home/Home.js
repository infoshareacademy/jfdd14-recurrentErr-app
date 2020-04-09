import React from "react";
import { Header, Grid, Statistic } from "semantic-ui-react";
import CustomBarChart from "../../Components/Home/CustomBarChart";
import CustomPieChart from "../../Components/Home/CustomPieChart";
// import CustomRadarChart from "../../Components/Home/CustomRadarChart";
import "./Home.css";

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

function Home({ places }) {
  const chartData = {
    pie: [
      { name: "ławe", value: places.filter((e) => e.level === "łatwy").length },
      {
        name: "średnie",
        value: places.filter((e) => e.level === "średni").length,
      },
      {
        name: "trudne",
        value: places.filter((e) => e.level === "trudny").length,
      },
    ],
    bar: [
      { name: "0-5 km", value: places.filter((e) => e.distance <= 5).length },
      {
        name: "5-10 km",
        value: places.filter((e) => e.distance <= 10 && e.distance > 5).length,
      },
      {
        name: "10-20 km",
        value: places.filter((e) => e.distance <= 20 && e.distance > 10).length,
      },
      { name: ">20 km", value: places.filter((e) => e.distance > 20).length },
    ],
  };

  return (
    <React.Fragment>
      <Grid centered columns={2} padded>
        <Grid.Column width={16} verticalAlign="middle">
          <Header as="h2">
            Dzień dobry Wędrowcze!
            <Header.Subheader>
              Masz tutaj parę statystyk dla odświeżenia pamięci
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column tablet={12} computer={7} largeScreen={6} stretched>
            <Statistic className="home__column--padding">
              <Statistic.Value>{places.length}</Statistic.Value>
              <Statistic.Label>Tras w bazie danych</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column tablet={12} computer={7} largeScreen={6} stretched>
            <Statistic>
              <Statistic.Value>
                {places.reduce((max, e) => {
                  return max > e.distance ? max : e.distance;
                }, 0)}{" "}
                km
              </Statistic.Value>
              <Statistic.Label>Najdłuższa trasa</Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column
            tablet={12}
            computer={7}
            largeScreen={6}
            stretched
            className="home__column--padding"
          >
            <CustomPieChart
              pieHeader={items.pie.header}
              pieMeta={items.pie.meta}
              pieData={chartData.pie}
            />
          </Grid.Column>
          <Grid.Column tablet={12} computer={7} largeScreen={6} stretched>
            <CustomBarChart
              barHeader={items.bar.header}
              barMeta={items.bar.meta}
              barData={chartData.bar}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
