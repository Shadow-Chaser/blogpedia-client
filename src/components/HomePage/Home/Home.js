import React from 'react';
import Navigator from '../../Shared/Navigator/Navigator';
import BlogContainer from '../BlogContainer/BlogContainer';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Navigator></Navigator>
            <Header></Header>
            <BlogContainer></BlogContainer>
        </div>
    );
};

export default Home;