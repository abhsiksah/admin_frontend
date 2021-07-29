import React from "react";
import "./user.css";
import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h3 className="userTitle">Approve or reject User</h3>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Jon-Snow</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">"jon@gmail.com",</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">active</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <Link to="/">
                <button className="userAddButton">Approve</button>
              </Link>
              <Link to="/">
                <button
                  style={{ background: "red", marginLeft: "5px" }}
                  className="userAddButton"
                >
                  Decline
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">
            <h1>We can add something here</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
