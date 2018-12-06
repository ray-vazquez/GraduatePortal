import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LoginContainer from './Login/LoginContainer';
import SearchContainer from './Search/SearchContainer';
import ViewProfileContainer from './ViewProfile/ViewProfileContainer';
import EditProfileContainer from './EditProfile/EditProfileContainer';

function App () {
  return (
    <div>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route exact path='/' component={SearchContainer} />
          <Route exact path='/login' component={LoginContainer} />
          <Route exact path='/search' component={SearchContainer} />
          <Route path='/profile/:gradId' component={ViewProfileContainer} />
          <Route path='/profile/:gradId/edit' component={EditProfileContainer} />
          <Route path='/profile/:gradId/add' component={EditProfileContainer} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
