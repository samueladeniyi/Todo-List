import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={hStyle}>
      <h1>ToDoList</h1>
      <Link style={hlStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={hlStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const hStyle = {
  background: "gray",
  textAlign: "center",
};

const hlStyle = {
  fontSize: "1.5rem",
  textDecoration: "none",
  marginBottom: "50px",
};
export default Header;
