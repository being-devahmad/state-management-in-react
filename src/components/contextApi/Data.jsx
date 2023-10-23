import React from "react";
import { useGlobalContext } from "./ContextPart";

const Data = () => {
  const { state } = useGlobalContext();
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">
          State management with Context API using useReducer
        </h1>
        {state.myData.map((val) => {
          const { id, title, body } = val;
          return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={id}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Title : {title.slice(0, 15)}</h5>
                  <p>UserId : {id}</p>
                  <p className="card-text">Body : {body.slice(0, 70)}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
