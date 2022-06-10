import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { showTicket } from "../../../actions/functionsActions";
import React from "react";

export default function currenciesSelectValue({
  setSelectValue,
  selectValue,
  arrOfCurrencies,
}) {
  return (
    <Box className="selectCurrenciesWrapper">
      <FormControl className="formControl" fullWidth>
        <InputLabel
          className="inputLabel"
          sx={{ color: "rgba(25, 71, 112, 0.9)", paddingTop: "9px" }}
        >
          Show currencie
        </InputLabel>
        <Select
          sx={{ color: "#197791" }}
          className="selects"
          value={selectValue}
          label="Show currencie"
          id="selectCurrencie"
          onChange={(e) => showTicket(e.target.value, setSelectValue)}
          name="currencies"
        >
          <MenuItem disabled value="none">
            <em>None</em>
          </MenuItem>
          {arrOfCurrencies.map((item, index) => (
            <MenuItem key={index} value={item.ticker}>
              {item.ticker}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
