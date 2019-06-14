import React from 'react';
import Login from './pages/Login'
import Register from './pages/Register'
import Users from './pages/Users'
import { NavLink, withRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import users from "./pages/Users"


class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </main>
      </>
    );
  }

logout = () => {
  localStorage.removeItem('jwt');

  this.props.history.push('/login');
};
}

export default withRouter(App);




