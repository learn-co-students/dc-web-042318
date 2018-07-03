import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="ui menu">
    <Link to="/" className="item">
      <h2 className="ui header">
        <i className={`pencil icon`} />
        <div className="content">Navbar</div>
      </h2>
    </Link>
    <Link className="item" to="/about">
      About
    </Link>
    <Link className="item" to="/login">
      Login
    </Link>
    <Link className="item" to="/tasks">
      Tasks
    </Link>
  </div>
);

export default Navbar;
