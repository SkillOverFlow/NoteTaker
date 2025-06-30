import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, useMediaQuery } from "@mui/material";
import { Clear, ExitToApp, SearchOutlined } from "@mui/icons-material";
import { SearchBar } from "../SearchBar";
// import { logoutApp } from "../../redux/actions/authActions";
import { constants } from "../../utils/Constants";
import stickyIcon from "../../assets/images/stickyIcon.svg";

export const TopBar = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.name);
  const [showSearch, setShowSearch] = useState(false);
  const mq = useMediaQuery("(min-width:767px)");

  return (
    <header className="header">
      <div className="topbar">
        <div className="topbar-logo">
          <div className="topbar-logo-wrap">
            <img src={stickyIcon} alt={constants.title} width="30" />
            <h1>{constants.title}</h1>
          </div>
          {mq && <SearchBar />}
        </div>

        <div className="topbar-btns">
          {name && (
            <div className="user">
              <span className="square">{name.substr(0, 1)}</span>
              <span className="user-name">{name}</span>
            </div>
          )}
          {!mq && (
            <IconButton
              type="button"
              aria-label="search"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? <Clear /> : <SearchOutlined />}
            </IconButton>
          )}
          <IconButton
            type="button"
            aria-label="exit"
            // onClick={() => dispatch(logoutApp())}
          >
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      {!mq && showSearch && <SearchBar />}
    </header>
  );
};
