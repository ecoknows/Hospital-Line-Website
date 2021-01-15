import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dashboard, Login, Signup,DashboardTest} from './screens';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/signup" component={Signup}/>
          {/* <Route path="/dashboard" component={Dashboard}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
