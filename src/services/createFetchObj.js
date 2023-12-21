const CreateFetchObj = (method, item) => {
  return {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };
};

export default CreateFetchObj;
