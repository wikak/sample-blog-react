import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from "./js/login";
import PostList from "./js/views/posts/list";
import PostView from "./js/views/posts/view";
import PostEdit from "./js/views/posts/edit";
import UserList from "./js/views/users/list";
import UserView from "./js/views/users/view";
import UserEdit from "./js/views/users/edit";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  render = () => {
    return (
      <Router>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to={"/"} className="navbar-item">
                Home
              </Link>
              <Link to={"posts/:pageNum/?"} className="navbar-item">
                Post List
              </Link>

              <Link to={"/users"} className="navbar-item">
                User List
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <div className="button is-light">
                  <Link to={"/login"} className="navbar-item">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="bd-main">
        <div className="columns container">
        <div className="column is-three-quarters">
        <Switch>
         <Route
           path="posts/:pageNum/?"
           render={props => <PostList {...props} />}
         />
         <Route
           path="/users"
           render={props => <UserList {...props} />}
         />
         <Route
           path="/login"
           render={props => <Login {...props} />} />
        </Switch>
        </div>

        </div>
        </div>
      </Router>
    );
  };
}

export default App;
