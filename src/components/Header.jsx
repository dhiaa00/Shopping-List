import { useState, useContext, useEffect } from "react";
import { darkMode } from "../App";

function Header(props) {
  const [methClasses, setMethClasses] = useState("bg-aquamarine");
  const theme = useContext(darkMode);
  useEffect(() => {
    if (theme) {
      setMethClasses("bg-[#525252]");
    } else {
      setMethClasses("bg-aquamarine");
    }
  }, [theme]);
  return (
    <header className={methClasses}>
      <p>{props.head}</p>
    </header>
  );
}

export default Header;
