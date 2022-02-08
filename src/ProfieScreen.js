import React from "react";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
import Navbar from "./Navbar";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const user = useSelector((state) => state.user);
  //console.log(user.user.email);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileScreen;
