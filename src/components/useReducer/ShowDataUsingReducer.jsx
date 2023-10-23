import axios from "axios";
import React, { useEffect, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  myData: [],
};

const ShowDataUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getApiData = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=12"
    );
    const data = res.data;
    console.log(data);

    dispatch({
      type: "GET_DATA",
      payload: data,
    });

  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">State management with useReducer</h1>
          {state.myData.map((val) => {
            const { id, title, body } = val;
            return (
              <>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={id}>
                  <div class="card mb-3">
                    <div class="card-body">
                      <h5 class="card-title">Title : {title.slice(0, 15)}</h5>
                      <p>UserId : {id}</p>
                      <p class="card-text">Body : {body.slice(0, 70)}</p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowDataUsingReducer;
