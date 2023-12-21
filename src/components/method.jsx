import { useContext, useEffect, useState } from "react";
import { FaTrash } from "../../node_modules/react-icons/fa";
import { darkMode } from "../App";

function Method({ m, setMethods, handleCheck, handleRemove }) {
  const [methClasses, setMethClasses] = useState("bg-misque");
  const theme = useContext(darkMode);
  useEffect(() => {
    if (theme) {
      setMethClasses("bg-[#a77f4f]");
    } else {
      setMethClasses("bg-misque");
    }
  }, [theme]);
  return (
    <li className={`method ${methClasses}`} key={m.id}>
      <input
        id={m.id}
        type="checkbox"
        checked={m.checked}
        onChange={() => handleCheck(m.id)}></input>
      {m.checked === true ? (
        <label htmlFor={m.id} style={{ textDecoration: "line-through" }}>
          {m.name}
        </label>
      ) : (
        <label htmlFor={m.id} style={{ textDecoration: "none" }}>
          {m.name}
        </label>
      )}
      <FaTrash
        className="trash"
        role="button"
        onClick={() => handleRemove(m.id)}
      />
    </li>
  );
}
export default Method;
