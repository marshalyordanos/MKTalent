import "./settings.css";
import Sidebar from "../../sidebar/Sidebar";
import { useContext, useState } from "react";


export default function Settings() {


  const handleSubmit = async (e) => {
 
    };
   
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {/* <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            /> */}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            {/* <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            /> */}
          </div>
          <label>Username</label>
          {/* <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          /> */}
          <label>Email</label>
          {/* <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <label>Password</label>
          {/* <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {/* {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )} */}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
