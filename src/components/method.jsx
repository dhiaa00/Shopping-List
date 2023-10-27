import { FaTrash } from "../../node_modules/react-icons/fa";

function Method({ m, setMethods, handleCheck, handleRemove }) {
  return (
    <li className="method" key={m.id}>
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
