import MenuBtn from "../assets/images/menu.png";
import Logo from "../assets/images/logo.png";
import UserIcon from "../assets/images/usericon.png";
import SearchIcon from "../assets/images/search.png";
import CreateVideo from "../assets/images/createvideo.png";
import Notificaton from "../assets/images/notificaton.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../services/slices/appSlice";
import { Link } from "react-router-dom";


const Head = () => {
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
        <img
          src={Logo}
          alt="logo"
          className="h-6 cursor-pointer object-contain"
        />
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          type="search"
          placeholder="Search"
          className="h-9 w-1/3 rounded-l-full border border-gray-400 pl-4 focus-visible:outline-none"
        />
        <button className="h-100 rounded-r-full border border-l-0 border-gray-400 bg-[#f8f8f8] px-3">
          <img src={SearchIcon} alt="search-icon" />
        </button>
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
