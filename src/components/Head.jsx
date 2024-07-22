import MenuBtn from "../assets/images/menu.png";
import Logo from "../assets/images/logo.png";
import UserIcon from "../assets/images/usericon.png";
import SearchIcon from "../assets/images/search.png";
import CreateVideo from "../assets/images/createvideo.png";
import Notificaton from "../assets/images/notificaton.png";
import HistorySvg from "../assets/images/history.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../services/slices/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../services/slices/searchSlice";

const Head = () => {
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  function handleKeyUp() {
    setInputFocus(true);
  }
  function handleBlur() {
    setInputFocus(false);
  }

  async function getSearchSuggestions() {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResult({
          [searchQuery]: json[1],
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  const dispatch = useDispatch();
  function toggleMenuHandler() {
    return () => {
      dispatch(toggleMenu());
    };
  }
  return (
    <div className="grid grid-flow-col px-4 py-4 shadow-sm">
      <div className="col-span-1 flex items-center gap-3">
        <img
          src={MenuBtn}
          alt="menu-btn"
          className="h-6 cursor-pointer"
          onClick={toggleMenuHandler()}
        />
        <Link>
          <img
            src={Logo}
            alt="logo"
            className="h-6 cursor-pointer object-contain"
          />
        </Link>
      </div>
      <div className="col-span-10">
        <div className="flex justify-center">
          <div className="relative flex w-1/3 justify-center">
            <input
              type="search"
              placeholder="Search"
              className="h-9 w-full rounded-l-full border border-gray-400 pl-4 focus-visible:outline-none"
              value={searchQuery}
              onChange={handleSearch}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
            />
            <button className="h-100 rounded-r-full border border-l-0 border-gray-400 bg-[#f8f8f8] px-3">
              <img src={SearchIcon} alt="search-icon" />
            </button>
            <div
              className={`absolute left-0 top-[40px] z-10 ${inputFocus ? "block" : "hidden"} w-full rounded-md bg-white px-3 py-3 shadow-md`}
            >
              <ul className="flex flex-col gap-2">
                {suggestions.map((suggestion) => {
                  return (
                    <li key={suggestion}>
                      <a href="#" className="text-1xl font-semibold">
                        <div className="flex items-center gap-3">
                          <img
                            src={HistorySvg}
                            alt={HistorySvg}
                            className="h-6 w-5"
                          />
                          {suggestion}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center gap-7">
        <img
          src={CreateVideo}
          alt="user-icon"
          className="h-8 cursor-pointer object-contain"
        />
        <img
          src={Notificaton}
          alt="user-icon"
          className="h-8 cursor-pointer object-contain"
        />
        <img
          src={UserIcon}
          alt="user-icon"
          className="h-8 cursor-pointer object-contain"
        />
      </div>
    </div>
  );
};

export default Head;
