import React,{useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

let _password = '';
let _con_password = '';

export default function SignupSecurity() {
    const location = useLocation();
    const history = useHistory();
    const [password, setPassword] = useState(_password);
    const [con_password, setCon_Password] = useState(_con_password);
    const [error, setError] = useState('')
    const {addUser} = useAuth();

    function CreateAccount(){
        console.log(location.data);
        if(location?.data){
            try{
                addUser(location.data).then(()=>{
                    history.push('/signup/done');
                }).catch((e)=>
                    setError(e)
                )
            }catch{
    
            }
        }else{
            setError("Oppsss... please don't skip the process")
        }
        
    }

    return (
        <section id="FirstPart">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 LogoPart">
                    <img src="/Images/HospitalLine 1.png" className="img-fluid center" alt="Hospital Line Logo"/>
                    <img src="/Images/Group 2.png" className="img-fluid design" alt="Design"/>
                </div>
                <div className="col-md-4 text-center RightSide4">
                    <h1 className="SubText3">Signup for Account</h1>
                    <h2 className="SubText5">Security</h2>
                    <p className="True" style={{color:'red', fontWeight: '600', fontSize: 15}}>{error}</p>
                    <form className="FourthForm">
                        <div className="form-group row ">
                            <div className="col-sm-12 ">
                                <label for="SecurityPass" className="FirstLabel">Enter Password</label>
                              <input type="password" className="form-control SecurityInput" id="SecurityPass" placeholder=""
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                              
                              />
                            </div>
                        </div>
                        <div className="form-group row ">
                            <div className="col-sm-12 ">
                                <label for="SecurityReenter" className="FirstLabel">Re-enter Password</label>
                              <input type="password" 
                              value={con_password}
                              onChange={(e)=>setCon_Password(e.target.value)}
                              className="form-control SecurityInput" id="SecurityReenter" placeholder=""/>
                            </div>
                        </div>
                          <a className="btn btn-primary btn-lg Loginbtn" 
                            onClick={()=>{
                                if(password !== con_password ){
                                    setError("Password doesn't match")
                                } else if(password === '' || con_password == ''){
                                    setError("Please input the password")
                                } else {
                                    CreateAccount();
                                }
                            }}
                          >Done</a>
                    </form>

                </div>

            </div>
        </div>
    </section>
    )
}
