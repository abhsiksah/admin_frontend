import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
const LoginwithPassword = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [mobno, setmobno] = useState("");
  const [password, setpassword] = useState("");

  const loginclick = () => {
    console.log(mobno);
    console.log(password);

    dispatch({ type: "USER", payload: true });
    window.M.toast({ html: "welcome", classes: "green" });
    history.push("./");

    // fetch("/login", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     password: password,
    //     mobno: mobno,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     localStorage.setItem("jwt", data.token);
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //     dispatch({ type: "USER", payload: data.user });
    //     if (data.msg) {
    //       M.toast({ html: data.msg });
    //     } else {
    //       M.toast({ html: "Welcome" });
    //       history.push("./");
    //     }
    //   })
    //   .catch((er) => {
    //     console.log(er);
    //   });
  };
  return (
    <div className="mycard">
      <div className="card auth-card">
        <div className="top">
          <div className="heading">
            <h4>Sign in with Password</h4>
            <h5>only for Internal Admins</h5>
          </div>
        </div>
        <div className="bottom">
          <input
            type="text"
            placeholder="Mobile-no without country code"
            onChange={(e) => setmobno((m) => "+91" + e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="enter-password"
            onChange={(e) => setpassword(() => e.target.value)}
          ></input>
          <button
            className="btn waves-effect waves-light"
            onClick={() => {
              loginclick();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginwithPassword;
