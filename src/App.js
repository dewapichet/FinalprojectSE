import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    
    <Router >
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Register">
            <Register/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;

