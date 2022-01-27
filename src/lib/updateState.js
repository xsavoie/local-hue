const updateState = (request, state, id) => {
  const param = Object.keys(request)[0];
  let stateCopy = [...state];
  const dataToUpdate = stateCopy.find((data) => data.id === id);
  dataToUpdate.state = { ...dataToUpdate.state, [param]: request[param] };
  
  const updatedState = state.map((data) =>
    data.id === id ? dataToUpdate : data
  );

  return updatedState;
};

export { updateState };