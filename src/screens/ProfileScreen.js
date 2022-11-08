import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import { auth, signOut } from "../firebase";
import "./ProfileScreen.css";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLoggedIn) {
      console.log("TEST");
      navigate("/");
    }
  }, [user]);

  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://vectorified.com/images/profile-pic-icon-6.png"
            alt="Profile photo"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button onClick={logout} className="profileScreen_signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
