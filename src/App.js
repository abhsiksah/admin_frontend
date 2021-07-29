import "./App.css";
import Login from "./components/screens/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import LoginwithPassword from "./components/screens/Login-password/LoginwithPassword";
import Home from "./components/screens/Home/Home";
import { reducer, initialState } from "./reducers/userReducer";
export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state } = useContext(UserContext);
  useEffect(() => {
    if (state) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/otp">
        <Login />
      </Route>
      <Route path="/login">
        <LoginwithPassword />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
