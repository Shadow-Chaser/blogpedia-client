import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Navigator from './components/Navigator/Navigator';
import Login from './components/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <Navigator></Navigator>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

