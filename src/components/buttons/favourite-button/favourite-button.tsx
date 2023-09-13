import { IconButton } from "@mui/joy";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const HomeButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/favourites");
  };
  return (
    <IconButton onClick={handleClick}>
      <FavoriteIcon />
    </IconButton>
  );
};

export default HomeButton;
