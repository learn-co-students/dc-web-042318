import React from "react";

const SearchBar = props => {
  // now a controlled component
  // value =
  return (
    <input
      className="ui input"
      type="text"
      placeholder="Search for a painting"
      value={props.searchTerm}
      onChange={e => {
        props.update(e.target.value);
      }}
    />
  );
};
export default SearchBar;
