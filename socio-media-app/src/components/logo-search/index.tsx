import React from "react";
import Logo from "../../assets/img/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import './logoSearch.css';

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="logo" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <BiSearchAlt size={25} />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
