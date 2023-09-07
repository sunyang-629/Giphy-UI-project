import { IconButton } from "@mui/joy";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const HomeButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("");
  };
  return (
    <IconButton onClick={handleClick}>
      <HomeIcon />
    </IconButton>
  );
};

export default HomeButton;
