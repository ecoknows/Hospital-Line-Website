import React from 'react'
import { Container, Row, Col, Image, Navbar, Accordion, useAccordionToggle } from 'react-bootstrap'
import '../css/dashboard.css'

export default function Dashboard() {
    return (
        <div>
            <Nav/>
            <Side/>
        </div>
    )
}
function Nav(){
    return(
        <Navbar className='justify-content-between' fixed="top" bg="white">
            <Navbar.Brand className='d-flex align-items-center'>
                <Image src='Images/Logo.png'/>
                <span className='hospital_text'>HOSPITAL </span>
                <span className='line_text'>LINE</span>
            </Navbar.Brand>
            <Navbar.Brand>
                <img src='Images/profile.jpg' className='profile_img'/>
            </Navbar.Brand>
        </Navbar>
    )
}

function Side(){
    return(
        <div className='side_bar'>
            <div className='d-flex align-items-center sidebar_button' style={{backgroundColor:'#1E78B1'}}>
                <img src="Images/DashIcon.png" alt="Dashboard Icon"/>
                <span className="sidebar_txt">Dashboard</span>
            </div>
            
            <Accordion>
                    <SideToggle eventKey="0" img="Images/CapacityIcon.png">
                        Capacity    
                    </SideToggle>
                    
                    <Accordion.Collapse eventKey="0">
                            <div>
                                <p className="sidebar_subcollapse">Patients</p>
                                <p className="sidebar_subcollapse">Emergency Beds</p>
                            </div>
                    </Accordion.Collapse>
            </Accordion>

            <div className='d-flex align-items-center sidebar_button'>
                <img src="Images/AppointmentIcon.png" alt="Dashboard Icon"/>
                <span className="sidebar_txt">Appointment</span>
            </div>

            <Accordion>
                    <SideToggle eventKey="0" img="Images/teamIcon.png">
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
                    <SideToggle eventKey="0" img="Images/availabilityIcon.png">
                        Available    
                    </SideToggle>
                    
                    <Accordion.Collapse eventKey="0">
                            <div>
                                <p className="sidebar_subcollapse">Hospital</p>
                                <p className="sidebar_subcollapse">Clinic</p>
                            </div>
                    </Accordion.Collapse>
            </Accordion>

            
            <div className='d-flex align-items-center sidebar_button'>
                <img src="Images/AccountIcon.png" alt="Dashboard Icon"/>
                <span className="sidebar_txt">Account</span>
            </div>

        </div>
    )
}

function Main(){
    return(
        <Col className='main'>
            eco
        </Col>
    )
}


function SideToggle({ children, eventKey, img }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
        <div className='d-flex align-items-center sidebar_button list-group-item' 
            onClick={decoratedOnClick}
        >
            <img src={img} alt="Dashboard Icon"/>
            <span className="sidebar_txt">{children}</span>
            <span className="fa fa-angle-right" style={{fontSize:25, color: 'white'}}></span>
        </div>
    );
  }