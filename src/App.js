import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {Login, HomePage} from './screens';
import {Signup, SignupWork, SignupSecurity, SignupDone} from './screens/signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import { firestore } from './database/Firebase';
import { departments } from './data/const_data';
import { useEffect } from 'react';


const addingHospital =()=>{
  const name = 'Pope John Paul II Hospital and Medical Center';
  const departments = [1,2,3,4,5,6,7];
  const departments_pending = [3,6,5,4,10,11,2]
  const change_date = [0,1,2,3,4,5,6];

  firestore.collection('Hospitals').add({
    availability: true,
    name,
    search: name.toLowerCase(),
    departments,
    departments_pending,
    doctors: 5,
    nurse:25,
    patients: 150,
    beds: 200,
    hospitals: 24,
    clinics: 40,
    
  }).then((result)=>{
      console.log(result);
      addingHospitalDepartments(result.id,departments,change_date)
  })
}


const addingHospitalDepartments =(id, department,change_date)=>{
  department.forEach(element => {
    const doc_title = departments[element].title;
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Nurse',
      department: doc_title
    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Doctor',
      department: doc_title
    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Doctor',
      department: doc_title
    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Doctor',
      department: doc_title
    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Doctor',
      department: doc_title
    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Doctor',
      department: doc_title
    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Doctor',
      department: doc_title
    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Doctor',
      department: doc_title
    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).add({
      firstname:'Jerico',
      lastname:'Cabiling',
      middle_initial:'C',
      search:'jerico c. cabiling',
      availability: true,
      position:'Nurse',
      department: doc_title

    }).then((response)=>{
      addingHospitalData(id,doc_title,response.id,change_date)
    })
   });
  
}

const addingHospitalData =(id,doc_title, department_title,change_date)=>{ 
  const dates = ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'];

  change_date.forEach(element => {
    const col_date = dates[element]

    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('12:00').set({
      availability: true,
      department: doc_title
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('13:00').set({
      availability: true,
      department: doc_title
    })
    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('11:30').set({
      availability: true,
      department: doc_title
    })

    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('8:30').set({
      availability: true,
      department: doc_title
    })

    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('10:40').set({
      availability: true,
      department: doc_title
    })

    
    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('21:40').set({
      availability: true,
      department: doc_title
    })
    
    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('17:20').set({
      availability: true,
      department: doc_title
    })
    
    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('22:00').set({
      availability: true,
      department: doc_title
    })
    
    firestore.collection('Hospitals').doc(id).collection(doc_title).doc(department_title).collection(col_date)
    .doc('4:50').set({
      availability: true,
      department: doc_title
    })
  });
}

function App() {
  useEffect(() => {
    const test = '';
    addingHospital()
  }, [])

  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/homepage" component={HomePage}/>
            <Route path="/signup" component={Signup} exact/>
            <Route path="/signup/work" component={SignupWork} exact/>
            <Route path="/signup/security" component={SignupSecurity} exact/>
            <Route path="/signup/done" component={SignupDone}exact />
          </Switch>
        </div>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
