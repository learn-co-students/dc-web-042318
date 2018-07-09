import React from "react";
import { Input } from "semantic-ui-react";

const SearchBar = ({ value, handleInputChange }) => {
  return (
    <Input value={value} onChange={e => handleInputChange(e.target.value)} />
  );
};

export default SearchBar;
