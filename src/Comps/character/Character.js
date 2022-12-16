import React, { useState, useEffect } from "react";

export function Character() {
  const [data, setPers] = useState([]);

  const GetApi = () => {
    try {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPers(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <>
      {data.length !== 0 && (
        <ul className="mx-auto w-100 gap-2  d-flex justify-content-center flex-wrap">
          {data.results.map((item) => (
            <li className="list-unstyled p-2 bg-primary" key={item.id}>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
