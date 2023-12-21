import { useContext } from "react";
import { darkMode } from "../App";
import light from "../assets/brightness.png";
import dark from "../assets/night-mode.png";

function ThemeButton({ handleTheme }) {
  const theme = useContext(darkMode);
  return (
    <div className="themeBtn">
      <button onClick={handleTheme}>
        {theme ? <img src={light} /> : <img src={dark} />}
      </button>
    </div>
  );
}

export default ThemeButton;
