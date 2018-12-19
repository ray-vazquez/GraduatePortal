import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { Media } from "react-bootstrap";
import "./Login.css";
import ErrorMessage from "../Widgets/ErrorMessage";

class Login extends Component {
  state = {
    username: "",
    password: "",
    searchInput: "",
    profiles: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  filterProfiles = () => {
    let searchInput = this.state.searchInput.split(" ");
    const profiles = Object.values(this.props.profiles).filter(profile => {
      for (let searchTerm of searchInput) {
        let regexSearchTerm = new RegExp(searchTerm);
        if (regexSearchTerm.test(profile.firstName)) return true;
        if (regexSearchTerm.test(profile.lastName)) return true;
        for (let skill of profile.skills) {
          if (regexSearchTerm.test(skill)) return true;
        };
      };
      return false;
    });
    return this.setState({
      profiles
    })
  }

  componentDidMount = () => {
    this.setState({
      profiles: this.props.profiles
    })
  }

  render() {
    return (
      <div className="login container text-center">
        <form 
          className="panel login" 
          onSubmit={this.handleSubmit}>
          <header className="panel-body">
            <h2>Graduate Portal<br/>Admin Login</h2>
          </header>
          <main className="panel-body">
            {this.props.isLoginInvalid && (
              <p className="login-error">Your username or password does not match what we have in our records.</p>
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
              className="btn btn-primary login-btn"
              disabled={this.props.isLoading === true} >
              {this.props.isLoading ? "LOADING ..." : "LOGIN"}
            </Button>
            {this.props.hasError && (
              <ErrorMessage>
                Sorry! The Graduate Portal is temporarily down. Our engineers are aware of the problem
                and are hard at work trying to fix it. Please come back later.
              </ErrorMessage>
            )}
          </main>
        </form>
        <div>
          <FormGroup>
            <FormControl
              type="text"
              className="login-input"
              placeholder="Enter name or skills"
              aria-label="Search Input"
              value={this.state.searchInput}
              onChange={e => {
                this.setState({
                  searchInput: e.target.value
                })
                this.filterProfiles();
              }}
            />
          </FormGroup>
          {Object.values(this.state.profiles).map(profile => {
            return (
              <Media
                key={profile.id}
                profile={profile} >
                <Media.Left>
                  <img width={64} height={64} src={profile.image} alt={profile.firstName + " " + profile.lastName} />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>{profile.firstName + " " + profile.lastName}</Media.Heading>
                  <p>{profile.story}</p>
                </Media.Body>
              </Media>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Login;