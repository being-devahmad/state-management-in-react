import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import reducer from "./reducer";

const initialState = {
  myData: [],
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getApiData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=15"
      );
      const data = response.data;
      dispatch({
        type: "GET_DATA",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider, useGlobalContext };
