import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="">
      <div>
        <ButtonList />
      </div>
      <div className="flex flex-wrap p-2 m-2">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
