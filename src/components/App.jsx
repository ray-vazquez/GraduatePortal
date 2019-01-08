import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
import SearchContainer from "./Search/SearchContainer";
// import ViewProfileContainer from './ViewProfile/ViewProfileContainer';
import EditProfileContainer from "./EditProfile/EditProfileContainer";

function App() {
  return (
    <div>
      <Route path="/" component={NavBarContainer} />
      <main className="container">
        <Switch>
          <Route exact path="/" component={SearchContainer} />
          <Route path="/login" component={LoginContainer} />
          {/* <Route path='/profile/:gradId' component={ViewProfileContainer} /> */}
          {/* <Route path='/profile/:gradId/edit' component={EditProfileContainer} /> */}
          <Route path="/profile/add" component={EditProfileContainer} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
