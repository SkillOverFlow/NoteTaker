import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
// import { loginSocialNetworks } from "../../redux/actions/authActions";
import { constants } from "../../utils/Constants";
import { GitHub } from "@mui/icons-material";
import googleIcon from "../../assets/images/googleIcon.svg";

export const LoginButton = ({ socialNetwork }) => {
  const dispatch = useDispatch();
  const handleLogin = (socialNetwork) => {};
  // dispatch(loginSocialNetworks(socialNetwork));

  return (
    <Button
      className={`login-btn-social ${socialNetwork}`}
      variant="outlined"
      onClick={() => handleLogin(socialNetwork)}
    >
      {socialNetwork === constants.google && (
        <img src={googleIcon} alt={socialNetwork} className="login-btn-icon" />
      )}
      {socialNetwork === constants.github && (
        <GitHub className="login-btn-icon" />
      )}
      Already Have an account:{" "}
      <span className="login-btn-name">{socialNetwork}</span>
    </Button>
  );
};
