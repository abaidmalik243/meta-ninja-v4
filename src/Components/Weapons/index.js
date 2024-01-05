import MainCart from './Images/CartShap_.png'
import SideCart from './Images/SideShape_.png'
import Machine from './Images/Machine.png'
import Header from './Images/Group 3 (1).png'
import WeaponsCart from './Images/wepon Cart.png'
import Gun from './Images/gun.png'
import RightArrow from './Images/RightArrow.png'
import LeftArrow from './Images/leftArrow.png'
import CompleteObj from './Images/CompleteObj.png'
import Cart from './Images/Cart.png'
import gunnamecard from '../Weapons/Images/gunnamecard.png'


const Weapons = () => {

    return <div className="bg-black  mapBackgrounfImg">
        <div className=''><img src={Header} className='' alt='' /></div>
        <div className='mt-10'>

            <div className='flex items-center mx-3'>
                <div className='m-auto w-[80%]'><p className='absolute lg:text-[72px] md:text-[50px] ml-[5%] mt-[5%]'>MACHINE <br /> GUN</p> <img src={Cart} alt='' className='h-[600px] w-full' />
                </div>
                <div className='absolute ml-[45%] w-[45%] lg:w-[39%] md:ml-[50%] lg:ml-[45%]'>
                    <div className='flex gap-x-4 m-auto text-full xl:text-xl'>
                        <div className='GunName w-[25%] flex justify-center items-center px-1 py-2'>GUN NAME</div>
                        <div className='GunName w-[25%] flex justify-center items-center px-1 py-2'>GUN NAME</div>
                        <div className='GunName w-[25%] flex justify-center items-center px-1 py-2'>GUN NAME</div>
                        <div className='GunName w-[25%] flex justify-center items-center px-1 py-2'>GUN NAME</div>
                    </div>
                    <div className=''><img src={Gun} alt='' className='w-[500px]' /> </div>
                    <div className='flex justify-evenly gap-x-3 items-center'>
                        <div><img src={LeftArrow} alt='' className='w-[100px] cursor-pointer' /></div>
                        <div className='relative '>
                            <img src={gunnamecard} alt='' className='' />
                            {/* <img src={Machine} alt='' className='-mt-[63%] ml-[10%] border w-[85%]' /> */}
                            <span className='absolute text-black bottom-[1px] right-3 text-[8px] font-[700]'>GUN NAME</span>
                        </div>
                        <div className='relative'><img src={gunnamecard} alt='' className='' />
                            {/* <img src={Machine} alt='' className='-mt-[63%] ml-[10%] w-[85%]' /> */}
                            <span className='absolute text-black bottom-[1px] right-3 text-[8px] font-[700]'>GUN NAME</span>
                        </div>
                        <div className='relative'><img src={gunnamecard} alt='' className='' />
                            {/* <img src={Machine} alt='' className='-mt-[63%] ml-[10%] w-[85%]' /> */}
                            <span className='absolute text-black bottom-[1px] right-3 text-[8px] font-[700]'>GUN NAME</span>
                        </div>
                        <div><img src={RightArrow} alt='' className='w-[100px] cursor-pointer' /></div>
                    </div>

                </div>
            </div>

        </div>
    </div>
}

export default Weapons