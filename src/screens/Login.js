import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { const_data } from '../data';
export default function Login() {

    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [error, setError] =  useState();
    const history = useHistory();
    const { signIn, checkVerification, signOut, verifyAccount, currentUser } = useAuth();
    if(const_data.hospitalData.currentUserId != null){
        history.push('/homepage');
    }
    
    const SignIn =()=>{
        if(email != '' && password != ''){
            try{
                signIn(email, password).then((req)=>{
                    const_data.hospitalData.currentUserId = req.user.uid;
                    checkVerification(const_data.hospitalData.currentUserId).then((result)=>{
                        if(result.exists){
                            const data = result.data();
                            if(data.verification){  
                                delete data.verification;
                                verifyAccount(data,const_data.hospitalData.currentUserId);
                                history.push('/homepage');
                            }else{
                                history.push('/done');
                                signOut()
                            }
                        }else{
                            history.push('/homepage');
                        }
                    });
                }).catch((error)=>{
                    setError(error)
                })
            }catch{

            }
        }
        if(email == '' && password == '')
            setError('Empty Email and Password')
        if(email == '')
            setError('Empty Email')
        if(password == '')
            setError('Empty Password')
    }
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
                    
                    {error == '' ? null : <p className="True" style={{color:'red', fontWeight: '600', fontSize: 15}}>{error}</p>}
                    <form class="FirstForm">
                        <div class="form-group row ">
                            <div class="col-sm-12 ">
                              <input 
                                type="email" 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                class="form-control FirstInput" 
                                id="EmailForm"
                                placeholder="Username or Email"/>
                            </div>
                          </div>
                          <div class="form-group row ">
                            <div class="col-sm-12 ">
                              <input 
                                type="password" 
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                class="form-control FirstInput" 
                                id="PasswordForm" 
                                placeholder="Password"/>
                            </div>
                          </div>
                             <a class="btn btn-primary btn-lg Loginbtn"
                                onClick={SignIn}
                             >Login</a>
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

