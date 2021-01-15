import React from 'react'
import {Row, Col, Card, Table} from 'react-bootstrap'
import { useRouteMatch, useHistory } from 'react-router-dom';
import './css/doctorslist.css'


const data = [
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: '', name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
]


export default function DoctorList() {
    return (
        <div style={{height: '85%'}} >
            <div className='main_title' >
                DOCTOR LIST  
            </div>
            <div className='table_e'>
                
                <Table striped className='table_e'>
                    <thead>
                        <tr>
                            <th className="table_header">
                                <h1>Name</h1>
                            </th>
                            <th className="table_header">
                                <h1>Department</h1>
                            </th>
                            <th className="table_header">
                                <h1>Pending Appointments</h1>
                            </th>
                        </tr>
                    </thead> 
                    <Doctors/>
                </Table>
            </div>
        </div>
    )
}


function Doctors(){
    const { path } = useRouteMatch();
    const history = useHistory();
    const items = data.map((item, index)=>
        <tr onClick={()=>history.push(`${path}/persons`)}>
            <td>
                <div className='doctors_td'>
                    <img src='/Images/appointment/avatar.png'/>
                <h1>{item.name}</h1>
                </div>
            </td>
            <td>
                <div className='doctors_td'>
                    <h1>{item.department}</h1>
                </div>
            </td>
            <td >
                <div className='doctors_td'>
                    <h1>{item.pending} pending</h1>
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