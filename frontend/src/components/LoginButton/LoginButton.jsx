import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { loginSocialNetworks } from "../../redux/actions/authActions";
import { constants } from "../../utils/Constants";
import googleIcon from "../../assets/images/googleIcon.svg";

export const LoginButton = ({ socialNetwork }) => {
  const dispatch = useDispatch();
  const handleLogin = (socialNetwork) => dispatch(loginSocialNetworks());

  return (
    <Button
      className={`login-btn-social ${socialNetwork}`}
      variant="outlined"
      onClick={() => handleLogin(socialNetwork)}
    >
      {socialNetwork === constants.google && (
        <img src={googleIcon} alt={socialNetwork} className="login-btn-icon" />
      )}
      Continue with <span className="login-btn-name">{socialNetwork}</span>
    </Button>
  );
};
