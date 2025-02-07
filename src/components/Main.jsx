import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <header className="bg-black text-white" style={{ height: "100px" }}>
        {" "}
        Dashboard
      </header>

      <div className="d-flex" style={{ height: "100vh" }}>
        <div
          className="text-white"
          style={{ backgroundColor: "#23395d", flex: "1" }}
        >
          <div style={{}}>
            <p>
              <Link to={"/main/profile"} style={{ textDecoration: "none" }}>
                Profile
              </Link>
            </p>
            <p>
              <Link to={"/main/messeges"}  style={{ textDecoration: "none" }}>Messeges</Link>
            </p>
            <p>Settings</p>
            <p>
            <Link to={"/main/blog"}  style={{ textDecoration: "none" }}>Blog</Link>
            </p>
          </div>
        </div>

        <div
          className="p-5"
          style={{ backgroundColor: "rgba(221, 221, 238, 0.98)", flex: "3" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
