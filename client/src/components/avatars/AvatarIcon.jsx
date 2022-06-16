import React, { useEffect, useRef } from "react";
import { Avatar, ListItemAvatar } from "@mui/material";
import GOOGL from "../../images/GOOGL.jpg";
import TSLA from "../../images/TSLA.jpg";
import MSFT from "../../images/MSFT.png";
import AMZN from "../../images/AMZN.jpg";
import FB from "../../images/FB.jpg";
import AAPL from "../../images/AAPL.jpg";

const iconArray = [GOOGL, TSLA, MSFT, AMZN, FB, AAPL];

function AvatarIcon({ item, switchColorsInvert, switchColors, id }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.style.height = "70px";
    avatarRef.current.style.width = "70px";
    avatarRef.current.style.border = "2px solid";
    avatarRef.current.style.borderColor = switchColors;
    avatarRef.current.style.display = "flex";
    avatarRef.current.style.justifyContent = "center";
    avatarRef.current.style.alignItems = "center";
    avatarRef.current.style.borderRadius = "7px";
    avatarRef.current.style.backgroundColor = switchColorsInvert;
  }, [switchColors, switchColorsInvert]);

  return (
    <ListItemAvatar ref={avatarRef} className="avatar">
      <Avatar
        className="avatarImage"
        alt={item.ticker}
        src={iconArray.find((icon, index) => index === id)}
      />
    </ListItemAvatar>
  );
}

export default React.memo(AvatarIcon);
