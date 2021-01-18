import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './css/doctorslist.css'

let _location = null;
export default function DoctorList() {

    const [data, setData] = useState();
    const location = useLocation();
    const { getDoctorList,searchDoctorList } = useAuth();

    useEffect(()=>{
        if(location?.data){
            _location = location.data
            getDoctorList(location.data).then(result=>{
                setData(result);
            })
        }else if(_location != null){
            getDoctorList(_location).then(result=>{
                setData(result);
            })
        }
    },[]);

    return (
        <div style={{height: '85%'}} >
            <div className='main_title' style={{display:'grid',gridTemplateColumns: 'auto auto'}} >
                DOCTOR LIST  
                <div style={{justifySelf:'flex-end', 
                    width: '50%'
                }}>
                <img alt='search' src='/Images/search.png' style={{width: 20, height: 20, marginRight: 5}}/>
                <input className='doctor_input' placeholder='Search Doctor'
                    onChange={e=>{
                        console.log(e.target.value , ' ', location.data);
                        searchDoctorList(location.data , e.target.value.toLowerCase()).then(result=>{
                            setData(result)
                        });
                    }}
                />
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
                    <Doctors data={data} location={location}/>
                </Table>
            </div>
        </div>
    )
}


function Doctors({data, location}){
    const { path } = useRouteMatch();
    const history = useHistory();
    const items = data?.map((item, index)=>
        <tr onClick={()=>history.push(`${path}/persons`)}>
            <td>
                <div className='doctors_td' style={{justifyContent:'flex-start', marginLeft: 50}}>
                    <img alt='doctor_profile' src={item.image == null? '/Images/avatar.png' : item.image}/>
                <h1>Dr. {item.firstname} {item.lastname}</h1>
                </div>
            </td>
            <td>
                <div className='doctors_td'>
                    <h1>{location?.data}</h1>
                </div>
            </td>
            <td >
                <div className='doctors_td'>
                    <h1>10 pending</h1>
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