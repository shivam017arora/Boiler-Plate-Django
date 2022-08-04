import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../context";

const HomePage = () => {
  const state = useContext(context);
  const navigate = useNavigate();

  console.log(state);

  useEffect(() => {
    localStorage.getItem("access_token") ? <> </> : navigate("/login");
  }, []);

  return (
    <div className="container">
      <Link to="/login">Login</Link>
      <br />
      <Link
        to="/login"
        onClick={() => {
          state.logout();
        }}
      >
        Logout
      </Link>
      <br />
      <p>Hello, {state.user ? state.user.email : ""}!</p>
    </div>
  );
};

export default HomePage;
