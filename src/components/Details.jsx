import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDetails(res.data);
        console.log(res);
      });
  }, [id]);
  return (
    <div>
      <div style={{ backgroundColor: "lightgreen" }}>
        <h1>{details.name}</h1>
        <h4>{details.email}</h4>
      </div>
    </div>
  );
};

export default Details;
