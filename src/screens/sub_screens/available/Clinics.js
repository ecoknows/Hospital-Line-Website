import React from 'react'
import {Table} from 'react-bootstrap'

let data = [
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic',  address: 'Times, Alabang-Zapote Road', status: false},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: false},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: false},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: false},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: false},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: false},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'St. Paul Clinic', address: 'Times, Alabang-Zapote Road', status: true},
]

let selected_doctor = {index: -1, name:''}

export default function Clinic() {

    return (
        <div style={{height: '85%'}} >
            <div className='main_title' style={{display:'grid',gridTemplateColumns: 'auto auto'}} >
                Clinics 
                <div style={{justifySelf:'flex-end', 
                    width: '50%'
                }}>
                <img src='/Images/search.png' style={{width: 20, height: 20, marginRight: 5}}/>
                <input className='doctor_input' placeholder='Search Clinic'/>
                </div>
            </div>
            <div className='table_e'>
                
                <Table striped className='table_e'>
                    <thead>
                        <tr>
                            <th className="table_header" >
                                <h1 style={{textAlign:'start',  marginLeft: 50}}>Clinic Name</h1>
                            </th>
                            <th className="table_header">
                                <h1>Address</h1>
                            </th>
                            <th className="table_header">
                                <h1>Availability</h1>
                            </th>
                        </tr>
                    </thead> 
                    <Doctors_List/>
                </Table>
            </div>
           


        </div>
    )
}

function Doctors_List(){

    const items = data.map((item, index)=>
        <tr>
            <td>
                <div className='doctors_td' style={{justifyContent:'flex-start', marginLeft: 50}}>
                    <h1>{item.name}</h1>
                </div>
            </td>
            <td>
                <div className='doctors_td'>
                    <h1>{item.address}</h1>
                </div>
            </td>
            <td >
                <div className='doctors_td'>
                        <span
                            style={{fontFamily:'Open Sans', fontSize: 14,marginLeft: 10, fontWeight:'bold',
                            color: item.status ?  'green' : 'red'
                        }}
                        >{item.status ? 'Available': 'Full'}</span>
                </div>
            </td>
        </tr>
    )

    return (
        <tbody style={{
            height: 50
        }}>
            {items}
        </tbody>
    )
}