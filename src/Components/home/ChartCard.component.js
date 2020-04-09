import React from "react";
import { Card } from "semantic-ui-react";

function ChartCard(props) {
  return (
    <Card centered fluid>
      <Card.Content>
        <Card.Header textAlign="center">{props.header}</Card.Header>
        <div style={{ width: "100%", height: "40vh" }}>{props.children}</div>
        <Card.Meta textAlign="center">{props.meta}</Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default ChartCard;
