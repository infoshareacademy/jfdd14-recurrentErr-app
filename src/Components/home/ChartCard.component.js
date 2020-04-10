import React from "react";
import { Card, CardContent } from "semantic-ui-react";

function ChartCard(props) {
  return (
    <Card fluid>
      <Card.Content>
        {
          props.header &&
          <Card.Header textAlign="center">{props.header}</Card.Header>
        }
        <CardContent textAlign={props.textAlignContent}>
          {props.children}
        </CardContent>
        {
          props.meta && 
          <Card.Meta textAlign="center">{props.meta}</Card.Meta>
        }
      </Card.Content>
    </Card>
  );
}

export default ChartCard;
