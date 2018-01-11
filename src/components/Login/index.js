import React, {Component} from 'react';
import '../../assets/css/login.css';

class Login extends Component {
    render() {
        const { signup, onSubmit, loggingIn, loginError } = this.props;
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form-title">
					<span className="login100-form-title-1">
						Sign In
					</span>
                        </div>

                        <form className="login100-form validate-form" onSubmit={onSubmit.bind(this)}>
                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Username</span>
                                <input className="input100" type="text" name="username" placeholder="Enter username" required/>
                            </div>

                            <div className="wrap-input100 validate-input m-b-18">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="password" name="password" placeholder="Enter password" required/>
                            </div>

                            <div className="flex-sb-m w-full p-b-30 pull-right">
                                <div>
                                    <a href="/signup" className="txt1" onClick={signup.bind(this)}>
                                        Sign Up?
                                    </a>
                                </div>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Sign In
                                </button>
                            </div>

                            {
                                loginError && !loggingIn &&
                                <div className="login-error">
                                    Incorrect Username or password.
                                </div>
                            }

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;