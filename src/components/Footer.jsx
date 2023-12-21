import { useState, useContext, useEffect } from "react";
import { darkMode } from "../App";

function Footer({ foot }) {
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
    <footer className={methClasses}>
      <p>{foot}</p>
    </footer>
  );
}

export default Footer;
