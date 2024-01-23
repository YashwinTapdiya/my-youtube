import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillVideo } from "../utils/videoSlice";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  //console.log(videoList);
  //const [videoList, setVideoList] = useState(null);
  const getYoutubedata = async () => {
    const data = await fetch(
      ""
    );
    const json = await data.json();
    //setVideoList(json.items);
    // console.log(json.items);F
    dispatch(fillVideo(json.items));
  };
  useEffect(() => {
    getYoutubedata();
  }, []);
  if (videoList == null) return;
  return (
    <div className="p-2 m-2 -mt-5 -ml-5 flex flex-wrap">
      {videoList.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
