import CurrenciesItem from "./CurrenciesItem";
import { TableContainer } from "@mui/material";
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";

import "../../../styles/currenciesStyle/cureenciesList.css";

export default function CurrenciesList({
  arrOfCurrencies,
  hideTicket,
  switchColorsInvert,
  switchColors,
  darkMode,
  setSelectValue,
}) {
  const cells = document.querySelectorAll(`.cell`);
  cells.forEach((item, index, arr) => {
    item.style.backgroundColor = switchColorsInvert();
    item.style.backgroundColor = switchColorsInvert();
    item.style.color = switchColors();
    item.style.borderColor = switchColors();
    item.style.fontSize = "18px";
  });

  return (
    <TableContainer
      className="currenciesTableContainer"
      sx={{
        backgroundColor: switchColors(),
        borderColor: switchColorsInvert(),
      }}
    >
      <Table>
        <TableHead className="tableHead">
          <TableRow sx={{ display: "block" }}>
            <TableCell className="cell" align="center">
              Logo
            </TableCell>
            <TableCell className="cell">Ticker</TableCell>
            <TableCell className="cell" align="center">
              Exchange
            </TableCell>
            <TableCell className="cell">Price</TableCell>
            <TableCell className="cell" align="center">
              Change
            </TableCell>
            <TableCell className="cell" align="center">
              Change <br />
              percent
            </TableCell>

            <TableCell className="cell" align="center">
              Dividend
            </TableCell>
            <TableCell className="cell" align="center">
              Yield
            </TableCell>
            <TableCell className="cell" align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody
          className="currenciesListTableBody"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {arrOfCurrencies.map((item, index) => (
            <CurrenciesItem
              setSelectValue={setSelectValue}
              switchColorsInvert={switchColorsInvert}
              hideTicket={hideTicket}
              key={index}
              id={index}
              item={item}
              darkMode={darkMode}
              switchColors={switchColors}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
