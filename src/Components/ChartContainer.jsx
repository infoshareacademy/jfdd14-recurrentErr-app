import React from 'react';
import { Card } from 'semantic-ui-react';
import { ResponsiveContainer } from 'recharts';

function ChartContainer(props){
    return (
      <Card centered fluid>
        <Card.Content>
          <Card.Header textAlign="center">{props.header}</Card.Header>
          <div style={{ width: "100%", height: "40vh", position: "relative" }}>
            <ResponsiveContainer>
              {props.children}
            </ResponsiveContainer>
          </div>
          <Card.Meta textAlign="center">{props.meta}</Card.Meta>
        </Card.Content>
      </Card>
    );
}

export default ChartContainer;