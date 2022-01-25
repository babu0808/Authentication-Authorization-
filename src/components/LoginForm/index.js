import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onLoginSuccess = () => {
    const {history} = this.props // histroy object is a route paramater
    // history.push('/') // go back possible
    history.replace('/products') // go back not possible
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state // accessing from state
    const userDetails = {username, password} // creating userdetails to send into body

    const url = 'https://apis.ccbp.in/login' // fetch method (url)
    const options = {
      // sending options)
      method: 'POST',
      body: JSON.stringify(userDetails), // sending userdatails in the body by stringifying
    }
    const response = await fetch(url, options) // fetching url and options ; it sends a promise object
    const data = await response.json()
    console.log(data) // we get data and we are displaying the data

    console.log(response)
    if (response.ok === true) {
      this.onLoginSuccess() // if the response is "OK" after the user clicks login the tab is made to navigate to the next tab for that we are calling loginSUccess function
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
