import Method from "./method";

function MethList({ methods, setMethods, handleCheck, handleRemove }) {
  return (
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
  );
}

export default MethList;
