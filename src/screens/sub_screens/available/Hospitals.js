import React,{useState} from 'react'
import {Table} from 'react-bootstrap'
let data = [
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ',  address: 'Times, Alabang-Zapote Road', status: false},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
    { name:'Perpetual Help Hospital ', address: 'Times, Alabang-Zapote Road', status: true},
]

export default function Hospitals() {

    return (
        <div style={{height: '85%'}} >
            

            <div className='main_title' style={{display:'grid',gridTemplateColumns: 'auto auto'}} >
                Hospitals 
                <div style={{justifySelf:'flex-end', 
                    width: '50%'
                }}>
                <img src='/Images/search.png' style={{width: 20, height: 20, marginRight: 5}}/>
                <input className='doctor_input' placeholder='Search Hospital'/>
                </div>
            </div>
            <div className='table_e'>
                
                <Table striped className='table_e'>
                    <thead>
                        <tr>
                            <th className="table_header" >
                                <h1 style={{textAlign:'start',  marginLeft: 50}}>Hospital Name</h1>
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