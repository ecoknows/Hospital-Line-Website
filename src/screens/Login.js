import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <section id="FirstPart">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 LogoPart">
                    <img src="Images/HospitalLine 1.png" class="img-fluid center" alt="Hospital Line Logo"/>
                    <img src="Images/Group 2.png" class="img-fluid design" alt="Design"/>
                </div>
                <div class="col-md-4 text-center RightSide1">
                    <h1 class="h2-responsive">HOSPITAL <span class="Line">LINE</span></h1>
                    <h2 class="SubText">Login to your Account</h2>
                    <form class="FirstForm">
                        <div class="form-group row ">
                            <div class="col-sm-12 ">
                              <input type="email" class="form-control FirstInput" id="EmailForm" placeholder="Username or Email"/>
                            </div>
                          </div>
                          <div class="form-group row ">
                            <div class="col-sm-12 ">
                              <input type="password" class="form-control FirstInput" id="PasswordForm" placeholder="Password"/>
                            </div>
                          </div>
                          <Link to="/homepage">
                             <a class="btn btn-primary btn-lg Loginbtn">Login</a>
                          </Link>
                    </form>
                    <a href="ForgotPassword.html" id="LoginBlock">Forgot Password?</a>
                    <h2 class="OR">
                        <span class="secondSpan">OR</span>
                    </h2>
                    
                    <Link to='/signup'>
                        <a class="btn btn-outline-primary btn-lg SignupButton">Create an Account</a>
                    </Link>
                </div>

            </div>
        </div>
    </section>
    
    )
}

