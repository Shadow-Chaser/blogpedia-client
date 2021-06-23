// import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';

// const Navigator = () => {
//     return (
//         <Navbar bg="" expand="lg">
//             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-right">
//                     <Nav.Link href="#home">Home</Nav.Link>
//                     <Nav.Link href="#link">Link</Nav.Link>
//                 </Nav>

//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default Navigator;


import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigator.css'
import logo from '../../../assets/logo.png'

const Navigator = () => {
    return (
        <Navbar bg='' className='navbar-container' expand="lg">
            <Navbar.Brand className='ml-5'><img src={logo} style={{ width: '140px' }} alt="" srcset="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <li>
                        <Link className='single-link' to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link className='single-link' to='/admin'>Admin</Link>
                    </li>
                    <li>
                        <Link className='single-link' to='/login'>Login</Link>
                    </li>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigator;
