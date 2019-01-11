import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
import SearchContainer from "./Search/SearchContainer";
import ViewProfileContainer from "./ViewProfile/ViewProfileContainer";
import NewProfileContainer from "./NewProfile/NewProfileContainer";
import EditProfileContainer from "./EditProfile/EditProfileContainer";

function App() {
  return (
    <div>
      <Route path="/" component={NavBarContainer} />
      <main className="container">
        <Switch>
          <Route exact path="/" component={SearchContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/profile/add" component={NewProfileContainer} />
          <Route exact path="/profile/:graduateId/edit" component={EditProfileContainer} />
          <Route exact path="/profile/:graduateId" component={ViewProfileContainer} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
