import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillVideo } from "../utils/videoSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  //console.log(videoList);
  //const [videoList, setVideoList] = useState(null);
  const getYoutubedata = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
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
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
