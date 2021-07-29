import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";
import "./login.css";

const Login = () => {
  const [mobileno, setmobileno] = useState("");

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          console.log("Captcha Resolved");
          onSignInSubmit();
        },
        "expired-callback": () => {
          console.log("captha not solved");
        },
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    const phoneNumber = mobileno;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        var code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then((result) => {
            const user = result.user;
            console.log("User is signed in", user);
          })
          .catch((error) => {
            console.log("incorrect code");
          });

        console.log("OTP is sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const loginclick = () => {};
  return (
    <div className="mycard">
      <div className="card auth-card">
        <div className="top">
          <div className="heading">
            <h4>Sign in using Otp</h4>
            <h5>only for Internal Admins</h5>
          </div>
        </div>
        <form onSubmit={(e) => onSignInSubmit(e)}>
          <div className="bottom">
            <input
              type="text"
              placeholder="Mobile-no without country code"
              onChange={(e) => setmobileno((m) => "+91" + e.target.value)}
            ></input>
            <label></label>
            <div id="recaptcha-container"></div>
            <button type="submit" className="btn waves-effect waves-light">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// console.log(mobileno);
// let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
// firebase
//   .auth()
//   .signInWithPhoneNumber(mobileno, recaptcha)
//   .then((e) => {
//     let code = prompt("enter otp", "");

//     e.confirm(code)
//       .then((result) => {
//         console.log(result.user, "user");
//         document.querySelector("label").textContent =
//           result.user.phoneNumber + "Number Verified";
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
