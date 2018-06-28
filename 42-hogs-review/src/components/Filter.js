import React from "react";

const Filter = props => {
  return (
    <div className="filterWrapper">
      <form>
        <label>Sort By: </label>
        <select name="sort" onChange={props.sortTypeChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <label>Greased Pigs Only?</label>
        <input type="checkbox" />
      </form>
    </div>
  );
};

export default Filter;
