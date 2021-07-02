import React from 'react';
import { Carousel } from 'react-bootstrap';
import read from '../../../assets/read.svg'
import write from '../../../assets/write.svg'
import share from '../../../assets/share.svg'
import './Header.css'
const timeStamp = 3500;

const Header = () => {
    return (
        <div className='mt-3 header-area'>

            <Carousel fade={true} controls={false} indicators={false} pause={false}>
                <Carousel.Item interval={timeStamp}>
                    <div className="d-flex">
                        <div className="">
                            <img src={write} alt="" className='header-img' />
                        </div>
                        <div className="">
                            <h2 className='header-text'>A place for <br /> independent writing!</h2>
                        </div>
                    </div>
                </Carousel.Item>


                <Carousel.Item interval={timeStamp}>
                    <div className="d-flex">
                        <div className="">
                            <img src={read} alt="" className='header-img' />
                        </div>
                        <div className="">
                            <h2 className='header-text'>Today a reader, <br /> tomorrow a leader!</h2>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={timeStamp}>
                    <div className="d-flex">
                        <div className="">
                            <img src={share} alt="" className='header-img' />
                        </div>
                        <div className="col-md-7">
                            <h2 className='header-text'>Share your stories <br /> and support creators!</h2>
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Header;