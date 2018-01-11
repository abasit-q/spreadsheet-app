import React, {Component} from 'react';
import Signup from '../../components/Signup';
import { connect } from 'react-redux';
import { signup } from '../../actions';

class SignupContainer extends Component{
    componentWillMount(){
        if (this.props.loggedIn){
            this.props.history.push('/spreadsheet');
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.loggedIn){
            this.props.history.push('/spreadsheet');
        }
    }
    login(e) {
        e.preventDefault();
        this.props.history.push('/signin');
    }
    onSubmit(e){
        e.preventDefault();
        let formData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        this.props.signup(formData);
    }
    render() {
        return (
            <Signup login={this.login.bind(this)} onSubmit={this.onSubmit.bind(this)}
                    loggingIn={this.props.loggingIn} signupError={this.props.signupError} />
        )
    }
}

function mapStateToProps(state){
    return ({
        loggingIn: state.User.loggingIn,
        loggedIn: state.User.loggedIn,
        signupError: state.User.signupError
    });
}

export default connect(mapStateToProps, {signup}) (SignupContainer);