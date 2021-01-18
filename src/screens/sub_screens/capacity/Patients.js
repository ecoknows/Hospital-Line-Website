import React, {useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useAuth } from '../../../context/AuthContext';
import { const_data } from '../../../data';
import './css/capacity.css'

const data = {
    date: '23/12/2020',
    quantity : 12,
}

export default function Patients() {
    const [update, setUpdate] = useState(false);
    const [value, setValue] = useState(const_data.dataOfHospital.data.patients.toString());
    const [patientsVal, setPatientsVal] = useState(const_data.dataOfHospital.data.patients.toString())
    const {updateHospital} = useAuth();

    const SaveChanges =()=>{
        setUpdate(false)
        setPatientsVal(value)
        updateHospital({patients: value})
    }

    return (
        <div  style={{height:'100%'}}>
            <div className='main_title'>
                Patients  
            </div>
            <div className='capacity_body'>
                <Container fluid>
                    <Row>
                        <Col className='d-flex align-items-center flex-column' style={{flex:1, marginTop: 80}} >
                            <Card style={{borderRadius: 10, width:'fit-content', height:'fit-content'}}>
                                <Card.Body className='d-flex calendar'>
                                    <img alt='' src='/Images/capacity/calendar.png' />
                                    <span>{data.date}</span>
                                </Card.Body>
                            </Card>
                            { !update ? <Card style={{borderRadius: 10,marginTop: 20,paddingLeft:10, paddingRight: 10,cursor:'pointer'}}
                                onClick={()=>setUpdate(true)}
                            >
                                <Card.Body className='capacity_save'>
                                    <span>Update Details</span>
                                </Card.Body>
                            </Card>: null}
                            {update ? <Card style={{borderRadius: 10,marginTop: 20,paddingLeft:10, paddingRight: 10,cursor:'pointer'}}
                                onClick={SaveChanges}
                            >
                                <Card.Body className='capacity_save'>
                                    <span>Save Changes</span>
                                </Card.Body>
                            </Card>: null}
                            {update ? <Card style={{borderRadius: 10,
                                marginTop: 20,
                                paddingLeft:10, 
                                paddingRight: 10,
                                cursor:'pointer', 
                                width: 130}}
                                onClick={()=>setUpdate(false)}
                                >
                                <Card.Body className='capacity_save d-flex justify-content-center'>
                                    <span>Cancel</span>
                                </Card.Body>
                            </Card> : null}
                        </Col>


                        <Col className='d-flex align-items-center justify-content-center' style={{flex:4}}>
                            <div style={{justifyContent: 'center',alignItems:'center', display:'flex', flexDirection: 'column'}}>
                                <Card  className='shadow p-3 mb-5 bg-white rounded'style={{width:'fit-content', height:'fit-content'}}>
                                    <Card.Body style={{justifyContent:'center', display:'flex'}}>
                                        <img alt='' src='/Images/capacity/medical-records.png' className='capacity_img'/>
                                        <div className='dashboard_card_text'style={{alignSelf:'center'}}>
                                            <h1>Patients</h1>
                                            <h1 style={{textAlign:'center', color:'#fc6c79', fontWeight: 'bold'}}>{patientsVal}</h1>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <div style={{height:50}}>
                                    { !update ? <h1 className='capacity_text'>Current number of patients</h1> : null}
                                    { update ? <div className='align-items-center d-flex justify-content-center'>
                                        <img alt='' src='/Images/capacity/plus.png' 
                                        style={{alignSelf:'center',
                                                height:30,
                                                width:30,
                                                marginTop: 20,
                                                marginRight: 10,
                                        }}
                                        onClick={()=>setValue((parseInt(value)+1).toString())}
                                        />
                                        <input 
                                        type="text" 
                                        value={value}
                                        onChange={e=>setValue( e.target.value)}
                                        size={value.length <= 1  ? 1 : value.length >= 5? 5 :value.length  }
                                        className='capacity_input'
                                        />
                                        <img alt='' src='/Images/capacity/minus.png' 
                                        style={{alignSelf:'center',
                                                height:30,
                                                width:30,
                                                marginTop: 20,
                                                marginLeft: 10,
                                        }}
                                        
                                        onClick={()=>{
                                            if(value > 0)
                                                setValue((parseInt(value)-1).toString())
                                        }}
                                        />
                                    </div> : null}
                                    
                                    {update?<h1 style={{fontSize: 15, marginTop: 40}}>
                                        Enter the number of increased or decreased patients:
                                    </h1>: null}
                                </div>
                                
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    )
}
