import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'


const data = [
    {image: '/Images/appointment/stomach.png', name: 'Gastroenterology'},
    {image: '/Images/appointment/bone.png', name: 'Gastroenterology'},
    {image: '/Images/appointment/pelvic-area.png', name: 'Gynecology'},
    {image: '/Images/appointment/child.png', name: 'Pediatrician'},
    {image: '/Images/appointment/dermis.png', name: 'Dermitology'},
    {image: '/Images/appointment/doctor.png', name: 'General Medicine'},
    {image: '/Images/appointment/heart.png', name: 'Cardiology'},
    {image: '/Images/appointment/tooth.png', name: 'Dental'},
    {image: '/Images/appointment/tooth.png', name: 'Dental'},
    {image: '/Images/appointment/tooth.png', name: 'Dental'},
    {image: '/Images/appointment/tooth.png', name: 'Dental'},
    {image: '/Images/appointment/tooth.png', name: 'Dental'},
    {image: '/Images/appointment/tooth.png', name: 'Dental'},
    {image: '/Images/appointment/tooth.png', name: 'Dental'},
]


export default function Appointment() {
    return (
        <div>
            <div className='main_title'>
                DEPARTMENT  
            </div>

            <Departments/>
            
        </div>
    )
}


function Departments(){

    const items = data.map((item, index)=>
    <Col lg="3" key={index.toString()} style={{margin:20}} className='shadow p-3 mb-5 bg-white rounded'>
        <Card style={{height: 150, border:'none'}}>
            <Card.Body style={{justifyContent:'center', display:'flex'}} >
                <img src={item.image} style={{alignSelf:'center'}}/>
            </Card.Body>
            <Card.Body style={{justifyContent:'center', display:'flex'}} >
                <h1>{item.name}</h1>
            </Card.Body>
        </Card>
    </Col>
    )

    return (
        <Row style={{alignItems:'center', justifyContent:'center'}}>
            {items}
        </Row>
    )
}