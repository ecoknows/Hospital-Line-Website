import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login, Signup, HomePage} from './screens';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/homepage" component={HomePage}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
