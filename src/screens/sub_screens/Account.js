import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export default function Account() {
    return (
        <div style={{height:'100%'}}>
            <div className='main_title'>
                ACCOUNT  
            </div>

            <Container>
                <Row>
                    <Col style={{display: 'flex', paddingTop: 20,flexDirection:'column'}}>
                        <img alt='image' src='/Images/account/perps.png' style={{
                            height: 250,
                            alignSelf:'center',
                            width: 250
                        }}/>
                         <img alt='map' src='/Images/map.png' style={{
                             marginTop: 30,
                             alignSelf:'center',
                            height: 200,
                            width: 200
                        }}/>
                    </Col>
                    <Col style={{paddingTop: 20}}>
                        <img alt='logo' src='/Images/hospital_logo.png'
                            style={{
                                height: 70,
                                aligSelf:'center'
                            }}
                        />
                        <h1
                            style={{
                                fontFamily:'Roboto'
                            }}
                        >Perpetual Help Medical Center</h1>
                        <h1
                            style={{
                                fontFamily:'Roboto',
                                fontSize: 20,
                            }}
                        >Las Piñas Branch</h1>

                        <div style={{display:'flex',
                                marginTop: 60}}> 
                            <img alt='telephone' src='/Images/account/telephone.png' style={{
                                height: 25,
                                width: 25,
                                marginRight:20,
                                marginBottom: 30,
                            }}/>
                            <h1 style={{fontSize: 20}}>(+632)8874-8515</h1>
                        </div>
                        <div style={{display:'flex'}}>
                            <img alt='hospital building' src='/Images/account/hospital-building.png' style={{
                                height: 25,
                                width: 25,
                                marginRight:20,
                                marginBottom: 30,
                            }}/>
                            <h1 style={{fontSize: 20}}>Level 3 medical center</h1>
                        </div>
                        <div style={{display:'flex'}}>
                            <img alt='address' src='/Images/account/address.png' style={{
                                height: 25,
                                width: 25,
                                marginRight:20,
                                marginBottom: 30,
                            }}/>
                            <h1 style={{fontSize: 20}}>UNIVERSITY OF PERPETUAL HELP
                            DALTA MEDICAL CENTER, INC.
                            Alabang-Zapote Rd., Pamplona III
                            Las Pinas City, Philippines 1740
                            </h1>
                        </div>
                        <div style={{display:'flex'}}>
                            <img alt='globe' src='/Images/account/global.png' style={{
                                height: 25,
                                width: 25,
                                marginRight:20,
                                marginBottom: 30,
                            }}/>
                            <h1 style={{fontSize: 20}}>www.perpetualhelpmedcenter-laspinas.com.ph</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
