import React, { Component } from 'react';
import {
  TextField,
  Button,
  Container
} from '@material-ui/core';


class Login extends Component {
  state = {
    username: '',
    password: ''
  }


  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=380*1000";
    window.location.replace("/listings")
    this.props.newUser( this.state.username )
  //  this.props.history.push("/listings")
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              id="standard-basic"
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              id="standard-basic"
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;