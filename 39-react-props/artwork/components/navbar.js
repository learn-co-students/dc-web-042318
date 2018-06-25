import React from "react";

// props:
// title
// icon
// tagline
// color

// default props { color: 'blue' }
const Navbar = (props = { color: "blue" }) => {
  console.log(props);
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.subtitle}</div>
        </h2>
      </a>
    </div>
  );
};

export default Navbar;
