import React, { useEffect, useState } from "react";
import google from "../images/google.png";
import Footer from "../Page/Footer";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [otherstate, setOtherstate] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="d-flex flex-wrap gap-4 p-5" style={{justifyContent:"center"}}>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div className="card" style={{width:"250px",height:"180px",backgroundColor:"violet"}} >
              <img src={google} className="card-img-top" alt="input an image " style={{height:"20px",width:"50px"}}/>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <a href="https://www.mapsofworld.com/" className="btn btn-primary">
                  {user.address.city}
                </a>
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Users;
