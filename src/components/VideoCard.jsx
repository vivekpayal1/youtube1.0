const VideoCard = ({ info }) => {
  console.log(info?.statistics?.viewCount);
  return (
    <div className="overflow-hidden mt-2">
      <a href="#">
        <img
          className="w-full rounded-xl"
          src={info?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </a>
      <div className=" flex gap-2 mt-3">
        <div>
          <a href="#" className="w-10 h-10 flex">
            <img
              src={info?.snippet?.thumbnails?.default?.url}
              alt=""
              className="w-full h-full rounded-full"
            />
          </a>
        </div>
        <div className="">
          <h3 className="font-bold text-[16px]">
            <a
              href="#"
              className="line-clamp-2 overflow-hidden"
            >
              {info?.snippet?.title}
            </a>
          </h3>
          <div>
            <a href="#" id="channel-name" className="text-[#606060] font-semibold">
              {info?.snippet?.channelTitle}
            </a>
          </div>
          <div>
            <a href="#" className="flex text-[#606060]">
              <span>{info?.statistics?.viewCount}views</span>
              <span className="mx-3">
                12 days ago
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
