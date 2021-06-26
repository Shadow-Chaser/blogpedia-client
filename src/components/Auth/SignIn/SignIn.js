import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config'
import './SignIn.css'
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';


const SignIn = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: 'false',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }

    const handleBlur = (e) => {
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        // console.log(newUser);
    }

    const handleSubmit = (e) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = { ...user };
                newUserInfo.isSignedIn = true;
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setSignedInUser(newUserInfo);
                history.push(from)
                // console.log(newUserInfo);

            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                console.log(newUserInfo);
            });
        e.preventDefault();
    }


    return (
        <div>
            <h1 className="signin-text">Sign In to Proceed!</h1>
            <Form onSubmit={handleSubmit} className='form-container'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" onBlur={handleBlur} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" onBlur={handleBlur} />
                </Form.Group>

                <Button variant="info" type="submit">Sign In</Button>

                {
                    user.error && <p style={{ color: 'red', margin: '20px', fontWeight: 'bolder' }}>🚫 {user.error} </p>
                }
            </Form>
        </div>
    );
};

export default SignIn;