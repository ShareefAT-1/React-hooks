import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate()

  return (
    <div
      className="d-flex p-4 "
      style={{ justifyContent: "", height: "100vh" }}
    >
      {/* <form className='d-flex' action="" style={{height:"500px",width:"400px",backgroundColor:"lightblue"}}>
            <div className='d-flex' style={{flexDirection:"column"}}>
            <input type="text" placeholder='Sample' style={{height:"30px",width:"200px"}} />
            <input type="text" placeholder='Name Sample' style={{height:"30px",width:"200px"}} />
            </div>
            
        </form> */}

      <div
        className="flex-1  bg-danger h-100"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <h3>
          <Link to={"/dashboard/login"}> Login</Link>
        </h3>
        <h3>
          <Link to={"/dashboard/register"}>Register</Link>
        </h3>

        <button onClick={()=>navigate('/dashboard/footer')}>See The Footer</button>
        <button onClick={()=>navigate('/dashboard/user')}>See The User details</button>


      </div>
      <div className="flex-3 bg-info" style={{ flex: 3 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
