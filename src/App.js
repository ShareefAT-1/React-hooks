import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Users from "./components/Users";
import Footer from "./Page/Footer";
import Post from "./components/Post";
import Expencecalc from "./components/Expencecalc";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Details from "./components/Details";

function App() {
  const [num, setNum] = useState(0);
  const [otherstate, setOtherstate] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* <nav>
      <h3 onClick={()=>navigate('/login')}>Login</h3>
      <h3><Link to={'/register'}>Register</Link></h3>
      <button onClick={()=>navigate('/footer')}>Click me to see the footer</button>

      </nav> */}

      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/footer" element={<Footer />} />
          <Route path="/dashboard/login" element={<Login />} />
          <Route path="/dashboard/register" element={<Register />} />

          <Route path="/dashboard/user/:id" element={<Details/>}/>
        </Route>
      </Routes>

      {/* <Register/> */}
      {/* <Login /> */}
      {/* <Users/> */}
      {/* <Footer /> */}
      {/* <Post/> */}
      <Dashboard />
      {/* <Expencecalc num={num} others={otherstate}/> */}

      {/* <input
        type="num"
        values={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button onClick={() => setOtherstate(!otherstate)}>Click Me </button> */}
    </div>
  );
}

export default App;
