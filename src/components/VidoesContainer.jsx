import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VidoesContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  console.log(error);
  useEffect(() => {
    getVideos();
  }, []);
  async function getVideos() {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const json = await response.json();
      setVideos(json.items);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
  return (
    <div className="mt-3 grid gap-3 lg:grid-cols-4 xl:grid-cols-5">
      {videos?.map((video) => {
        return <VideoCard info={video} key={video.id} />;
      })}
    </div>
  );
};

export default VidoesContainer;
