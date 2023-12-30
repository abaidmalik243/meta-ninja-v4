import React from 'react';
import Gradient from '../../images/Gradient.png'
// import Gradient from '../../image/Gradient.png'
import firstimg from '../../images/firstimg.png'
import STREET from '../../images/STREET.png'
import forewardsrrows from '../../images/forewardsrrows.png'
import BOY from '../../images/BOY.png'
import cardframe from '../../images/cardframe.png'
import cardframe2 from '../../images/cardframe2.png'
import cardframe3 from '../../images/cardframe3.png'
import cardframe4 from '../../images/cardframe4.png'
// import streetcharacter from '../../images/streetcharacter.png'
import smoke2 from '../../images/smoke2.png'
import player from '../../images/player.png'
import upArrow from '../../images/upArrow.png'
import downArrow from '../../images/downArrow.png'
import imagepointer from '../../images/imagepointer.png'

import './streetBoyStyle.css';

const StreetBoy = () => {


    return (
        <>
            <div className=' bg-effect h-[100vh] bg-black'>
                <img src={firstimg} alt="" className='z-30' />
                <div className='flex justify-between'>
                    <div className='w-[60%]'>
                        <div className='px-[30px] absolute top-32'>
                            <h1 className='absolute right-10 z-10 mb-4 text-[rgb(236,210,5)]'>Best For combat Fighting</h1>
                            <div className='flex flex-col mt-6'>
                                <img src={STREET} className='mb-4 w-[400px] z-10' alt="" />
                                <div className='flex items-start'>
                                    <img src={BOY} className='mb-2 w-[200px] z-10' alt="" />
                                </div>
                            </div>
                            <img src={forewardsrrows} alt="" className='w-[200px] ' />
                        </div>

                        <img src={smoke2} className='absolute  w-[700px]  top-0 left-[150px] h-[550px]' alt="" />
                        <img src={player} className='absolute top-[12rem]  left-[100px] h-[320px] z-50' alt="" />
                        <img src={Gradient} className='absolute bottom-0 w-[100%]' alt="" />
                    </div>

                    <div className='w-[30%]  '>
                        <div className='flex justify-around items-center'>
                            <div className='flex flex-col w-[50%]'>
                                <div className='relative  w-[130px] mb-1'>
                                    <img src={cardframe} alt="" className='h-[100px]' />
                                    <h1 className='text-[5px] font-[400] absolute bottom-[3px] right-[13px]'>Character  Name</h1>
                                </div>

                                <div className='relative  w-[130px] mb-1'>
                                    <img src={cardframe2} alt="" className='h-[100px]' />
                                    <h1 className='text-[5px] font-[400] absolute bottom-[3px] right-[13px]'>Character  Name</h1>
                                </div>

                                <div className='relative  w-[130px] mb-1'>
                                    <img src={cardframe3} alt="" className='h-[100px]' />
                                    <h1 className='text-[5px] font-[400] absolute bottom-[3px] right-[13px]'>Character  Name</h1>
                                </div>

                                <div className='relative  w-[130px] mb-1'>
                                    <img src={cardframe4} alt="" className='h-[100px]' />
                                    <h1 className='text-[5px] font-[400] absolute bottom-[3px] right-[13px]'>Character  Name</h1>
                                </div>
                            
                            </div>
                            <div className='flex flex-col '>
                                <img src={upArrow} className='w-[50px]' alt="" />
                                <img src={imagepointer}  className='w-[50px]' alt="" />
                                <img src={downArrow}  className='w-[50px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default StreetBoy;
