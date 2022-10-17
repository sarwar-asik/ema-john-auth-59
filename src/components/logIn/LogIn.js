import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="form-container">
      <h1 className="form-tittle">Login</h1>
      <form action="">
        <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email"name="email" required placeholder="Your Email"/>
        </div>
        <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password"name="password" required placeholder="Your password"/>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>New to ema john <Link to={'/signup'}>Create a new Account</Link></p>
    </div>
  );
};

export default LogIn;
