import "./App.css";

import { Provider } from "react-redux";
import store from "./store/store";
import Currencies from "./components/currencies/currenciesMainComponents/Currencies";
import { ThemeSwitcher } from "../src/context/ThemeContext";

function App() {
  return (
    <ThemeSwitcher>
      <Provider store={store}>
        <Currencies />
      </Provider>
    </ThemeSwitcher>
  );
}
export default App;
