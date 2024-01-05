import React from 'react';
import leftDot from '../assets/leftDot.png';
import enemyText from '../assets/enemyText.png';
import forwordArrow from '../assets/forwordArrow.png';
import enemyBackgroundImage from '../assets/enemyBackgroundImage.png';
import firstEnemy from '../assets/firstEnemy1.png';
import secoundEnemy from '../assets/secoundEnemy.png';
import thirdEnemy from '../assets/thirdEnemy.png';
import forthEnemy from '../assets/forthEnemy.png';
import crousalDots from '../assets/lighBoxes.png';
import shining from '../assets/shining.png';



const Enemy = () => {

    return (
        <>

            <div className='bg-effect h-[100vh] bg-black pt-[50px]' >
                <div>
                    <img src={enemyBackgroundImage} className='h-[] absolute  w-[45%]' alt="" />
                    <div className='flex h-[50px] w-[50%] justify-between items-center'>
                        <img src={leftDot} alt="" />
                        <img src={enemyText} className='mx-3' alt="" />
                        <img src={forwordArrow} alt="" />

                    </div>
                    <div className=' h-[50px] flex justify-end'>
                        <img src={crousalDots} alt="" />
                    </div>
                    <div className='flex w-full justify-end'>
                        <div className='w-[78%] flex  h-[550px] justify-end z-10'>
                            <img src={firstEnemy} className='mr-[-28px] w-[40%]' alt="" />
                            <img src={secoundEnemy} className='ml-[-176px] w-[40%]' alt="" />
                            <img src={thirdEnemy} className='ml-[-212px] w-[40%]' alt="" />
                            {/* <img src={shining} className='absolute' alt="" /> */}
                            <img src={forthEnemy} className='ml-[-218px] w-[29.5%]' alt="" />      
                        </div>
                    </div>

                    <div className=' h-[50px] flex  justify-start float-right w-[75%]'>
                        <img src={crousalDots} alt="" />
                    </div>

                </div>

            </div>


        </>
    );
};

export default Enemy;
