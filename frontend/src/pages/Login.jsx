import React, { useEffect } from "react";
import { constants } from "../utils/Constants";
import { LoginButton } from "../components/LoginButton/LoginButton";
import stickyIcon from "../assets/images/stickyIcon.svg";

export const Login = () => {
  return (
    <div className="login">
      <div className="login-main">
        <div className="login-wrap">
          <img src={stickyIcon} alt={constants.title} width="60" />
          <h1 className="login-title">{constants.title}</h1>
          <h3 className="login-subtitle">{constants.subtitle}</h3>

          <LoginButton socialNetwork={constants.google} />
        </div>
      </div>
    </div>
  );
};
