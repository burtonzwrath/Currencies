import { Avatar, ListItemAvatar } from "@mui/material";
import google from "../../images/google.jpg";
import tesla from "../../images/tesla.jpg";
import microsoft from "../../images/microsoft.png";
import amazon from "../../images/amazon.jpg";
import facebook from "../../images/facebook.jpg";
import apple from "../../images/apple.jpg";

export default function AvatarIcon({ item, switchColorsInvert, switchColors }) {
  const avatars = document.querySelectorAll(`.avatar`);
  avatars.forEach(
    (item) => {
      item.style.height = "70px";
      item.style.width = "70px";
      item.style.border = "2px solid";
      item.style.borderColor = switchColors();
      item.style.display = "flex";
      item.style.justifyContent = "center";
      item.style.alignItems = "center";
      item.style.borderRadius = "7px";
      item.style.backgroundColor = switchColorsInvert();
      const avatarImage = document.querySelectorAll(`.avatarImage`);
      avatarImage.forEach((item) => {
        item.style.height = "55px";
        item.style.width = "55px";
      });
    },
    [item.ticker, switchColorsInvert]
  );

  switch (item.ticker) {
    case "AAPL":
      return (
        <ListItemAvatar className="avatar">
          <Avatar className="avatarImage" alt={`AAPL`} src={apple} />
        </ListItemAvatar>
      );
    case "GOOGL":
      return (
        <ListItemAvatar className="avatar">
          <Avatar className="avatarImage" alt={`GOOGL`} src={google} />
        </ListItemAvatar>
      );
    case "MSFT":
      return (
        <ListItemAvatar className="avatar">
          <Avatar className="avatarImage" alt={`MSFT`} src={microsoft} />
        </ListItemAvatar>
      );
    case "AMZN":
      return (
        <ListItemAvatar className="avatar">
          <Avatar className="avatarImage" alt={`AMZN`} src={amazon} />
        </ListItemAvatar>
      );
    case "FB":
      return (
        <ListItemAvatar className="avatar">
          <Avatar className="avatarImage" alt={`FB`} src={facebook} />
        </ListItemAvatar>
      );
    case "TSLA":
      return (
        <ListItemAvatar className="avatar">
          <Avatar className="avatarImage" alt={`TSLA`} src={tesla} />
        </ListItemAvatar>
      );

    default:
      return (
        <ListItemAvatar className="avatar">
          <Avatar
            className="avatarImage"
            alt={`true`}
            src={`https://www.freeiconspng.com/thumbs/x-png/red-x-png-4.png`}
          />
        </ListItemAvatar>
      );
  }
}
