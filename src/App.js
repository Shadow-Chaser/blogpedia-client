import { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomePage/Home/Home';
import Navigator from './components/Shared/Navigator/Navigator';
import SignIn from './components/Auth/SignIn/SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/AdminPanel/Admin/Admin';
import AddBlog from './components/AdminPanel/AddBlog/AddBlog';
import ManageBlogs from './components/AdminPanel/ManageBlogs/ManageBlogs'
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({});

  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
    <div className='App'>
        <Router >

          <Switch>
          <Route exact path="/">
            <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <PrivateRoute path="/addBlog">
              <AddBlog></AddBlog>
            </PrivateRoute>
            <PrivateRoute path="/manageBlogs">
              <ManageBlogs></ManageBlogs>
            </PrivateRoute>

            <Route path="/">

            </Route>

          </Switch>
    </Router>
    </div>
    </UserContext.Provider>


  );
}

export default App;

