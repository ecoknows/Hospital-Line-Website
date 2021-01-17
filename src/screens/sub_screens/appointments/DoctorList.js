import React from 'react'
import {Table} from 'react-bootstrap'
import { useRouteMatch, useHistory } from 'react-router-dom';
import './css/doctorslist.css'


const data = [
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
    {image: null, name:'Dr. Sany Lapuz', department: 'Dermetology', pending: 5},
]


export default function DoctorList() {
    return (
        <div style={{height: '85%'}} >
            <div className='main_title' style={{display:'grid',gridTemplateColumns: 'auto auto'}} >
                DOCTOR LIST  
                <div style={{justifySelf:'flex-end', 
                    width: '50%'
                }}>
                <img alt='search' src='/Images/search.png' style={{width: 20, height: 20, marginRight: 5}}/>
                <input className='doctor_input' placeholder='Search Doctor'/>
                </div>
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
                <div className='doctors_td' style={{justifyContent:'flex-start', marginLeft: 50}}>
                    <img alt='doctor_profile' src={item.image == null ? '/Images/avatar.png' : item.image}/>
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