import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'

const SignUp = () => {
    const [error ,setError] = useState(null);

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

        if(password.length<6){
            setError("password should be 6 character")
        }
        if(password !== confirm){
                setError('Your PassWord did not match');
                return
        }
        setError('');
        

    }
  return (
    <div className="form-container">
      <h1 className="form-tittle">Sign Up </h1>
      <form onSubmit={handleSubmit}>
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
          <p className="text-error">{error}</p>
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
