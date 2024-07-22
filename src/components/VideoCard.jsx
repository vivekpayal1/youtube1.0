const VideoCard = ({ info }) => {
  return (
    <div className="mt-2 overflow-hidden">
      <a href="#">
        <img
          className="w-full rounded-xl"
          src={info?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </a>
      <div className="mt-3 flex gap-2">
        <div>
          <a href="#" className="flex h-10 w-10">
            <img
              src={info?.snippet?.thumbnails?.default?.url}
              alt=""
              className="h-full w-full rounded-full"
            />
          </a>
        </div>
        <div className="">
          <h3 className="text-[16px] font-bold">
            <a href="#" className="line-clamp-2 overflow-hidden">
              {info?.snippet?.title}
            </a>
          </h3>
          <div>
            <a
              href="#"
              id="channel-name"
              className="font-semibold text-[#606060]"
            >
              {info?.snippet?.channelTitle}
            </a>
          </div>
          <div>
            <a href="#" className="flex text-[#606060]">
              <span>{info?.statistics?.viewCount}views</span>
              <span className="mx-3">12 days ago</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

export function AdVideoCard({ info }) {
  return (
    <div className="border-black-400 overflow-hidden rounded-md border-2">
      <VideoCard info={info} />
    </div>
  );
}
