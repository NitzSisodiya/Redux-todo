import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/operations";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });

  useEffect(() => {
    setValues({
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    });
  }, []);

  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const validation = (values) => {
    const { email, password } = values;
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    if (!emailCheck) {
      setError({ emailErr: " Email is Required / Enter a valid Email" });
    } else if (password === "" || password.length <= 7) {
      setError({
        passwordErr: "Invalid password ",
      });
    } else {
      dispatch(userLogin(values));
      setError({ passwordErr: "" });
    }
  };
  const remember = (values) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
  };

  return (
    <div className="container-fluid  background row p-2 mx-0">
      <div className=" container col-8 content text-center ">
        <h1 className="m-2"> Login </h1>
        <hr></hr>
        <div className="mb-3 mx-2">
          <label style={{ marginRight: "5px" }}>Email :</label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleInput}
            placeholder="enter your email"
          />{" "}
          <p style={{ color: "black", fontSize: "16px" }}>{error.emailErr}</p>
        </div>
        <div className="mb-3 mx-2">
          <label style={{ marginRight: "5px" }}>Password :</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInput}
            placeholder="password"
          />{" "}
          <p style={{ color: "black", fontSize: "16px" }}>
            {error.passwordErr}
          </p>
        </div>
        <div className="mb-3 mx-2">
          <input
            style={{ marginRight: "5px" }}
            type="checkbox"
            name="remember me"
            onClick={() => {
              remember(values);
            }}
          />
          <label>
            <b>Remember me</b>
          </label>
        </div>
        <div className="mb-3 mx-2">
          <button
            className="bttn"
            type="button"
            onClick={() => validation(values)}
          >
            log in
          </button>
        </div>
        <div className="mb-3 mx-2">
          <b>Create an Account --</b>
          <button
            className="bttn"
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
