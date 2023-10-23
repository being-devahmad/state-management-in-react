import axios from "axios";
import React, { useEffect, useState } from "react";


const ShowData = () => {
  const [card, setCard] = useState([]);
  const getApiData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=15"
      );
      const data = response.data;
      console.log(data);

      setCard(data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">State management with useState</h1>
          {card.map((val) => {
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

export default ShowData;
