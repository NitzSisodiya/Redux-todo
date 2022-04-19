import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

import LogIn from "./LoginUser";
import SignUp from "./SignUp";
import UserToDO from "./UserToDo";
import Home from "./Home";

function Navbar() {
  return (
    <div className="container-fluid   main ">
      <Router>
        <nav
          className="p-1 Nav Nav-pills bg-light "
          style={{ border: "1px solid black" }}
        >
          <ul style={{ listStyleType: "none", display: "inline-flex" }}>
            <li style={{ padding: "5px" }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>{" "}
            </li>
            <li style={{ padding: "5px" }}>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                Sign Up
              </Link>{" "}
            </li>
            <li style={{ float: "right", padding: "5px" }}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login
              </Link>{" "}
            </li>
            {/* <li className="nav-item dropdown">
              <FaRegUserCircle />
              <ul className="dropdown-menu">
                <li className="dropdown-item">Setting</li>
                <li className="dropdown-item">Log in</li>
              </ul>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login/todo" element={<UserToDO />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
