import React from "react";
import { Item } from "semantic-ui-react";

const CocktailDetails = ({ cocktail }) => {
  return (
    <Item.Group>
      <Item>
        <Item.Image size="tiny" src="/images/wireframe/image.png" />
        <Item.Content>
          <Item.Header>{cocktail.name}</Item.Header>
          <Item.Description>{cocktail.description}</Item.Description>
          <Item.Description>Ingredients:</Item.Description>
          {cocktail.proportions.map(prop => (
            <Item.Meta>
              {prop.amount} {prop.ingredient_name}
            </Item.Meta>
          ))}
          <Item.Description>Instructions:</Item.Description>
          <Item.Meta>{cocktail.instructions}</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};
export default CocktailDetails;
