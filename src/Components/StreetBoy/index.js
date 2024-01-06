import React from 'react';
import Gradient from '../../images/Gradient.png'
import firstimg from '../../images/firstimg.png'
import STREET from '../../images/STREET.png'
import forewardsrrows from '../../images/forewardsrrows.png'
import BOY from '../../images/BOY.png'
import cardframe from '../../images/cardframe.png'
import cardframe2 from '../../images/cardframe2.png'
import cardframe3 from '../../images/cardframe3.png'
import cardframe4 from '../../images/cardframe4.png'
import smoke2 from '../../images/smoke2.png'
import player from '../../images/player.png'
import upArrow from '../../images/upArrow.png'
import downArrow from '../../images/downArrow.png'
import imagepointer from '../../images/imagepointer.png'

import './streetBoyStyle.css';

const StreetBoy = () => {


    return (
        <>
            <div className=' bg-effect  bg-black'>
                <img src={firstimg} alt="" className='' />
                <div className='flex justify-between pb-[3rem]'>
                    <div className='w-[60%]'>
                        <div className='px-[60px] '>
                            <div className='w-[60%] text-right z-50'>
                                <h1 className='mb-1 text-[rgb(236,210,5)] text-[25px]'>Best For combat Fighting</h1>
                            </div>
                            <div className='flex flex-col mt-6'>
                                <img src={STREET} className='mb-4 w-[400px] z-10' alt="" />
                                <div className='flex items-start'>
                                    <img src={BOY} className='mb-2 w-[250px] z-10' alt="" />
                                </div>
                            </div>
                            <img src={forewardsrrows} alt="" className='w-[200px] ' />
                        </div>
                        <div className=''>
                            {/* <img src={smoke2} className='relative h-[100vh]' alt="" /> */}
                            <img src={player} className='absolute  left-[100px] top-[14rem] z-50 h-[500px]' alt="" />
                        </div>
                        <img src={Gradient} className='absolute bottom-0 w-[100%]' alt="" />
                    </div>

                    <div className='w-[30%]  '>
                        <div className='flex justify-around items-center'>
                            <div className='flex flex-col w-[50%]'>
                                <div className='relative w-[150px]  mb-3'>
                                    <img src={cardframe} alt="" className='h-[120px] w-[150px] relative' />
                                    <h1 className='text-[7px] font-[600] absolute bottom-[4px] right-[14px]'>Character  Name</h1>
                                </div>
                                <div className='relative w-[150px]  mb-3'>
                                    <img src={cardframe2} alt="" className='h-[120px] w-[150px] relative' />
                                    <h1 className='text-[7px] font-[600] absolute bottom-[4px] right-[14px]'>Character  Name</h1>
                                </div>
                                <div className='relative w-[150px]  mb-3'>
                                    <img src={cardframe3} alt="" className='h-[120px] w-[150px] relative' />
                                    <h1 className='text-[7px] font-[600] absolute bottom-[4px] right-[14px]'>Character  Name</h1>
                                </div>
                                <div className='relative w-[150px]  mb-3'>
                                    <img src={cardframe4} alt="" className='h-[120px] w-[150px] relative' />
                                    <h1 className='text-[7px] font-[600] absolute bottom-[4px] right-[14px]'>Character  Name</h1>
                                </div>
                            
                            </div>
                            <div className='flex flex-col '>
                                <img src={upArrow} className='w-[60px]' alt="" />
                                <img src={imagepointer}  className='w-[60px]' alt="" />
                                <img src={downArrow}  className='w-[60px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default StreetBoy;
