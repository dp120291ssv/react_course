import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <div id="navbar_user">
        <Link to="users" className="user_link">
          Users
        </Link>
      </div>
      <div id="navbar_alboms">
        <Link to="albums" className="user_link">
          Albums
        </Link>
      </div>
    </div>
  );
}
