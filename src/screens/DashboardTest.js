import React from 'react'
import '../css/dashboardTest.css'
import {Accordion, useAccordionToggle} from 'react-bootstrap'


function HeaderTab(){
    return(
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-white">
                        
            <button className="navbar-toggler mr-auto"> 
                <span className="navbar-toggler-icon"></span>  
            </button>
            
            <a className="hospital_line_navbar mt-auto mb-auto" href = "#">
                <img src="Images/Logo.png" alt="Logo"/>
                HOSPITAL <span>LINE</span>
            </a>
            
            <button className="account_button btn-primary btn-lg d-none d-md-block">
                <h3 className="h3-responsive text-center">M</h3>
            </button>
        </nav>

    );
}

function BodyTab(){
    return(
        <div className="body_tab">
            <div className="dash_board">
                <h2>DASHBOARD</h2>
            </div>
            <div className="sidebar-expanded d-none d-md-block side_bar_main">
                <div className="side_bar_main_container">
                    <div className="list-group">
                        <a href="Dashboard.html" className="active list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-start align-items-center">
                                <span><img src="Images/DashIcon.png" className="IconAdjust" alt="Dashboard Icon"/></span>
                                <span className="IconName">Dashboard</span>
                            </div>
                        </a>

                        <Accordion>
                                <SideToggle eventKey="0" img="Images/CapacityIcon.png">
                                    Capacity    
                                </SideToggle>
                                
                                <Accordion.Collapse eventKey="0">
                                        <div>
                                            <a className="list-group-item list-group-item-action text-center" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                                <span className="sidebar_subcollapse">Patients</span>
                                            </a>
                                            <a className="list-group-item list-group-item-action text-center" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                                <span className="sidebar_subcollapse">Emergency Beds</span>
                                            </a>
                                        </div>
                                </Accordion.Collapse>
                        </Accordion>

                        

                        <a href="Appointment.html" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-start align-items-center">
                                <span><img src="Images/AppointmentIcon.png" className="IconAdjust2" alt="Appointment Icon"/></span>
                                <span className="IconName">Appointment</span>
                            </div>
                        </a>

                        
                        <Accordion>
                                <SideToggle eventKey="0" img="Images/teamIcon.png" >
                                        Team    
                                </SideToggle>
                                
                                <Accordion.Collapse eventKey="0">
                                        <div>
                                            <a className="list-group-item list-group-item-action text-center" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                                <span className="sidebar_subcollapse">Doctor</span>
                                            </a>
                                            <a className="list-group-item list-group-item-action text-center" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                                <span className="sidebar_subcollapse">Nurse</span>
                                            </a>
                                        </div>
                                </Accordion.Collapse>
                        </Accordion>

                        <Accordion>
                                <SideToggle eventKey="2" img="Images/availabilityIcon.png">
                                    Available    
                                </SideToggle>
                                
                                <Accordion.Collapse eventKey="2">
                                        <div>
                                            <a className="list-group-item list-group-item-action text-center" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                                <span className="sidebar_subcollapse">Hospital</span>
                                            </a>
                                            <a className="list-group-item list-group-item-action text-center" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                                                <span className="sidebar_subcollapse">Clinic</span>
                                            </a>
                                        </div>
                                </Accordion.Collapse>
                        </Accordion>

                        
                        <a href="Account.html" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-start align-items-center">
                                <span><img src="Images/AccountIcon.png" className="IconAdjust2" alt="Account Icon"/></span>
                                <span className="IconName">Account</span>
                            </div>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Dashboard() {
    return (
        <div id="Dashboard">
            <section> 
              <HeaderTab/>
              <BodyTab/>
            
            </section>



{/*             
            <section id="Dashboard-Content">
                <div className="grid-container">
                    <main>
                        <div className="rowdash center">
                            <div className="card-dash">
                                <img className="dash-pic" src="Images/team/doctor.png" alt="stat"/>
                                <div className="carddash-body">
                                    <p>Doctor</p>
                                    <p style={{marginTop: -265,marginLeft: 180,color: '#4D6DB4'}}>5</p>
                                </div>
                            </div>
                            

                            <div className="card-dash">
                                <img className="dash-pic" src="Images/team/nurse.png" alt="stat"/>
                                <div className="carddash-body">
                                    <p>Nurse</p>
                                    <p style={{marginTop: -265,marginLeft: 180,color: '#10A6FF'}}>7</p>
                                </div>
                            </div>

                            <div className="card-dash">
                                <img className="dash-pic" src="Images/capacity/hospital-bed.png" alt="stat"/>
                                <div className="carddash-body">
                                    <p>ER Beds</p>
                                    <p style={{marginTop: -265,marginLeft: 180,color: '#00CF87'}}>10</p>
                                </div>
                            </div>

                            <div className="card-dash">
                                <img className="dash-pic" src="Images/capacity/medical-records.png" alt="stat"/>
                                <div className="carddash-body">
                                    <p>Patients</p>
                                    <p style={{marginTop: -265,marginLeft: 180,color: '#FC6C79'}}>12</p>
                                </div>
                            </div>

                            <div className="card-dash">
                                <img className="dash-pic" src="Images/available/hospital.png" alt="stat"/>
                                <div className="carddash-body">
                                    <p>Hospitals</p>
                                    <p style={{marginTop: -265,marginLeft: 180,color: '#0C6095'}}>15</p>
                                </div>
                            </div>

                            <div className="card-dash">
                                <img className="dash-pic" src=" Images/available/clinic.png" alt="stat"/>
                                <div className="carddash-body">
                                    <p>Clinics</p>
                                    <p style={{marginTop: -265,marginLeft: 180,color: '#7F69D4'}}>9</p>
                                </div>
                            </div>
                            
                        </div>
                    </main>
                </div>
            </section>
         */}
        
        </div>
    )
}



function SideToggle({ children, eventKey, img }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
        <a  aria-expanded="false" className="list-group-item list-group-item-action flex-column align-items-start"
             onClick={decoratedOnClick}
        >
            <div className="d-flex w-100 justify-content-start align-items-center">
                <span><img src={img} className="IconAdjust2" alt="Capacity Icon"/></span>
                    <span className="IconName">{children}</span>
                    <span className="fa fa-angle-right text-white" style={{fontSize:20}}></span>
            </div>
        </a>
    );
  }