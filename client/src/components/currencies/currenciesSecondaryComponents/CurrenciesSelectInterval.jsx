import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function CurrenciesSelectInterval({ setTimer }) {
  return (
    <Box className="selectIntervalWrapper">
      <FormControl className="selectIntervalWrapper" fullWidth>
        <InputLabel
          className="inputLabel"
          sx={{ color: "rgba(25, 71, 112, 0.9)", paddingTop: "9px" }}
          id="timerId"
        >
          Set update interval
        </InputLabel>
        <Select
          sx={{ color: "#197791", fontSize: "17px" }}
          align="center"
          label="Set update interval"
          labelId="timerId"
          className="selects"
          defaultValue="3"
          id="selectTimer"
          onChange={(e) => setTimer(e.target.value)}
          name="selectTimer"
        >
          <MenuItem value="1">1 sec </MenuItem>
          <MenuItem value="3"> 3 sec</MenuItem>
          <MenuItem value="5">5 sec</MenuItem>
          <MenuItem value="10">10 sec</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
