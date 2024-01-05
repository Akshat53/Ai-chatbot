import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img
          src="openai.png"
          alt="openai"
          width={"30px"}
          height={"30px"}
          className="logo-img"
        />
     
      </Link>
      <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            marginRight: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
          }}
        >
          <span className="logo-text">AI</span>-CHATBOT
        </Typography>
    </div>
  );
};

export default Logo;
