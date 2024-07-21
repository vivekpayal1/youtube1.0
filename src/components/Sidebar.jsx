import MusicIcon from "../assets/images/music.png";
import TrendingIcon from "../assets/images/trending.png";
import MovieIcon from "../assets/images/movieicon.png";
import ShoppingIcon from "../assets/images/shoppingicon.png";
import HomeIcon from "../assets/images/home.png";
import ShotsIcon from "../assets/images/shots.png";
import Subscription from "../assets/images/subscription.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="px-4 py-3">
      <div className="border-b border-solid border-[rgba(0,0,0,0.05)]">
        <ul>
          <li>
            {/* <Link
              to="/"
              className="flex items-center gap-5 rounded-xl bg-[rgba(0,0,0,0.05)] px-3 py-3 font-medium"
            >
              <img src={HomeIcon} alt="music-icons" />
              Home
            </Link> */}
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-5 rounded-xl px-3 py-3 font-medium hover:bg-[rgba(0,0,0,0.05)]"
            >
              <img src={ShotsIcon} alt="music-icons" />
              Shots
            </a>
          </li>{" "}
          <li>
            <a
              href="#"
              className="flex items-center gap-5 rounded-xl px-3 py-3 font-medium hover:bg-[rgba(0,0,0,0.05)]"
            >
              <img src={Subscription} alt="music-icons" />
              Subscription
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="my-2 px-3 font-bold">Explore</h3>
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center gap-5 rounded-xl px-3 py-3 font-medium hover:bg-[rgba(0,0,0,0.05)]"
            >
              <img src={MusicIcon} alt="music-icons" />
              Music
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-5 rounded-xl px-3 py-3 font-medium hover:bg-[rgba(0,0,0,0.05)]"
            >
              <img src={TrendingIcon} alt="music-icons" />
              Trending
            </a>
          </li>{" "}
          <li>
            <a
              href="#"
              className="flex items-center gap-5 rounded-xl px-3 py-3 font-medium hover:bg-[rgba(0,0,0,0.05)]"
            >
              <img src={ShoppingIcon} alt="music-icons" />
              Shoping
            </a>
          </li>{" "}
          <li>
            <Link
              to="watch"
              className="flex items-center gap-5 rounded-xl px-3 py-3 font-medium hover:bg-[rgba(0,0,0,0.05)]"
            >
              <img src={MovieIcon} alt="music-icons" />
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
