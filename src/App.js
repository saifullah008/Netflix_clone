import React, { useEffect } from "react";
import HomeScreen from "./Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import "./App.css";
import ProfileScreen from "./ProfieScreen";
import LoginScreen from "./Login";

function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const disptach = useDispatch();
  const { Login, Logout } = bindActionCreators(actionCreators, disptach);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        // console.log(userAuth);
        Login({
          uid: userAuth.uid,
          email: userAuth.email,
        });
      } else {
        //logged out
        Logout();
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
