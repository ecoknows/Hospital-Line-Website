import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom';
import '../../css/appointment.css'


const data = [
    {image: '/Images/appointment/stomach.png', name: 'Gastroenterology',notif: 0},
    {image: '/Images/appointment/bone.png', name: 'Gastroenterology',notif: 5},
    {image: '/Images/appointment/pelvic-area.png', name: 'Gynecology',notif: 6},
    {image: '/Images/appointment/child.png', name: 'Pediatrician',notif: 8},
    {image: '/Images/appointment/dermis.png', name: 'Dermitology',notif: 9},
    {image: '/Images/appointment/doctor.png', name: 'General Medicine',notif: 0},
    {image: '/Images/appointment/heart.png', name: 'Cardiology',notif: 4},
    {image: '/Images/appointment/tooth.png', name: 'Dental',notif: 6},
]


export default function Appointment() {
    return (
        <div style={{position:'fixed', height: '78%'}} >
            <div className='main_title' >
                DEPARTMENT  
            </div>

            <Departments />
            
        </div>
    )
}


function Departments(){
    const { path } = useRouteMatch();
    const items = data.map((item, index)=>
    <Col lg="3" key={index.toString()} style={{margin:20, cursor:'pointer'}} className='shadow p-3 mb-5 bg-white rounded'>
        <Link to={`${path}/doctorlist`}style={{textDecoration:'none', color:'black'}}>
            <Card style={{height: 150, border:'none'}}>
                <Card.Body style={{justifyContent:'center', display:'flex'}} >
                    <img alt ='department' src={item.image} style={{alignSelf:'center'}}/>
                </Card.Body>
                <Card.Body style={{justifyContent:'center', display:'flex'}} >
                    <h1>{item.name}</h1>
                </Card.Body>
            </Card>
        </Link>
        
        { item.notif > 0 ?<div className='circle_notif d-flex justify-content-center align-items-center'>
                <h1>{item.notif}</h1>
        </div> : null}
    </Col>
    )

    return (
        <Row style={{
            overflow: 'auto',
            justifyContent: 'center'
        }}>
            {items}
        </Row>
    )
}