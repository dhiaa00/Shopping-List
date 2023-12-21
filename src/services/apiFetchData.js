const fetchData = async (url = "", fetchObject = null, errMsg = null) => {
  try {
    const result = await fetch(url, fetchObject);
    if (!result.ok) throw Error("Please reload the application");
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;
  }
};

export default fetchData;
