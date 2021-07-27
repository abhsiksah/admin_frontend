import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../../../App";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  return (
    <nav>
      <div className=" nav-wrapper blue">
        <Link to={state ? "/" : "/login"} className="brand-logo">
          Badi-dukkan Admin
        </Link>

        <ul id="nav-mobile" className="right">
          {state ? (
            <li>
              <button
                className="btn red"
                onClick={() => {
                  dispatch({ type: "USER", payload: false });
                  history.push("./login");
                  window.M.toast({ html: "Logged out", classes: "red" });
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/otp">Login with OTP</Link>
              </li>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
