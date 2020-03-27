import React from "react";
import App from "../App";
import { Header, Grid } from "semantic-ui-react";
import { PieChart, Pie } from "recharts";
import ChartContainer from "../Components/ChartCard.jsx";
import CustomBarChart from "../Components/CustomBarChart.jsx";
import CustomPieChart from "../Components/CustomPieChart.jsx";

const items = {
  pie: {
    header: "Rodzaje wędrówek",
    meta: "Ilość poszczeóglnych wędrówek w odniesieniu do całości"
  },
  bar: {
    header: "Tyle przespacerowałeś w poprzednich czterech tygoniach",
    meta: "Czas w minutach"
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
    { name: "09.03-15.03", value: 120 },
    { name: "16.03-22.03", value: 30 },
    { name: "23.03-29.03", value: 160 },
    { name: "30.03-05.04", value: 100 }
  ]
};

function Home() {
  return (
    <div>
      <App />
      <Header as="h2" textAlign="center">
        Dzień dobry wędrowcze!
        <Header.Subheader textAlign="center">
          Masz tutaj parę statystyk dla odświeżenia pamięci
        </Header.Subheader>
      </Header>

      <Grid centered stackable columns={2}>
        <Grid.Column width={7}>
          <CustomPieChart
            pieHeader={items.pie.header}
            pieMeta={items.pie.meta}
            pieData={data.pie}
          />
        </Grid.Column>
        <Grid.Column width={7}>
          <CustomBarChart
            barHeader={items.bar.header}
            barMeta={items.bar.meta}
            barData={data.bar}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Home;
