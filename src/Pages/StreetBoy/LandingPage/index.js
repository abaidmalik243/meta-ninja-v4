import React from 'react'
import uprightline from '../../../images/uprightline.png'
import downrightline from '../../../images/downrightline.png'
import downleftline from '../../../images/downleftline.png'
import upleftline from '../../../images/upleftline.png'
import nftcard from '../../../images/nftcard.png'
import nftcard2 from '../../../images/nftcard2.png'
import nftcard3 from '../../../images/nftcard3.png'
import nftcard4 from '../../../images/nftcard4.png'
import rightStrokes from '../../../images/rightStrokes.png'
import leftStrokes from '../../../images/leftStrokes.png'

const LandingPage = () => {

    return (
        <>
            <div className=' bg-effect  bg-black pb-[1rem]'>

                <div className='pt-[1rem]'>
                    <div className='flex justify-between'>
                        <img src={upleftline} className='w-[350px] h-[45px]' alt="" />
                        <img src={uprightline} className='w-[350px] h-[45px]' alt="" />
                    </div>
                    <div className='bg-[rgb(255,191,0)] py-[2.5rem]'>
                        <h1 className='text-center text-[25px]'>Complete Closed -Loop Ecosystem</h1>
                    </div>
                    <div className='flex justify-between'>
                        <img src={downleftline} className='w-[350px] h-[45px]' alt="" />
                        <img src={downrightline} className='w-[350px] h-[45px]' alt="" />
                    </div>
                </div>

                <div className='flex justify-around mt-[20px]'>
                    
                    <div className='max-w-[200px] min-w-[150px]'>
                        <img src={nftcard} alt="" />
                        <h1 className='text-center text-[rgb(255,191,0)]'>Game NFT Market Place</h1>
                        <h1 className='text-center text-white leading-4 mt-[16px] text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa!</h1>
                    </div>
                    <div className='max-w-[200px] min-w-[150px]'>
                        <img src={nftcard2} alt="" />
                        <h1 className='text-center text-[rgb(255,191,0)]'>Game NFT Market Place</h1>
                        <h1 className='text-center text-white leading-4 mt-[16px] text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa!</h1>
                    </div>
                    <div className='max-w-[200px] min-w-[150px]'>
                        <img src={nftcard3} alt="" />
                        <h1 className='text-center text-[rgb(255,191,0)]'>Game NFT Market Place</h1>
                        <h1 className='text-center text-white leading-4 mt-[16px] text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa!</h1>
                    </div>
                    <div className='max-w-[200px] min-w-[150px]'>
                        <img src={nftcard4} alt="" />
                        <h1 className='text-center text-[rgb(255,191,0)]'>Game NFT Market Place</h1>
                        <h1 className='text-center text-white leading-4 mt-[16px] text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa!</h1>
                    </div>
                </div>

                <div className='flex justify-between mt-[2rem]'>
                    <img src={rightStrokes} className='w-[300px]' alt="" />
                    <img src={leftStrokes} className='w-[300px]' alt="" />
                </div>

            </div>

        </>
    );
};

export default LandingPage;