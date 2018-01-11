import React, {Component} from 'react';
import '../../assets/css/login.css';

class Signup extends Component {
    render() {
        const { login, onSubmit, loggingIn, signupError } = this.props;
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form-title">
					<span className="login100-form-title-1">
						Sign Up
					</span>
                        </div>

                        <form className="login100-form validate-form" onSubmit={onSubmit.bind(this)}>
                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Username</span>
                                <input className="input100" type="text" name="username" placeholder="Enter username" />
                                    <span className="focus-input100" />
                            </div>

                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="email" name="email" placeholder="Enter email" />
                                <span className="focus-input100" />
                            </div>

                            <div className="wrap-input100 validate-input m-b-18">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="password" name="password" placeholder="Enter password" />
                                    <span className="focus-input100" />
                            </div>

                            <div className="flex-sb-m w-full p-b-30 pull-right">
                                <div>
                                    <a href="/signin" className="txt1" onClick={login.bind(this)}>
                                        Sign In?
                                    </a>
                                </div>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Sign Up
                                </button>
                            </div>

                            {
                                signupError && !loggingIn &&
                                <div className="login-error">
                                    User already exists.
                                </div>
                            }

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;