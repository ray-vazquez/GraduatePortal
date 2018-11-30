import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import MainPage from './MainPage/MainPage'
import AdminLogin from './AdminLogin/AdminLogin'
import Search from './Search/Search'
import Profile from './Profile/Profile'

function App () {
  return (
    <div>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/admin' component={AdminLogin} />
          <Route exact path='/admin/search' component={Search} />
          <Route exact path='/admin/profile/:gradId' component={Profile} />
          <Route exact path='/search' component={Search} />
          <Route path='/profile/:gradId' component={Profile} />
        </Switch>
      </main>
    </div>
  )
}

export default App
