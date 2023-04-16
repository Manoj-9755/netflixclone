import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { login, logout, selectCount } from "./features/counter/counterSlice";
import { auth } from "./firebase";
import Home from "./home";
import { Login } from "./login";
import Profile from "./Profile";

function App() {
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log(userAuth);
      } else {
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!counter ? (
          <Login/>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
