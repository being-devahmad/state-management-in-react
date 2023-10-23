const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        myData: action.payload,
      };
  }
};
export default reducer;
