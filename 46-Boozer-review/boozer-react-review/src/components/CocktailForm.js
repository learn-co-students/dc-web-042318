import React from "react";
import { Form, Label, Button } from "semantic-ui-react";

const CocktailForm = () => {
  return (
    <Form>
      <Form.Input label="Name" placeholder="Cocktail Name" />
      <Form.TextArea
        label="Description"
        placeholder="Details about this cocktail"
      />
      <Form.TextArea label="Instructions" placeholder="How do I make this?" />
      <Label>Proportion</Label>
      <Form.Group widths="equal">
        <Form.Input label="Ingredient Name" placeholder="Ingredient Name" />
        <Form.Input label="Quantity" placeholder="Quantity" />
      </Form.Group>
      <Button basic color="teal" circular icon="plus" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CocktailForm;
