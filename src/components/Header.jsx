import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 "
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvJVY9J0u5f4eKb1CpggtpThzlSHCvLZ62w&usqp=CAU"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://ongpng.com/wp-content/uploads/2023/04/3-13.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full transition duration-300 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-3 py-2 rounded-r-full bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
