import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import CurrenciesList from "./CurrenciesList";
import { Box, Card } from "@mui/material";
import { get_cur_thunk } from "../../../store/actions/actions";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import CustomizedSwitches from "../../themSwitcher/Switcher";
import "../../../styles/currenciesStyle/currencies.css";
import { hideTicket } from "../../../actions/functionsActions";
import CurrenciesSelectInterval from "../currenciesSecondaryComponents/CurrenciesSelectInterval";
import CurrenciesSelectValue from "../currenciesSecondaryComponents/CurrenciesSelectValue";
import ModalPage from "../../modalPage/modalPage";

const URL = "http://localhost:4000";

const socket = io(URL);

export default function Currencies() {
  const [selectValue, setSelectValue] = useState("none");

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  let seconds;

  const handleClick = useCallback(() => {
    toggleDarkMode();
  }, [toggleDarkMode]);

  useEffect(() => {
    socket.emit("start");
  }, []);

  const switchColors = useMemo(() => {
    return darkMode ? "#197791" : "white";
  }, [darkMode]);

  const switchColorsInvert = useMemo(() => {
    return darkMode ? "white" : "#197791";
  }, [darkMode]);

  const dispatch = useDispatch();
  const arrOfCurrencies = useSelector((state) => state.currencies);

  socket.on("ticker", (resp) => {
    dispatch(get_cur_thunk(resp));
  });

  const setTimer = useCallback(
    (e) => {
      seconds = parseInt(e) * 1000;
      socket.emit("setTimer", seconds);
    },
    [seconds]
  );

  return (
    <Box className="wrapperBox" sx={{ color: switchColorsInvert }}>
      <Box
        className="contentBox"
        sx={{
          backgroundColor: switchColors,
        }}
      >
        <Box sx={{ alignSelf: "flex-start" }}>
          <ModalPage switchColorsInvert={switchColorsInvert} />
        </Box>
        <Card
          className="contentBoxCard"
          sx={{
            backgroundColor: switchColorsInvert,
            color: switchColors,
          }}
        >
          <CustomizedSwitches handleClick={handleClick} darkMode={darkMode} />
        </Card>

        <Box className="selectsWrapper">
          <CurrenciesSelectInterval setTimer={setTimer} />
          <CurrenciesSelectValue
            selectValue={selectValue}
            arrOfCurrencies={arrOfCurrencies}
            setSelectValue={setSelectValue}
          />
        </Box>
        <Box className="currennciesListBox">
          <CurrenciesList
            switchColorsInvert={switchColorsInvert}
            switchColors={switchColors}
            arrOfCurrencies={arrOfCurrencies}
            hideTicket={hideTicket}
            setSelectValue={setSelectValue}
            darkMode={darkMode}
          />
        </Box>
      </Box>
    </Box>
  );
}
