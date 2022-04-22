import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogIn from "./LoginUser";
import SignUp from "./SignUp";
import UserToDO from "./UserToDo";
import Home from "./Home";
import Profile from "./Profile";
import { FaUserCircle } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const user_id = localStorage.getItem("id");
  useEffect(() => {
    const token = localStorage.getItem("Token");
    setToken(token);
  }, [token]);

  return (
    <div className="container-fluid main ">
      <Router>
        <nav
          className="p-1 Nav Nav-pills bg-light  navbar "
          style={{ border: "1px solid black" }}
        >
          <ul style={{ listStyleType: "none", display: "inline-flex" }}>
            {token ? (
              <>
                <li style={{ padding: "5px" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </Link>{" "}
                </li>
                <li style={{ padding: "5px" }}>
                  <Link
                    to="/login/todo"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Todos
                  </Link>{" "}
                </li>
                <li >
                  <NavDropdown
                    id="basic-nav-dropdown"
                    title={<FaUserCircle />}
                    className="dropdown"
                    style={{ textDecoration: "none", marginTop: "-8px" }}
                  >
                    <NavDropdown.Item as={Link} to={`/profile/${user_id}`}>
                      {" "}
                      {/* <FaUserAlt size={20} /> */}
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => {
                        localStorage.clear();
                        window.location = "/";
                      }}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                
              </>
            ) : (
              <>
                <li style={{ padding: "5px" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
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
              </>
            )}
          </ul>
        </nav>

        <Routes>
          {token ? (
            <>
              <Route path="/login/todo" element={<UserToDO />} />
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile/:id" element={<Profile />}></Route>
            </>
          ) : (
            <>
              <Route path="/login" element={<LogIn />} />
              <Route path="/" element={<Home />}></Route>
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}
export default Navbar;
