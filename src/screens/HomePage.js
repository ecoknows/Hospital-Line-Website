import React, { useState } from 'react'
import { Image, Navbar, Accordion, useAccordionToggle } from 'react-bootstrap'
import { Link, Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import AngleArrow from '../components/AngleArrow'
import '../css/homepage.css'
import {Account, Appointment, Dashboard} from './sub_screens';
import {DoctorList, ContactList} from './sub_screens/appointments';
import { Emergency, Patients } from './sub_screens/capacity';
import { Doctors, Nurses } from './sub_screens/team';
import { Hospitals, Clinics } from './sub_screens/available';

export default function HomePage() {
    let { path } = useRouteMatch();
    return (
        <div>
            <Nav/>
            <div className='d-flex'>
                <Side path={path}/> 
                <Main path={path}/>
            </div>
        </div>
    )
}
function Nav(){
    return(
        <Navbar className='justify-content-between' fixed="top" bg="white">
            <Navbar.Brand className='d-flex align-items-center'>
                <Image src='/Images/Logo.png'/>
                <span className='hospital_text'>HOSPITAL </span>
                <span className='line_text'>LINE</span>
            </Navbar.Brand>
            <Navbar.Brand style={{color:'blue'}}>
                 <input type="checkbox"     
                  data-toggle="switchbutton"
                  data-onstyle="success"
                  data-offstyle="danger"
                  checked data-size="lg"
                  checked data-onlabel="Perpetual Help Hospital is Available" 
                  data-offlabel="Perpetual Help Hospital is Unavailable"
                  />
            </Navbar.Brand>
        </Navbar>
    )
}

function Side({path}){
    const [active, setActive] = useState('Dashboard');
    const history = useHistory();
    return(
        <div className='side_bar'>
            <Link to={path} 
            onClick={()=>setActive('Dashboard')}
            className='d-flex align-items-center sidebar_button' 
            style={{backgroundColor: active === 'Dashboard' ? '#1E78B1': 'transparent',
                    textDecoration: 'none' }}>
                <img src="/Images/DashIcon.png" alt="Dashboard Icon"/>
                <span className="sidebar_txt">Dashboard</span>
            </Link>
            
            <Accordion>
                    <SideToggle eventKey="0" img="/Images/CapacityIcon.png"
                    color={ active === 'Patients' || active === 'Emergency'   ? '#1E78B1': 'transparent'}
                    >
                        Capacity    
                    </SideToggle>
                    
                    <Accordion.Collapse eventKey="0">
                            <div>
                                <p className="sidebar_subcollapse"
                                    style={{backgroundColor:active === 'Patients'   ? '#1a508b': 'transparent'}}
                                    onClick={()=> {
                                        setActive('Patients');
                                        history.push(`${path}/patients`);
                                    }}
                                    
                                    >Patients</p>
                                <p className="sidebar_subcollapse"
                                    style={{backgroundColor:active === 'Emergency'   ? '#1a508b': 'transparent'}}
                                    onClick={()=> {
                                        setActive('Emergency');
                                        history.push(`${path}/emergency`);
                                    }}>Emergency Beds</p>
                            </div>
                    </Accordion.Collapse>
            </Accordion>

            <Link to={`${path}/appointment`}
            onClick={()=>setActive('Appointment')}
            className='d-flex align-items-center sidebar_button' style={{ textDecoration: 'none',
                backgroundColor: active === 'Appointment' ? '#1E78B1': 'transparent'
            }}>
                <img src="/Images/AppointmentIcon.png" alt="Dashboard Icon"/>
                <span className="sidebar_txt">Appointment</span>
            </Link>

            <Accordion>
                    <SideToggle eventKey="0" img="/Images/teamIcon.png"
                    color={ active === 'Doctor' || active === 'Nurse' ? '#1E78B1': 'transparent'}
                    >
                        Team    
                    </SideToggle>
                    
                    <Accordion.Collapse eventKey="0">
                            <div>
                                <p className="sidebar_subcollapse"
                                    style={{backgroundColor:active === 'Doctor'   ? '#1a508b': 'transparent'}}
                                    onClick={()=> {
                                        setActive('Doctor');
                                        history.push(`${path}/doctors`);
                                    }}
                                >Doctor</p>
                                <p className="sidebar_subcollapse"
                                    style={{backgroundColor:active === 'Nurse'   ? '#1a508b': 'transparent'}}
                                    onClick={()=> {
                                        setActive('Nurse')
                                        history.push(`${path}/nurses`);
                                    }}
                                >Nurse</p>
                            </div>
                    </Accordion.Collapse>
            </Accordion>

            <Accordion>
                    <SideToggle eventKey="0" img="/Images/availabilityIcon.png"
                        color={ active === 'Hospital' || active === 'Clinic'  ? '#1E78B1': 'transparent'}
                        
                    >
                        Available    
                    </SideToggle>
                    
                    <Accordion.Collapse eventKey="0">
                            <div>
                                <p className="sidebar_subcollapse"
                                    style={{backgroundColor:active === 'Hospital'   ? '#1a508b': 'transparent'}}
                                    onClick={()=> {
                                        setActive('Hospital');
                                        history.push(`${path}/hospitals`);
                                    }}>Hospital</p>
                                <p className="sidebar_subcollapse"
                                    style={{backgroundColor:active === 'Clinic'   ? '#1a508b': 'transparent'}}
                                    onClick={()=> {
                                        setActive('Clinic');
                                        history.push(`${path}/clinics`);
                                        }}>Clinic</p>
                            </div>
                    </Accordion.Collapse>
            </Accordion>

            
            <Link to={`${path}/account`} 
            onClick={()=>setActive('Account')}
            className='d-flex align-items-center sidebar_button' style={{ textDecoration: 'none' 
            ,backgroundColor: active === 'Account' ? '#1E78B1': 'transparent'
            }}>
                <img src="/Images/AccountIcon.png" alt="Dashboard Icon"/>
                <span className="sidebar_txt">Account</span>
            </Link>

        </div>
    )
}

function Main({path}){
    return(
        <div className='main'>
            <Switch>
                <Route path={path} component={Dashboard} exact/>
                <Route path={`${path}/appointment`}component={Appointment} exact/>
                <Route path={`${path}/appointment/doctorlist`}component={DoctorList} exact/>
                <Route path={`${path}/appointment/doctorlist/persons`}component={ContactList} exact/>
                <Route path={`${path}/emergency`}component={Emergency} exact/>
                <Route path={`${path}/patients`}component={Patients} exact/>
                <Route path={`${path}/doctors`}component={Doctors} exact/>
                <Route path={`${path}/nurses`}component={Nurses} exact/>
                <Route path={`${path}/hospitals`}component={Hospitals} exact/>
                <Route path={`${path}/clinics`}component={Clinics} exact/>
                <Route path={`${path}/account`}component={Account} exact/>
            </Switch>
        </div>
    )
}


function SideToggle({ children, eventKey, img, color }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return <AngleArrow color={color} img={img} click={decoratedOnClick}>
                 {children}
            </AngleArrow>
  }