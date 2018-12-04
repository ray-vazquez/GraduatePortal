import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import Login from './AdminLogin/AdminLogin'
import Search from './Search/Search'
import ViewProfile from './ViewProfile/ViewProfile'
import EditProfile from './EditProfile/EditProfile'

function App () {
  return (
    <div>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/search' component={Search} />
          <Route path='/profile/:gradId' component={ViewProfile} />
          <Route path='/profile/:gradId/edit' component={EditProfile} />
          <Route path='/profile/:gradId/add' component={EditProfile} />
        </Switch>
      </main>
    </div>
  )
}

export default App
