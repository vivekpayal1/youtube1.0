import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VidoesContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);
  async function getVideos() {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const json = await response.json();
      setVideos(json.items);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="mt-3 grid gap-3 lg:grid-cols-4 xl:grid-cols-5">
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos?.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />;
          </Link>
        );
      })}
    </div>
  );
};

export default VidoesContainer;
