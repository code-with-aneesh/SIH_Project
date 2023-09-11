import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., send a request to your server
  };

  render() {
    return (
        <div className="form-box">
        <div className="form-value">
            <form action="">
                <h2>Login Account</h2>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required />
                    <label for="">Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="passowrd" required />
                    <label for="">Password</label>
                </div>
                <div className="forget">
                    <label for=""><input type="checkbox" checked />Save Password <a href="#">Forget
                            Password?</a></label>
                </div>
                <button>Login Account</button>
                <div className="register">
                    <p>Dont Have a Account?<a href="#">Sign Up</a></p>
                </div>
            </form>
        </div>
    </div>

    );
  }
}

export default Login;
