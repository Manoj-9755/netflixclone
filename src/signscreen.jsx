import React from "react";
import { useRef } from "react";
import "./signupscreen.scss";
import { auth}  from "./firebase.js";


const Signupscreen = () => {
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch((error)=>{
      alert(error.message)
    })
  };
   const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }; 

  return (
    <div className="signupscreen">
      <form className="form">
        <h1 className="signin">Sign In</h1>
        <input
          ref={emailref}
          placeholder="email or PHone number"
          type="email"
        />
        <input ref={passwordref} placeholder="password" type="password" />
        <button className="btn" onClick={signin}>
          Sign In
        </button>
        
        <h4>
          {" "}
          <span className="span-gray">New to Netflix?</span>
          <span className="span-link"  onClick={register}>
            sign up now.
          </span>{" "}
        </h4>
      </form>
    </div>
  );
};

export default Signupscreen;
