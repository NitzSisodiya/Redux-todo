import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../redux/operations";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  const users = useSelector(state=>state.TodoReducer.users)
  const [error, setError] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    cpasswordErr: "",
  });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validation = (formValues) => {
    const { name, password, cpassword, email } = formValues;
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    if (name === "") {
      setError({ nameErr: "name is required " });
    } else if (name.length < 3) {
      setError({ nameErr: " name must have three characters " });
    } else if (email === "") {
      setError({ emailErr: " Email is Required " });
    } else if (!emailCheck) {
      setError({ emailErr: " Enter a valid Email" });
    } else if (password === "")
      setError({ passwordErr: "password is required  " });
    else if (password.length < 7)
      setError({
        passwordErr: "password  must contain  eight characters ",
      });
    else if (password !== cpassword)
      setError({
        cpasswordErr: "Please Confirm your password !",
      });
    else {
      setError({ cpasswordErr: "" });
      dispatch(registerUser(formValues));
      setFormValues({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      });
      navigate("/login");
    }
  };

  return (
    <div className=" background container-fluid  row p-2 m-0">
      <div className=" container col-8 content text-center ">
        <h1 className="m-2"> Registration Form </h1>
        <hr></hr>
        <div className="m-2">
          <b> Already have an account? then-</b>{" "}
          <button
            className="bttn"
            type="button"
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </button>
        </div>
        <form>
          <div className="mb-3 mx-2">
            <label style={{ marginRight: "5px" }}>Name :</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInput}
              placeholder="enter your name"
            />
            <p style={{ color: "black", fontSize: "16px" }}>{error.nameErr}</p>
          </div>
          <div className="mb-3 mx-2">
            <label style={{ marginRight: "5px" }}> Email :</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInput}
              placeholder="enter your email id "
            />{" "}
            <p style={{ color: "black", fontSize: "16px" }}>{error.emailErr}</p>
          </div>
          <div className="mb-3 mx-2">
            <label style={{ marginRight: "5px" }}>Password :</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInput}
              placeholder="password"
            />{" "}
            <p style={{ color: "black", fontSize: "16px" }}>
              {error.passwordErr}
            </p>
          </div>
          <div className="mb-3 mx-2">
            <label style={{ marginRight: "5px" }}> Confirm Password :</label>
            <input
              type="password"
              name="cpassword"
              value={formValues.cpassword}
              onChange={handleInput}
              placeholder="confirm-password"
            />{" "}
            <p style={{ color: "black", fontSize: "16px" }}>
              {error.cpasswordErr}
            </p>
          </div>
          <div className="mb-3 mx-2">
            <button
              className="bttn"
              type="button"
              onClick={() => validation(formValues)}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
