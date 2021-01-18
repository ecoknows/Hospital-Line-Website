import React, { useEffect, useState } from 'react'
import {Container, Card, Row, Col} from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import '../../css/dashboard.css'
import { const_data } from '../../data';

export default function Dashboard() {
    const [data, setData] = useState();
    const { getDashboard } = useAuth();
    console.log(const_data.dataOfHospital.data, ' will leave');
    useEffect(()=>{
        getDashboard(setData);
    },[])

    return (
        <div style={{height:'100%'}}>
            <div className='main_title'>
                DASHBOARD  
            </div>
            
            <Container>
                <Row>
                   <DashInfo img='/Images/team/doctor.png' name='Doctor' color='#4d6db4'>
                       {data?.doctors}
                   </DashInfo>
                   <DashInfo img='/Images/team/nurse.png' name='Nurse' color='#10A6FF'>
                        {data?.nurse}
                   </DashInfo>
                   <DashInfo img='/Images/capacity/hospital-bed.png' name='ER beds' color='#00CF87'>
                        {data?.beds}
                   </DashInfo>
                </Row>
                <Row>
                   <DashInfo img='/Images/capacity/medical-records.png' name='Patients' color='#FC6C79'>
                       {data?.patients}
                   </DashInfo>
                   <DashInfo img='/Images/available/hospital.png' name='Hospitals' color='#0C6095'>
                       {data?.hospitals}
                   </DashInfo>
                   <DashInfo img='/Images/available/clinic.png' name='Clinic' color='#7F69D4'>
                       {data?.clinics}
                   </DashInfo>
                </Row>
            </Container>
        </div>
    )
}

function DashInfo({img, name, children, color}){
    return(
        <Col style={{margin:20}} className='shadow p-3 mb-5 bg-white rounded'>
            <Card style={{height: 150, border:'none'}}>
                <Card.Body style={{justifyContent:'center', display:'flex'}}> 
                    <img  alt ='dashingo' src={img} style={{alignSelf:'center'}}/>
                    <div className='dashboard_card_text'style={{alignSelf:'center'}}>
                        <h1>{name}</h1>
                        <h1 style={{textAlign:'center', color, fontWeight: 'bold'}}>{children}</h1>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}