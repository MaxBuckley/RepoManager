import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { List } from "semantic-ui-react";
import "./css/App.css";
import ManagerPage from "./components/pages/ManagerPage";
import SearchPage from "./components/pages/SearchPage";
import AddPage from "./components/pages/AddPage";

const App = () => (
  <HashRouter>
    <div className="appContainer">
      <div className="header">
        <List className="headerList" horizontal>
          <List.Item>
            <NavLink to="/" className="headerLink">
              Manager
            </NavLink>
          </List.Item>
          <List.Item className="headerLink">
            <NavLink to="/search" className="headerLink">
              Search
            </NavLink>
          </List.Item>
          <List.Item className="headerLink">
            <NavLink to="/add" className="headerLink">
              Add Repo
            </NavLink>
          </List.Item>
        </List>
      </div>
      <div className="ui container pageContainer">
        <Route exact path="/" component={ManagerPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/add" component={AddPage} />
      </div>
    </div>
  </HashRouter>
);

export default App;
