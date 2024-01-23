import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Shorts",
    "Unwatched",
    "Watched",
    "Live",
    "Playlist",
    "Subscriptions",
  ];
  return (
    <div className="flex ml-4 mt-2">
      {buttonList.map((n) => (
        <Button key={n} name={n} />
      ))}
    </div>
  );
};

export default ButtonList;
