// HeartButton.js

import React, { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartButton = ({ onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    onClick();
  };

  return (
    <IconButton
      position="absolute"
      top="0"
      right="0"
      aria-label="Add to favorites"
      icon={isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
      onClick={handleToggleFavorite}
      bg={isFavorite ? "green.400" : "transparent"}
    />
  );
};

export default HeartButton;
