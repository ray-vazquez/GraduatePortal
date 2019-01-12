import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import "./Login.css";
import ErrorMessage from "../Widgets/ErrorMessage";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <div className="login container text-center">
        <form className="panel login" onSubmit={this.handleSubmit}>
          <header className="panel-body">
            <h2>
              Graduate Portal
              <br />
              Admin Login
            </h2>
          </header>
          <main className="panel-body">
            {this.props.isLoginInvalid && (
              <p className="login-error">
                Your username or password does not match what we have in our
                records.
              </p>
            )}
            <FormGroup validationState={this.props.validationState}>
              <FormControl
                type="text"
                className="login-input"
                placeholder="Username"
                aria-label="Username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </FormGroup>
            <FormGroup validationState={this.props.validationState}>
              <FormControl
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </FormGroup>
            <Button
              type="submit"
              className="btn acc-btn acc-btn-primary login-btn"
              disabled={this.props.isLoading === true}
            >
              {this.props.isLoading ? "LOADING ..." : "LOGIN"}
            </Button>
            {this.props.hasError && (
              <ErrorMessage>
                Sorry! The Graduate Portal is temporarily down. Our engineers
                are aware of the problem and are hard at work trying to fix it.
                Please come back later.
              </ErrorMessage>
            )}
          </main>
        </form>
      </div>
    );
  }
}

export default Login;
