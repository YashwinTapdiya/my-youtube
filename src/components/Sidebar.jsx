import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuStatus = useSelector((store) => store.app.isMenuOpen);
  //early return
  if (!menuStatus) return null;
  return (
    <div className="w-48 p-5 shadow-lg">
      <ul>
        <Link to="/">
          <li> Home </li>
        </Link>
        <li> Shorts </li>
        <li> Videos </li>
        <li> Live </li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li> Your Channel </li>
        <li> History </li>
        <li> Your videos </li>
        <li> Watch Later </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Gaming </li>
        <li> Movies </li>
      </ul>
    </div>
  );
};

export default Sidebar;
