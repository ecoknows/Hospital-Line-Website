import React, { useState } from 'react'
import { Container, Row, Col, Image, Navbar, Accordion, useAccordionToggle } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import AngleArrow from '../components/AngleArrow'
import '../css/homepage.css'
import {Appointment, Dashboard} from './sub_screens'

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
            <Navbar.Brand>
                <img src='/Images/profile.jpg' className='profile_img'/>
            </Navbar.Brand>
        </Navbar>
    )
}

function Side({path}){
    const [active, setActive] = useState('Dashboard');
    return(
        <div className='side_bar'>
            <Link to={path} 
            onClick={()=>setActive('Dashboard')}
            className='d-flex align-items-center sidebar_button' 
            style={{backgroundColor: active == 'Dashboard' ? '#1E78B1': 'transparent',
                    textDecoration: 'none' }}>
                <img src="/Images/DashIcon.png" alt="Dashboard Icon"/>
                <span className="sidebar_txt">Dashboard</span>
            </Link>
            
            <Accordion>
                    <SideToggle eventKey="0" img="/Images/CapacityIcon.png">
                        Capacity    
                    </SideToggle>
                    
                    <Accordion.Collapse eventKey="0">
                            <div>
                                <p className="sidebar_subcollapse">Patients</p>
                                <p className="sidebar_subcollapse">Emergency Beds</p>
                            </div>
                    </Accordion.Collapse>
            </Accordion>

            <Link to={`${path}/appointment`}
            onClick={()=>setActive('Appointment')}
            className='d-flex align-items-center sidebar_button' style={{ textDecoration: 'none',
                backgroundColor: active == 'Appointment' ? '#1E78B1': 'transparent'
            }}>
                <img src="/Images/AppointmentIcon.png" alt="Dashboard Icon"/>
                <span className="sidebar_txt">Appointment</span>
            </Link>

            <Accordion>
                    <SideToggle eventKey="0" img="/Images/teamIcon.png">
                        Team    
                    </SideToggle>
                    
                    <Accordion.Collapse eventKey="0">
                            <div>
                                <p className="sidebar_subcollapse">Doctor</p>
                                <p className="sidebar_subcollapse">Nurse</p>
                            </div>
                    </Accordion.Collapse>
            </Accordion>

            <Accordion>
                    <SideToggle eventKey="0" img="/Images/availabilityIcon.png">
                        Available    
                    </SideToggle>
                    
                    <Accordion.Collapse eventKey="0">
                            <div>
                                <p className="sidebar_subcollapse">Hospital</p>
                                <p className="sidebar_subcollapse">Clinic</p>
                            </div>
                    </Accordion.Collapse>
            </Accordion>

            
            <Link to={`${path}/account`} 
            onClick={()=>setActive('Account')}
            className='d-flex align-items-center sidebar_button' style={{ textDecoration: 'none' 
            ,backgroundColor: active == 'Account' ? '#1E78B1': 'transparent'
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
                <Route path={`${path}/appointment`}component={Appointment}/>
            </Switch>
        </div>
    )
}


function SideToggle({ children, eventKey, img }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return <AngleArrow img={img} click={decoratedOnClick}>
                 {children}
            </AngleArrow>
  }