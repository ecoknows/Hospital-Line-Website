import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/'
import 'bootstrap-switch-button/css/bootstrap-switch-button.min.css';
import  'bootstrap-switch-button/dist/bootstrap-switch-button.min.js';
import {Login, HomePage} from './screens';
import {Signup, SignupWork, SignupSecurity, SignupDone} from './screens/signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

function App() {
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
