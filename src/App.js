import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomePage/Home/Home';
import Navigator from './components/Shared/Navigator/Navigator';
import Login from './components/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/AdminPanel/Admin/Admin';
import AddBlog from './components/AdminPanel/AddBlog/AddBlog';
import ManageBlogs from './components/AdminPanel/ManageBlogs/ManageBlogs'

function App() {
  return (
    <Router>
      {/* <Navigator></Navigator> */}
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
        <Route path="/addBlog">
          <AddBlog></AddBlog>
        </Route>
        <Route path="/manageBlogs">
          <ManageBlogs></ManageBlogs>
        </Route>

        <Route path="/">

        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

