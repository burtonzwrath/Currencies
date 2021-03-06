import { Button, TableCell, TableRow } from "@mui/material";
import "../../../styles/currenciesStyle/currenciesItem.css";
import AvatarIcon from "../../avatars/AvatarIcon";
import { useEffect, useMemo, useRef, useState } from "react";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
export default function CurrenciesItem({
  id,
  item,
  hideTicket,
  switchColorsInvert,
  switchColors,
  setSelectValue,
}) {
  const actualPrice = item.price;
  const [price, setPrice] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (actualPrice > price) {
      setPrice(actualPrice);
      setFlag(true);
    } else {
      setPrice(actualPrice);
      setFlag(false);
    }
  }, [actualPrice]);

  const priceColor = useMemo(() => {
    return flag ? "#2da135" : "#f07d0a";
  }, [flag]);

  const arrow = useMemo(() => {
    if (flag) {
      return <ArrowCircleUpTwoToneIcon fontSize="large" color="success" />;
    } else
      return <ArrowCircleDownTwoToneIcon fontSize="large" color="warning" />;
  }, [flag]);

  const cellsTable = document.querySelectorAll(`.cellTableItem`);
  cellsTable.forEach((item) => {
    item.style.color = switchColorsInvert;
    item.style.borderRightColor = switchColorsInvert;
  });

  const tableRowRef = useRef();

  const mOver = () => {
    tableRowRef.current.classList.add("tableBlue");
  };
  const mOut = () => {
    tableRowRef.current.classList.remove("tableBlue");
  };
  useEffect(() => {
    tableRowRef.current.addEventListener("mouseover", mOver);
    tableRowRef.current.addEventListener("mouseout", mOut);
  });

  return (
    <TableRow
      ref={tableRowRef}
      className="itemTableRow"
      align="center"
      id={item.ticker}
    >
      <TableCell className="cellTableItem" align="center">
        <AvatarIcon
          id={id}
          item={item}
          switchColorsInvert={switchColorsInvert}
          switchColors={switchColors}
        />
      </TableCell>
      <TableCell className="itemTableCellTicker" align="center">
        {arrow} <br />
        {item.ticker}
      </TableCell>
      <TableCell className="cellTableItem" align="center">
        {item.exchange}
      </TableCell>
      <TableCell align="center" sx={{ backgroundColor: priceColor }}>
        {item.price}
      </TableCell>
      <TableCell className="cellTableItem" align="center">
        {item.change}
      </TableCell>
      <TableCell className="cellTableItem" align="center">
        {item.change_percent}
      </TableCell>
      <TableCell className="cellTableItem" align="center">
        {item.dividend}
      </TableCell>
      <TableCell className="cellTableItem" align="center">
        {item.yield}
      </TableCell>
      <TableCell className="cellTableItem" align="center">
        <Button
          className="buttonCurrenciesItem"
          color="info"
          onClick={() => hideTicket(item, setSelectValue)}
          size="small"
          sx={{ backgroundColor: "cadetblue" }}
          variant="contained"
          startIcon={<DeleteIcon />}
        >
          hide
        </Button>
      </TableCell>
    </TableRow>
  );
}
