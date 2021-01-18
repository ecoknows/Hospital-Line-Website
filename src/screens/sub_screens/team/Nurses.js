import React,{useState, useRef, useEffect} from 'react'
import {Row, Col, Card, Table, Modal, Button, Form} from 'react-bootstrap'
import { useRouteMatch, useHistory } from 'react-router-dom';
import { const_data } from '../../../data';
import './css/team.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useAuth } from '../../../context/AuthContext';

let selected_doctor = {index: -1, name:''}

export default function Nurses() {
    
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false)
  const {getDoctorList} = useAuth();
  const [data,setData] = useState([]);

  
  useEffect(()=>{
    const_data.dataOfHospital.data.departments.forEach(element => {
        const dept = const_data.departments[element].title;
        getDoctorList(dept).then(result=>{
            setData((oldData)=>[...oldData, ...result]);
        })
    });
  },[]);
  
  const handleClose = () => {
      setShow(false);
  }
  const handleOffline = () => {
      data[selected_doctor.index].status = false;
      setShow(false);
  }
  const handleOnline = () => {
      data[selected_doctor.index].status = true;
      setShow(false);
  }
  const handleShow = (item, index) => {
      console.log(index);
      selected_doctor = {index, ...item}
      setShow(true);
  }
  
  const handleAddClose =()=>{
    setAdd(false);
  }
  const handleAddShow =()=>{
    setAdd(true);
  }
  const handleSave =(item)=>{
    data.unshift(item)
    setAdd(false);
  }

    return (
        <div style={{height: '85%'}} >
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{width: '100%', justifyContent:'center', display: 'flex'}}>
                        <div className='row' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <img src='/Images/appointment/avatar.png' className='pic_profile'/>
                            <div>
                                <div style={{fontSize: 15, marginLeft: 10}}>{selected_doctor.name}</div>
                                <div style={{fontSize: 10, marginLeft: 10}}>{selected_doctor.department}</div>

                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 style={{fontSize: 16}}>What is the status of {selected_doctor.name}?</h2>
                </Modal.Body>
                <Modal.Footer>
                <Button style={{backgroundColor:'red', borderColor:'red'}} onClick={handleOffline}>
                    Rest
                </Button>
                <Button  style={{backgroundColor:'green', borderColor:'green'}}onClick={handleOnline}>
                    On Duty
                </Button>
                </Modal.Footer>
            </Modal>

            <DoctorModal add={add} handleAddClose={handleAddClose} handleSave={handleSave}/>

            <div className='add_botton shadow d-flex justify-content-center align-items-center'
                onClick={handleAddShow}
            >
                <img src='/Images/cross.png' style={{height:30, width:30}}/>
            </div>

            <div className='main_title' style={{display:'grid',gridTemplateColumns: 'auto auto'}} >
                NURSES LIST  
                <div style={{justifySelf:'flex-end', 
                    width: '50%'
                }}>
                <img src='/Images/search.png' style={{width: 20, height: 20, marginRight: 5}}/>
                <input className='doctor_input' placeholder='Search Nurse'/>
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
                                <h1>Availability</h1>
                            </th>
                        </tr>
                    </thead> 
                    <Doctors_List handleShow={handleShow} data={data}/>
                </Table>
            </div>
           


        </div>
    )
}


function DoctorModal ({add, handleAddClose, handleSave}){
    // const [name]
    const dapertmentSelect = useRef()
    const name = useRef()
    const [picture, setPicture] = useState(null)
    const [availability ,setAvailability] = useState(true)
    const [error, setError ] = useState(false)
    const reader = new FileReader();
    return(
        <Modal show={add} onHide={handleAddClose}>
            <Modal.Header closeButton >
                <Modal.Title tyle={{width: '100%', alignItems:'center',justifyContent:'center', display: 'flex'}}>
                        <div style={{fontSize: 20, marginLeft: 10}}>Add Nurse</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{display:'flex', flexDirection:'column'}}>
                    
                    <img src={picture == null ?'/Images/avatar.png': picture} style={{height: 100, width: 100, borderRadius: '50%',alignSelf:'center', border:'2px solid #1DA6FD'}}/>
                    <Form.Group style={{alignSelf:'center'}}>
                        <Form.File id="exampleFormControlFile1"
                            onChange={(e)=>{
                                const file = e.target.files[0]
                                reader.readAsDataURL(file);
                                reader.onloadend =(e)=>{
                                    setPicture(reader.result)}
                                }
                            }
                            
                        />

                        <div style={{marginTop: 10}}>
                            <BootstrapSwitchButton
                                checked={true}
                                onlabel='On duty'
                                onstyle='success'
                                offlabel='Rest'
                                offstyle='danger'
                                style='w-100 mx-3'
                                onChange={(checked) => {
                                    setAvailability(checked)
                                }}
                            />
                        </div>

                    </Form.Group>
                    <Form.Group style={{width:'50%'}}>
                        <Form.Label style={{fontSize:15,fontWeight: 'bold'}}>Doctor Name</Form.Label>
                         <Form.Control type="text" placeholder="Chevy Quitquitan" ref={name} 
                            style={{borderColor: error ?'red':null, fontSize:15}}
                            onChange={(e)=>{
                                if(e.target.value.length >= 0 && error){
                                    setError(false);
                                }
                            }}
                         />
                    </Form.Group>
                    
                    <Form.Group style={{width:'50%',fontWeight: 'bold'}}>
                        <Form.Label style={{fontSize:15}}>Select Department</Form.Label>
                        <Form.Control style={{fontSize:15}} as="select" ref={dapertmentSelect}>
                            {const_data.department.map(text=><option>{text}</option>)}
                        </Form.Control>
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button  style={{backgroundColor:'green', borderColor:'green'}} onClick={()=>{
                if(name.current.value <= 0){
                    setError(true)
                }else
                    handleSave({image: picture, name: name.current.value, department: dapertmentSelect.current.value, status: availability})
                }}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

function Doctors_List({handleShow,data}){
    const { path } = useRouteMatch();
    const changeStatus =(item, index)=>{
        handleShow(item,index)
    }
    const items = data.map((item, index)=>
        <tr onClick={()=>changeStatus(item, index)}>
            <td>
                <div className='doctors_td' style={{justifyContent:'flex-start', marginLeft: 50}}>
                    <img src={item.image == null ? '/Images/avatar.png' : item.image}/>
                    <h1>Dr. {item.firstname} {item.lastname}</h1>
                </div>
            </td>
            <td>
                <div className='doctors_td'>
                    <h1>{item.department}</h1>
                </div>
            </td>
            <td >
                <div className='doctors_td'>
                        <div className='contactlist_status_circle'
                        style={{backgroundColor: item.status ? 'green': 'red'
                        ,height:15, width:15
                        }}/> 
                        <span
                            style={{fontFamily:'Open Sans', fontSize: 14,marginLeft: 10}}
                        >{item.availability ? 'on duty': 'rest'}</span>
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