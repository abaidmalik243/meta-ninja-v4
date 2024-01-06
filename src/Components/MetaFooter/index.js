import React from 'react';
import footerCharacter1 from '../assets/footerCharacter1.png';
import footerCharacter2 from '../assets/footerCharacter2.png';
import footerBrand1 from '../assets/footerBrand1.png';
import footerBrand2 from '../assets/footerBrand2.png';
import footerBrand3 from '../assets/footerBrand3.png';



const MetaFooter = () => {

    return (
        <>
            <div className='bg-black h-[100vh] flex items-center'>
                <div className='footerBackground  h-[60vh] w-full '>
                    <div className='flex w-[50%] mx-auto mt-[12%] h-[50px] justify-between'>
                        <img src={footerBrand1} width="15%" alt="" />
                        <img src={footerBrand2} width="30%" alt="" />
                        <img src={footerBrand3} width="18%" alt="" />
                    </div>
                    <div className='w-[25%] mx-auto mt-[100px] h-[50px] justify-between'>
                        <h1 className='font-[700] text-center'>FIND US ON</h1>
                        <div className='flex justify-center'>
                    <i className="fa-brands text-lg fa-tiktok"></i>
                    <i className="fa-brands text-lg ml-2  fa-instagram"></i>
                    <i className="fa-brands text-lg ml-2  fa-linkedin"></i>
                    <i className="fa-brands text-lg ml-2 fa-youtube"></i>
                    <i className="fa-brands text-lg ml-2 fa-twitter"></i>
                    <i className="fa-brands text-lg ml-2 fa-facebook"></i>
                    </div>


                    </div>
                </div>

                <div className='flex justify-between w-full  absolute'>
                    <img src={footerCharacter1} className=' max-w-[30%]' alt="" />
                    <img src={footerCharacter2} className=' max-w-[30%]' alt="" />
                </div>


            </div>

        </>
    );
};

export default MetaFooter;
