import MainCart from './Images/CartShap_.png'
import SideCart from './Images/SideShape_.png'
import Machine from './Images/Machine.png'
import Header from './Images/Group 3 (1).png'
import WeaponsCart from './Images/wepon Cart.png'
import Gun from './Images/gun.png'
import RightArrow from './Images/RightArrow.png'
import LeftArrow from './Images/leftArrow.png'
import Object from './Images/Object.png'
import CompleteObj from './Images/CompleteObj.png'


const Weapons=()=>{

    return <div className="bg-black mapBackgrounfImg">
        <div className=''><img src={Header} alt=''/></div>
        <div className='mt-10'>
<div className='relative border'>
    <img src={MainCart} alt='' className='absolute m-auto h-[90%] w-[70%]'/>
    
    <div>
<div className='flex justify-between gap-x-5 items-center w-[80%] m-auto'>
<div className='w-[40%] h-full'><span className='absolute text-[45px] ml-[4%]'>MACHINE<br/> GUN</span> <img src={CompleteObj} alt=''/>
{/* <span className='-mt-[200px]'><img src={Object} alt=''  className='-mt-[370px]'/></span> */}
  </div>
{/* <div className=' w-[60%]'> */}
{/* <div className='flex w-full gap-x-4 m-auto h-[75px] text-xl'>
    <div className='GunName w-[25%] flex justify-center items-center'>GUN NAME</div>
    <div className='GunName w-[25%] flex justify-center items-center'>GUN NAME</div>
    <div className='GunName w-[25%] flex justify-center items-center'>GUN NAME</div>
    <div className='GunName w-[25%] flex justify-center items-center'>GUN NAME</div>
</div> */}
{/* <div className=''><img src={Gun} alt='' className='h-[400px] w-[700px] m-auto'/> </div> */}
{/* <div className='flex justify-evenly gap-x-3 items-center'>
    <div><img src={LeftArrow} alt='' className='w-[100px] cursor-pointer'/></div>
    <div className='relative'>
        <img src={WeaponsCart} alt='' className=''/>
        <img src={Machine} alt='' className='-mt-[63%] ml-[10%]'/>
    <span className='absolute text-black w-full text-end -mt-2.5 pr-2.5 text-[10px]'>GUN NAME</span>
    </div>
    <div className='relative'><img src={WeaponsCart} alt='' className=''/>
    <img src={Machine} alt='' className='-mt-[63%] ml-[10%]'/>
    <span className='absolute text-black w-full text-end -mt-2.5 pr-2.5 text-[10px]'>GUN NAME</span>
    </div>
    <div className='relative'><img src={WeaponsCart} alt='' className=''/>
    <img src={Machine} alt='' className='-mt-[63%] ml-[10%]'/>
    <span className='absolute text-black w-full text-end -mt-2.5 pr-2.5 text-[10px]'>GUN NAME</span>
    </div>
    <div><img src={RightArrow} alt='' className='w-[100px] cursor-pointer'/></div>
</div> */}

{/* </div> */}

</div>
 </div>
 </div>
 </div>
    </div>
}

export default Weapons