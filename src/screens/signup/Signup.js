import React,{useState} from 'react'
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';


let _firstName = '';
let _lastName = '';
let _mobileNumber = '';
let _email = '';
let _error = false;
let _email_error = false;

const checkEmail = ( email ) => {

    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(email) ) {
        return true;
    }
    else {
       return false;
    }

}

export default function Signup() {
    const history = useHistory();
    const [firstName, setFirstName] = useState(_firstName);
    const [lastName, setLastName] = useState(_lastName);
    const [mobileNumber, setMobileNumber] = useState(_mobileNumber);
    const [email, setEmail] = useState(_email);
    const [message, setMessage] = useState('Please make sure all the details is true and correct');
    const {path} = useRouteMatch();
    return (
        <section id="FirstPart">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 LogoPart">
                        <img src="/Images/HospitalLine 1.png" className="img-fluid center" alt="Hospital Line Logo"/>
                        <img src="/Images/Group 2.png" className="img-fluid design" alt="Design"/>
                    </div>
                    <div className="col-md-4 text-center RightSide3">
                        <h1 className="SubText3">Signup for Account</h1>
                        <h2 className="SubText4">Personal Information</h2>
                        <p className="True">{message}</p>
                        <form className="ThirdForm">
                            <div className="form-row mx-auto">
                                <div className="form-group col-md-6">
                                    <input 
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    value={firstName}
                                    type="text" className="form-control ThirdInput" id="Firstname" placeholder="First Name"
                                    style={{border:'none',borderBottom:'1.5px solid', borderColor: (firstName != '' || !_error)? '#9F9F9F': 'red'}}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input 
                                    onChange={(e)=>setLastName(e.target.value)}
                                    value={lastName}
                                    type="text" className="form-control ThirdInput" id="Lastname" placeholder="Last Name"
                                    style={{border:'none',borderBottom:'1.5px solid', borderColor: lastName != '' || !_error? '#9F9F9F': 'red'}}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-auto">
                                <input 
                                 onChange={(e)=>setMobileNumber(e.target.value)}
                                value={mobileNumber}
                                type="text" className="form-control Adjust" id="Mobile" placeholder="Mobile Number"
                                style={{border:'none',borderBottom:'1.5px solid', borderColor: mobileNumber != '' || !_error? '#9F9F9F': 'red'}}
                                />
                            </div>
                            <div className="form-group mx-auto">
                                <input 
                                 onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                                type="email" className="form-control Adjust" id="EmailAdd" placeholder="Company Email Address"
                                style={{border:'none',borderBottom:'1.5px solid', borderColor: (email != '' || !_error ) && !_email_error? '#9F9F9F': 'red'}}
                                />
                            </div>
                            <a className="btn btn-primary btn-lg Loginbtn"
                            style={{cursor: 'pointer'}}
                            onClick={()=>{
                                if(email == '' || mobileNumber == '' || lastName == '' || firstName == ''){
                                    _error = true;  
                                    setMessage('Please check again, you forgot something....')
                                }else{
                                    _firstName = firstName;
                                    _lastName = lastName;
                                    _mobileNumber = mobileNumber;
                                    _email = email;
                                    if(checkEmail(email)){
                                        _email_error = false;
                                        history.push({
                                            pathname:`${path}/work`,
                                            data: {  // location state
                                                firstname: firstName, 
                                                lastName: lastName, 
                                                mobileNumber: mobileNumber, 
                                                email: email, 
                                            }
                                        })
                                    }else{
                                        _email_error = true;
                                        setMessage('Incorrect Email Format')
                                    }

                                    
                                }
                                
                            }}
                            >Next</a>
                            <p className="Direct">Already have an account? <a onClick={
                                ()=>history.push('/')
                            } className="Direct" style={{cursor: 'pointer'}}>Sign In</a></p>
                        </form>

                    </div>

                </div>
            </div>
    </section>
    )
}
