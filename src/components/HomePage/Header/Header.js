import React from 'react';
import headerImg from '../../../assets/headerImg.jpeg'
import Navigator from '../../Shared/Navigator/Navigator';
import './Header.css'

const Header = () => {
    return (
        <div className='header-div'>
            <Navigator id='nav-div'></Navigator>
            <img src={headerImg} alt="" id='headerImg' />
        </div>
    );
};

export default Header;