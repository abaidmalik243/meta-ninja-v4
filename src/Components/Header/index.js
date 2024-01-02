import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Icons from 'Components/Navabr/images/Group 3.png'
// import MyImg from '../../img/sliderimg1.png';
// import MyImg2 from '../../img/image (1).png';
import MyImg3 from '../Navabr/images/slider3rd.png';
import BackgroundImg from 'Components/Navabr/images/headerBackground.png';

const Header = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className='w-full'>
                <img src={Icons} alt='' className='absolute mt-[250px] z-20 w-full' />
            </div>

            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={true}
                showDots={false}
                arrows={false}
                className='absolute -z-20'

            >
                <div className='w-full'>
                    <img src={BackgroundImg} alt="" className='w-full h-[700px]' />
                </div>
                <div className='w-full'>
                    <img src={MyImg3} alt="" className='w-full h-[700px]' />
                </div>
                {/* <div className='w-full'>
                    <img src={MyImg2} alt="" className='w-full h-[700px]' />
                </div> */}
            </Carousel>
        </>
    )
}

export default Header;