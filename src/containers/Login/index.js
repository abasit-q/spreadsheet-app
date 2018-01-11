import React, {Component} from 'react';
import Login from '../../components/Login';
import { connect } from 'react-redux';
import { login } from '../../actions';

class LoginContainer extends Component{
    componentWillMount(){
        if (this.props.loggedIn){
            this.props.history.push('/spreadsheet');
        }
    }
    componentWillReceiveProps(nextProps){
        if (this.props.loggingIn && nextProps.loggedIn){
            this.props.history.push('/spreadsheet');
        }
    }
    signup(e) {
        e.preventDefault();
        this.props.history.push('/signup');
    }
    onSubmit(e){
        e.preventDefault();
        let formData = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        this.props.login(formData);
    }
    render() {
        return (
            <Login signup={this.signup.bind(this)} onSubmit={this.onSubmit.bind(this)}
                   loggingIn={this.props.loggingIn} loginError={this.props.loginError} />
        )
    }
}

function mapStateToProps(state){
    return ({
        loggingIn: state.User.loggingIn,
        loggedIn: state.User.loggedIn,
        loginError: state.User.loginError
    });
}

export default connect(mapStateToProps, {login}) (LoginContainer);