import React from "react";
import { List } from "semantic-ui-react";

const CocktailsList = ({ cocktails, handleClick }) => {
  return (
    <List bulleted>
      {cocktails.map(cocktail => (
        <List.Item
          key={cocktail.id}
          onClick={() => {
            handleClick(cocktail.id);
          }}
        >
          {cocktail.name}
        </List.Item>
      ))}
    </List>
  );
};

export default CocktailsList;
