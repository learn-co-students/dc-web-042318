import React from 'react';

const SearchBar = (props) => {
  return(
    <input style={{width:'60%'}} placeholder={"Search"} onChange={(e) => {props.searchHandler(e.target.value)}}/>
  );
}

export default SearchBar;
