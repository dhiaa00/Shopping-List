import MethList from "./methList";

function Methods({ methods, setMethods, handleCheck, handleRemove }) {
  return (
    <div className="methods">
      <MethList
        methods={methods}
        setMethods={setMethods}
        handleCheck={handleCheck}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default Methods;
