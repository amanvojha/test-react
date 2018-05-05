import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import * as API from '../api/API.js';

class Signup extends Component {
    state = {
        firstname: '',
        lastname:'',
        id:'',
        password:''

    }
    signUp  = () => {
        var data = this.state;
        API.signup(data)
            .then((res) => {
                localStorage.setItem("userId", data.id)
                localStorage.setItem("username",data.firstname)
                console.log(res);
                this.props.history.push("/");
            });
    }


  render() {
    return (  
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 login-block">
            <form novalidate="novalidate">
                <div className="padding-bottom-20">
                <label className="login-heading-style" for="FirstName">First Name</label>
                    <input className="login-textbox-style" id="FirstName" name="FirstName" type="text"
                           value={this.state.firstname}
                           onChange={(event) => {
                               this.setState({
                                   firstname: event.target.value
                               });
                           }}></input>
            </div>
                <div className="padding-bottom-20">
                    <label className="login-heading-style"for="LastName">Last Name</label>
                    <input className="login-textbox-style" id="LastName" name="LastName" type="text"
                           value={this.state.lastname}
                           onChange={(event) => {
                               this.setState({
                                   lastname: event.target.value
                               });
                           }}></input>
                </div>
                <div className="padding-bottom-20">
                    <label className="login-heading-style" for="EmailAddress">Email Address</label>
                    <input className="login-textbox-style" id="EmailAddress" name="EmailAddress" type="text"
                           value={this.state.userid}
                           onChange={(event) => {
                               this.setState({
                                   id: event.target.value
                               });
                           }}></input>
                </div>

                <div className="padding-bottom-20">
                    <label className="login-heading-style" for="Password">Password (min 8 characters)</label>
                    <input className="login-textbox-style" id="Password" name="Password" type="password"  value={this.state.password}
                           onChange={(event) => {
                               this.setState({
                                   password: event.target.value
                               });
                           }}></input>
                </div>
                    <div className="padding-bottom-20">
                        <input id="AcceptedTerms" name="AcceptedTerms" type="checkbox" value="true"></input>
                        <label for="AcceptedTerms">I have read and accepted the
                            <a href="/help/useragreement" id="ViewTerms" target="_blank"> terms and conditions</a>
                        </label>

                </div>
                    <div>
                        <input id="OptIn" name="OptIn" type="checkbox" value="true"></input>
                        <label for="OptIn">Send me emails about future deals and features</label>
                </div>
                    <button onClick={ () =>{this.signUp()}} className="login-button" type="button" id="btnNext">Create Account</button>
                    <p>
                        The Counter may send email communications about your account activity and other updates from time to time. These email communications may be disabled on your My Account page. We will never give your contact information to third parties.
                    </p>
            </form>
        </div>
            <div className="col-md-4"></div>
        </div>
    );
  }
}

export default withRouter(Signup);

