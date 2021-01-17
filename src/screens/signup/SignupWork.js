import React, {useState} from 'react'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';


let _address = '';
let _work_id = '';
let _telephone = '';
let _error = false;

export default function SignupWork() {
    const history = useHistory()
    const [address, setAddress] = useState(_address);
    const [work_id, setWork_Id] = useState(_work_id);
    const [telephone, setTelephone] = useState(_telephone);
    const {path} = useRouteMatch()
    const [message,setMessage] = useState('Please make sure your ID is valid and not expired');

    const location = useLocation();
   
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
                    <h2 className="SubText4">Work Details</h2>
                    <p className="True">{message}</p>
                    <form className="ThirdForm">
                        <div className="form-group mx-auto">
                            <input  type="text" className="form-control Adjust" id="WorkAddress" placeholder="Work Address"
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                            style={{border:'none',borderBottom:'1.5px solid', borderColor: address!= '' || !_error? '#9F9F9F': 'red'}}
                            />
                        </div>
                        <div className="form-group mx-auto">
                            <input  type="text" className="form-control Adjust" id="Tel" placeholder="Work Telephone Number"
                            value={telephone}
                            onChange={(e)=>setTelephone(e.target.value)}
                            style={{border:'none',borderBottom:'1.5px solid', borderColor: telephone != ''|| !_error? '#9F9F9F': 'red'}}
                            />
                        </div>
                        <div className="form-group mx-auto">
                            <input  type="text" className="form-control Adjust" id="Tel" placeholder="Scan Work ID"
                            value={work_id}
                            onChange={(e)=>setWork_Id(e.target.value)}
                            style={{border:'none',borderBottom:'1.5px solid', borderColor: work_id != ''|| !_error? '#9F9F9F': 'red'}}
                            />
                        </div>
                          <a className="btn btn-primary btn-lg Loginbtn"
                          style={{cursor: 'pointer'}}
                          onClick={()=>{
                              if(address == '' || telephone == '' || work_id == ''){
                                  setMessage('Please check again, you forgot something....')
                              }else{
                                _address = address
                                _work_id = work_id
                                _telephone = telephone
                                  history.push({
                                    pathname:'/signup/security',
                                    data: {  // location state
                                        ...location.data, 
                                        workAddress: address,
                                        telephone: telephone,
                                        workId: work_id,
                                      }
                                    })
                              }
                              
                          }}>Next</a>
                            <p className="Direct">Do you forget something? <a onClick={
                                ()=>history.push('/signup')
                            } className="Direct" style={{cursor: 'pointer'}}>Go Back</a></p>
                    </form>

                </div>

            </div>
        </div>
    </section>
    )
}
