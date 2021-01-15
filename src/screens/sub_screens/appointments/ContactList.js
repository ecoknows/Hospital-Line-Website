import React from 'react'
import { Card, Table } from 'react-bootstrap'
import './css/contactlist.css'

const data = [
    {name:'Maica Ella', date: '12 August 2020', time: '3:30 PM',mobile_no:'09084741500', doctor:'Dr. Sally Lapuz', status: true},
    {name:'Maica Ella', date: '12 August 2020', time: '3:30 PM',mobile_no:'09084741500', doctor:'Dr. Sally Lapuz', status: false},
    {name:'Maica Ella', date: '12 August 2020', time: '3:30 PM',mobile_no:'09084741500', doctor:'Dr. Sally Lapuz', status: true},
    {name:'Maica Ella', date: '12 August 2020', time: '3:30 PM',mobile_no:'09084741500', doctor:'Dr. Sally Lapuz', status: false},
    {name:'Maica Ella', date: '12 August 2020', time: '3:30 PM',mobile_no:'09084741500', doctor:'Dr. Sally Lapuz', status: false},
    {name:'Maica Ella', date: '12 August 2020', time: '3:30 PM',mobile_no:'09084741500', doctor:'Dr. Sally Lapuz', status: true},
    ]

export default function ContactList() {
    return (
        <div style={{height: '85%'}}>
            <div className='main_title' >
                APPOINTMENT  
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{height: '100%', width: '100%'}}>
                <Card className='contact_card shadow bg-white rounded align-self-center'>
                    <div className='contacts_table_e'>
                        
                        <Table striped borderless>
                            <thead>
                                <tr>
                                    <th className="contacts_table_header">
                                        <h1>Name</h1>
                                    </th>
                                    <th className="contacts_table_header">
                                        <h1>Date</h1>
                                    </th>
                                    <th className="contacts_table_header">
                                        <h1>Time</h1>
                                    </th>
                                    <th className="contacts_table_header">
                                        <h1>Mobile no.</h1>
                                    </th>
                                    <th className="contacts_table_header">
                                        <h1>Doctor</h1>
                                    </th>
                                </tr>
                            </thead> 
                            <Persons/>
                        </Table>
                    </div>
                </Card>
            </div>
           
        </div>
    )
}



function Persons(){
    const items = data.map((item, index)=>
        <tr>
            <td>
                <div className='doctors_td'>
                    <h1>{item.name}</h1>
                </div>
            </td>
            <td>
                <div className='doctors_td'>
                    <h1>{item.date}</h1>
                </div>
            </td>
            <td >
                <div className='doctors_td'>
                    <h1>{item.time}</h1>
                </div>
            </td>
            <td >
                <div className='doctors_td'>
                    <h1>{item.mobile_no}</h1>
                </div>
            </td>
            
            <td >
                <div className='contact_td'>
                    <h1>{item.doctor}</h1>
                    <div className='contactlist_status_circle' style={{justifySelf:'flex-end', backgroundColor: item.status ? 'green': '#C4C4C4'}} >
                        <img src='/Images/contact_check.png'/>
                    </div>
                </div>
            </td>
        </tr>
    )

    return (
        <tbody >
            {items}
        </tbody>
    )
}
