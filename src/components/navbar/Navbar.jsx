import "./navbar.scss";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Campus Club Connect</span>
        </Link>
        <HomeRoundedIcon />
        {darkMode ? (
          <ToggleOffIcon onClick={toggle} />
        ) : (
          <ToggleOnIcon onClick={toggle} />
        )}
        <AppsRoundedIcon />
        <div className="search">
          <SearchRoundedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineRoundedIcon />
        <EmailRoundedIcon />
        <NotificationsRoundedIcon />
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
