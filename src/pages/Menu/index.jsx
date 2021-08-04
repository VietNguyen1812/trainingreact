import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <p>Menu</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/listuser" style={{ marginBottom: "4px" }}>
          <span>to ListUser</span>
        </Link>
        <Link to="/listcategory">
          <span>to ListCategory</span>
        </Link>
        <Link to="/createcategory">
          <span>to CreateCategory</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
