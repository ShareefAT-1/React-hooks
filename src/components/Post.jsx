import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    console.log("mounded!");
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => {
    //     console.log(res);
    //     setPost(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

   const intervalId = setInterval(() => {
      console.log("timer is running");
    }, 2000);

    return () => {
      console.log("component unmounded");
      clearInterval(intervalId)
    };
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3 p-4" style={{}}>
      {posts.map((Post) => {
        return (
          <div key={Post.id}>
            <div
              className="card"
              style={{
                width: "320px",
                height: "280px",
                backgroundColor: "gray",
              }}
            >
              <div className="card-body " style={{}}>
                <h5 className="card-title">{Post.id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {/* {Post.text} */}
                  Users
                </h6>
                <p className="card-text">{Post.body}</p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
