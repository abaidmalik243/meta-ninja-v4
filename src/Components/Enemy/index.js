import React from 'react';
import leftDot from '../assets/leftDot.png';
import enemyText from '../assets/enemyText.png';
import forwordArrow from '../assets/forwordArrow.png';
import enemyBackgroundImage from '../assets/enemyBackgroundImage.png';
import firstEnemy from '../assets/firstEnemy1.png';
import secoundEnemy from '../assets/secoundEnemy.png';
import thirdEnemy from '../assets/thirdEnemy.png';
import forthEnemy from '../assets/forthEnemy.png';
import shining from '../assets/shining.png';
import crousalDots from '../assets/lighBoxes.png';


const Enemy = () => {

    return (
        <>

            <div className='bg-effect bg-black h-[100vh] pt-[50px]' >
                <div>
                    <img src={enemyBackgroundImage} className='h-[90vh] absolute w-[45%]' alt="" />
                    <div className='flex h-[50px] w-[40%] justify-between'>
                        <img src={leftDot} alt="" />
                        <img src={enemyText} alt="" />
                        <img src={forwordArrow} alt="" />

                    </div>

                    <div className=' h-[50px] flex justify-end'>
                        <img src={crousalDots} alt="" />
                    </div>

                    <div className='flex w-full justify-end'>

                        <div className='w-[80%] flex h-[400px] justify-end z-10'>


                            <img src={firstEnemy} className='mr-[-16px] w-[40%]' alt="" />

                            <img src={secoundEnemy} className='ml-[-176px] w-[40%]' alt="" />
                            <img src={thirdEnemy} className='ml-[-192px] w-[40%]' alt="" />
                            <img src={forthEnemy} className='ml-[-198px] w-[29.5%]' alt="" />




                            {/* <div className='w-[20%]  h-[80vh] characterBox character1 border border-white'>
</div>
<div className='w-[20%] ml-[-42px] h-[80vh] characterBox border border-white'>
</div>
<div className='w-[20%] ml-[-42px] h-[80vh] characterBox  border border-white'>
</div>
<div className='w-[20%] ml-[-42px] h-[80vh] characterBox border border-white'>
</div> */}




                            {/* <img src={firstEnemy} className='w-[25%] ' alt="" />
<img src={secoundEnemy} className='w-[25%] ' alt="" />
<img src={thirdEnemy} className='w-[25%]' alt="" />
<img src={forthEnemy} className='w-[25%]' alt="" /> */}
                        </div>
                    </div>

                    <div className=' h-[50px] flex justify-start float-right w-[75%]'>
                        <img src={crousalDots} alt="" />
                    </div>

                </div>

            </div>


        </>
    );
};

export default Enemy;
