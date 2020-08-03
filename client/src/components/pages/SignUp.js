import React from "react";
import "./SignUp.css";
// import { MDBRow, MDBCol, MDBInput, MDBContainer } from 'mdbreact';

function SignUp() {
    return (
        <>
         
        <div className="col-sm-2"></div>
        <div classname="wrap-up">
          <div className="row" id="signupform">
            <h4 className="loginPage">Create an Account</h4>
            <br></br>
            <br></br>
            <div className="col-sm-12 py">
              <div classname="form-group">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Email"
                ></input>
              </div>
              <br></br>

              <div classname="form-group">
                <label htmlFor="username">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                ></input>
              </div>

              <button type="submit" class="btn btn-outline-primary">
                Sign up 
              </button>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
   


            
        </>
    )
}

export default SignUp;