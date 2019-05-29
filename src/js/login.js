import React, { Component } from "react";
import { History } from 'react-router';

class login extends Component {
  mixins: [ History ];
  logIn = (e) => {
    console.log(e);
  }
  render = () => {
    return (
      <form className="login-form" onSubmit={this.logIn}>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="userName" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-success">This username is available</p>
      </div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="passWord" />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Log In</button>
        </div>
        <div className="control">
          <button className="button is-text">Cancel</button>
        </div>
      </div>
</form>
    );
  };
}

export default login;
