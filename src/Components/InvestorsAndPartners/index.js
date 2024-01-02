import React from 'react';
import logo from '../assets/MetaNinjaLogo.png';
import leftArrow from '../assets/forwordArrow.png';
import rightArrow from '../assets/rightForwordArrow.png';
import partners from '../assets/partners.png';
import stroke from '../assets/mapStroke.png';

const InvestorsAndPartners = () => {

    return (
        <>
            <div className='bg-effect'>
                <div className='w-full bg-[#ffb300] p-6'>
                    <div>
                        <img src={logo} className='mx-auto h-[100px]' alt="" />
                    </div>

                    <div className='flex justify-between items-center h-[100px]'>
                        <img className='h-[100px]' src={leftArrow} alt="" />
                        <div className='w-[80%]'>
                            <h1 className='font-[700] text-4xl  text-center'>CORIOSTY - EXPLORATION - COCREATION</h1>

                        </div>
                        <img className='h-[100px]' src={rightArrow} alt="" />
                    </div>

                    <p className='text-center font-[500]'>META NINJA STRIKE 2080 is a next-gen web3<br /> entertainment platform with creator DAOs presenting<br />a future cyberpunk world through high-quality multi-episode games</p>

                </div>

                <div className='bg-effect bg-black'>
                    <div className='flex items-center w-full justify-between'>
                        <img src={stroke} />
                        <h2 className='text-[#ffb300] text-4xl font-[700]'>INVESTORS AND PARTNERS</h2>
                        <img src={stroke} />

                    </div>
                    <div>
                        <img className='w-full' src={partners} alt="" />
                    </div>
                </div>



            </div>
        </>
    );
};

export default InvestorsAndPartners;
