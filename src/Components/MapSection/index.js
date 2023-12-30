import MapHead from './Images/mapTextHead.png'
import MapCard from './Images/mapCrad.png'
import LeftArrow from './Images/leftArrow.png'
import RightArrow from './Images/rightArrow.png'
import BottomIcons from './Images/bottomIcons.png'
const MapSection=()=>{

    return <div className='mapBackgrounfImg bg-black m-auto pt-4'>
<img src={MapHead} alt='' className='absolute w-full'/>
{/* <div className='flex justify-between w-full'>
</div> */}

<div className='flex items-center m-auto w-[98%] z-50 pt-2'>
<img src={LeftArrow} alt='' className='h-12 w-12 cursor-pointer'/>
<img src={MapCard} alt='' className=' mt-[100px] w-[85%] m-auto'/>
<img src={RightArrow} alt='' className='h-12 w-12 cursor-pointer'/>
</div>
<div className=' px-[11rem] -mt-[3.5%]'>  <img src={BottomIcons} alt='' className=''/></div>
        <div className='cont_wallet-btn-parent bg-[#EC9C2E] h-[90px] w-[30%] float-right -mt-[15%] mr-[6%]'>
                      <button className='cont_wallet-btn sm:px-8 py-4 md:text-[40px] h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>MAP NAME</button>
                      </div>
    </div>
}
export default MapSection;