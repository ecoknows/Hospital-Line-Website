import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import '../../css/appointment.css'
import { const_data } from '../../data';


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
    const history = useHistory();
    const data_tomap = const_data.dataOfHospital.data.departments;
    const items = data_tomap.map((item, index)=>
    <Col lg="3" key={index.toString()} style={{margin:20, cursor:'pointer'}} className='shadow p-3 mb-5 bg-white rounded'>
        
            <Card style={{height: 150, border:'none'}}
                onClick={()=>history.push({pathname:`${path}/doctorlist`, data: const_data.departments[item].title})}
            >
                <Card.Body style={{justifyContent:'center', display:'flex'}} >
                    <img alt ='department' src={const_data.departments[item].image} style={{alignSelf:'center'}}/>
                </Card.Body>
                <Card.Body style={{justifyContent:'center', display:'flex'}} >
                    <h1>{const_data.departments[item].title}</h1>
                </Card.Body>
            </Card>
        { const_data.dataOfHospital.data.departments_pending[index] > 0 ?<div className='circle_notif d-flex justify-content-center align-items-center'>
                <h1>{const_data.dataOfHospital.data.departments_pending[index] }</h1>
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