import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
import SearchContainer from "./Search/SearchContainer";
import ViewProfileContainer from "./ViewProfile/ViewProfileContainer";
import NewProfileContainer from "./NewProfile/NewProfileContainer";

function App() {
  return (
    <div>
      <NavBarContainer />
      <main className="container">
        <Switch>
          <Route exact path="/" component={SearchContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/search" component={SearchContainer} />
          <Route path="/profile/:graduateId" component={ViewProfileContainer} />
          {/* <Route path='/profile/edit/:graduateId' component={EditProfileContainer} /> */}
          {/* <Route path='/profile/new' component={NewProfileContainer} /> */}
          <Route path="/profile/add" component={NewProfileContainer} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
