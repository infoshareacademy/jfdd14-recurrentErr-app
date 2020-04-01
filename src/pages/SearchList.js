import React, { useState, useEffect } from "react";
import {
  Image,
  Item,
  ItemContent,
  Button,
  Icon,
  Grid,
} from "semantic-ui-react";
import mapObjectToArray from "../Components/mapObjectToArray";
import { Link } from "react-router-dom";

const API_URL = "https://isa-crossroads.firebaseio.com/places/.json";

function SearchList() {
  const [places, setPlaces] = useState([]);

  const getPlaces = () => {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((placesObject) => {
        const placesArray = mapObjectToArray(placesObject);

        setPlaces(placesArray);
      });
  };

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <div>
      {places.map((place) => {
        return (
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Item.Group>
                  <Item>
                    <Item.Image size="medium" src={place.photo} />
                    <Item.Content>
                      <Item.Header>{place.name}</Item.Header>
                      <Item.Meta>{place.city}</Item.Meta>
                      <Button animated color="blue">
                        <Button.Content visible>
                          Dowiedz się więcej...
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name="arrow right" />
                        </Button.Content>
                      </Button>
                      <Button animated="vertical">
                        <Button.Content hidden>Shop</Button.Content>
                        <Button.Content visible>
                          <Icon name="shop" />
                        </Button.Content>
                      </Button>
                      <Button animated="fade">
                        <Button.Content visible>
                          Sign-up for a Pro account
                        </Button.Content>
                        <Button.Content hidden>$12.99 a month</Button.Content>
                      </Button>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      })}
    </div>
  );
}

{
  /* <Item>
<Item.Image size='tiny' src='/images/wireframe/image.png' />

<Item.Content>
  <Item.Header as='a'>Header</Item.Header>
  <Item.Meta>Description</Item.Meta>
  <Item.Description>
    <Image src='/images/wireframe/short-paragraph.png' />
  </Item.Description>
  <Item.Extra>Additional Details</Item.Extra>
</Item.Content>
</Item> */
}

export default SearchList;
