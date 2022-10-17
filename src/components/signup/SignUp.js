import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <h1 className="form-tittle">Sign Up </h1>
      <form action="">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required placeholder="Your Email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Your password"
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            required
            placeholder="Your password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        Already have an Account <Link to={"/login"}>Log In Your Account</Link>
      </p>
    </div>
  );
};

export default SignUp;
