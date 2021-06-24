// import React from 'react';
// import headerImg from '../../../assets/headerImg.jpeg'
// import Navigator from '../../Shared/Navigator/Navigator';
// import './Header.css'

// const Header = () => {
//     return (
//         <div className='header-div'>
//             <Navigator id='nav-div'></Navigator>
//             <img src={headerImg} alt="" id='headerImg' />
//         </div>
//     );
// };

// export default Header;



import React from 'react';
import { Carousel } from 'react-bootstrap';
import read from '../../../assets/read.svg'
import write from '../../../assets/write.svg'
import share from '../../../assets/share.svg'
import './Header.css'
const timeStamp = 3500;

const Header = () => {
    return (
        <div className='mt-5'>

            <Carousel>
                <Carousel.Item interval={timeStamp}>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={write} alt="" className='header-img' />
                        </div>
                        <div className="col-md-7">
                            <h2 className='header-text'>A place for <br /> independent writing!</h2>
                        </div>
                    </div>
                </Carousel.Item>


                <Carousel.Item interval={timeStamp}>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={read} alt="" className='header-img' />
                        </div>
                        <div className="col-md-7">
                            <h2 className='header-text'>Today a reader, tomorrow a leader!</h2>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item interval={timeStamp}>
                    <div className="row">
                        <div className="col-md-5">
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