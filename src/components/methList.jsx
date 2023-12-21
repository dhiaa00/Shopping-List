import Method from "./method";

function MethList({ methods, setMethods, handleCheck, handleRemove }) {
  return methods.length !== 0 ? (
    <ul>
      {methods.map((m) => {
        console.log(m);
        return (
          <Method
            m={m}
            setMethods={setMethods}
            handleCheck={handleCheck}
            handleRemove={handleRemove}
          />
        );
      })}
    </ul>
  ) : (
    <p>No Items</p>
  );
}

export default MethList;
