import React, { useState } from "react";
import "./login.scss";
import Signupscreen from "./signscreen";

export const Login = () => {
  const [signin, setsignin] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginback">
        <img
          className="loginlogo"
          src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"
          alt="kuchh to dikha de"
        />
          <button className="login-button" onClick={() => setsignin(true)}>
            Sign in
          </button>
        <div className="login-gradient" />
      </div>
      <div className="login-body">
        {signin ? (
          <Signupscreen />
        ) : (
          <>
            <h1>unlimited files, tv programms and more</h1>
            <h2> watch anywhere. cancel at any time</h2>
            <h3>
              ready to watch enter your email to creae or restart your
              membership
            </h3>
            <div className="login-input">
              <form>
                <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  className="getstarted"
                  onClick={() => {
                    setsignin(true);
                  }}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
