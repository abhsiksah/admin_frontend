import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./home.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Dashboard from "./viewarea/dashboard/Dashboard";
import Filter from "../../Filter/Filter";
import DraftMerchandise from "./viewarea/draft-merchandise/DraftMerchandise";
import User from "./viewarea/DraftMerchant-single_user/User";
import DraftMenu from "./viewarea/draft-menu/DraftMenu";

const Home = () => {
  return (
    <Router>
      <div className="home">
        <Sidebar />

        <Route exact path="/">
          <Dashboard />
        </Route>
        <Switch>
          <Route path="/DMerchandise">
            <DraftMerchandise />
          </Route>
          <Route path="/user/:userid">
            <User />
          </Route>
          <Route path="/Dmenu">
            <DraftMenu />
          </Route>
        </Switch>
        <Filter />
      </div>
    </Router>
  );
};

export default Home;
