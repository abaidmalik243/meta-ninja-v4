import MapHead from './Images/mapTextHead.png'
import MapCard from './Images/mapCrad.png'
import LeftArrow from './Images/leftArrow.png'
import RightArrow from './Images/rightArrow.png'
import BottomIcons from './Images/bottomIcons.png'
import Carousel from "react-multi-carousel";
const MapSection=()=>{
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 200 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return <div className='mapBackgrounfImg bg-black m-auto pt-4'>
{/* <div className='flex justify-between w-full'>
</div> */}

<img src={MapHead} alt='' className='absolute w-full'/>
{/* <div className='flex items-center justify-between m-auto w-[98%] z-50 mt-5'>
    <div><img src={LeftArrow} alt='' className='h-12 w-12 cursor-pointer'/></div>

<div className=''>
<div className='cont_wallet-btn-parent bg-[#EC9C2E] ml-[53%] h-[90px] w-[30%] mr-[8%] mt-[40%] xl:mt-[530px] lg:ml-[50%] xl:ml-[700px] absolute'>
                      <button className='cont_wallet-btn sm:px-8 pt-4  lg:text-[40px] md:text-[27px] h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>MAP NAME</button>
                      </div>
<img src={MapCard} alt='' className=' mt-[100px] w-[80%] m-auto'/>
<div className='-mt-[3.5%] w-[80%] lg:px-[4rem] md:px-[3.5rem]'>  <img src={BottomIcons} alt='' className=''/></div>
</div>
<div>
<img src={RightArrow} alt='' className='h-12 w-12 cursor-pointer'/>
</div>
</div> */}
        {/* <div className='cont_wallet-btn-parent bg-[#EC9C2E] h-[90px] w-[30%] float-right -mt-[15%] mr-[6%]'>
                      <button className='cont_wallet-btn sm:px-8 py-4 md:text-[40px] h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>MAP NAME</button>
                      </div> */}
                      

                      
                        <Carousel className=' mx-3 mt-3' responsive={responsive}>
                        <div className='flex items-center justify-between m-auto w-[98%] z-50 mt-5'>
    <div><img src={LeftArrow} alt='' className='h-12 w-12 cursor-pointer'/></div>

<div className=''>
<div className='cont_wallet-btn-parent bg-[#EC9C2E] ml-[53%] h-[90px] w-[30%] mr-[8%] mt-[40%] xl:mt-[530px] lg:ml-[50%] xl:ml-[700px] absolute'>
                      <button className='cont_wallet-btn sm:px-8 pt-4  lg:text-[40px] md:text-[27px] h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>MAP NAME</button>
                      </div>
<img src={MapCard} alt='' className=' mt-[100px] w-[80%] m-auto'/>
<div className='-mt-[3.5%] w-[80%] lg:px-[4rem] md:px-[3.5rem]'>  <img src={BottomIcons} alt='' className=''/></div>
</div>
<div>
<img src={RightArrow} alt='' className='h-12 w-12 cursor-pointer'/>
</div>
</div>
<div className='flex items-center justify-between m-auto w-[98%] z-50 mt-5'>
    <div><img src={LeftArrow} alt='' className='h-12 w-12 cursor-pointer'/></div>

<div className=''>
<div className='cont_wallet-btn-parent bg-[#EC9C2E] ml-[53%] h-[90px] w-[30%] mr-[8%] mt-[40%] xl:mt-[530px] lg:ml-[50%] xl:ml-[700px] absolute'>
                      <button className='cont_wallet-btn sm:px-8 pt-4  lg:text-[40px] md:text-[27px] h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>MAP NAME</button>
                      </div>
<img src={MapCard} alt='' className=' mt-[100px] w-[80%] m-auto'/>
<div className='-mt-[3.5%] w-[80%] lg:px-[4rem] md:px-[3.5rem]'>  <img src={BottomIcons} alt='' className=''/></div>
</div>
<div>
<img src={RightArrow} alt='' className='h-12 w-12 cursor-pointer'/>
</div>
</div>
<div className='flex items-center justify-between m-auto w-[98%] z-50 mt-5'>
    <div><img src={LeftArrow} alt='' className='h-12 w-12 cursor-pointer'/></div>

<div className=''>
<div className='cont_wallet-btn-parent bg-[#EC9C2E] ml-[53%] h-[90px] w-[30%] mr-[8%] mt-[40%] xl:mt-[530px] lg:ml-[50%] xl:ml-[700px] absolute'>
                      <button className='cont_wallet-btn sm:px-8 pt-4  lg:text-[40px] md:text-[27px] h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>MAP NAME</button>
                      </div>
<img src={MapCard} alt='' className=' mt-[100px] w-[80%] m-auto'/>
<div className='-mt-[3.5%] w-[80%] lg:px-[4rem] md:px-[3.5rem]'>  <img src={BottomIcons} alt='' className=''/></div>
</div>
<div>
<img src={RightArrow} alt='' className='h-12 w-12 cursor-pointer'/>
</div>
</div><div className='flex items-center justify-between m-auto w-[98%] z-50 mt-5'>
    <div><img src={LeftArrow} alt='' className='h-12 w-12 cursor-pointer'/></div>

<div className=''>
<div className='cont_wallet-btn-parent bg-[#EC9C2E] ml-[53%] h-[90px] w-[30%] mr-[8%] mt-[40%] xl:mt-[530px] lg:ml-[50%] xl:ml-[700px] absolute'>
                      <button className='cont_wallet-btn sm:px-8 pt-4  lg:text-[40px] md:text-[27px] h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>MAP NAME</button>
                      </div>
<img src={MapCard} alt='' className=' mt-[100px] w-[80%] m-auto'/>
<div className='-mt-[3.5%] w-[80%] lg:px-[4rem] md:px-[3.5rem]'>  <img src={BottomIcons} alt='' className=''/></div>
</div>
<div>
<img src={RightArrow} alt='' className='h-12 w-12 cursor-pointer'/>
</div>
</div><div className='flex items-center justify-between m-auto w-[98%] z-50 mt-5'>
    <div><img src={LeftArrow} alt='' className='h-12 w-12 cursor-pointer'/></div>

<div className=''>
<div className='cont_wallet-btn-parent bg-[#EC9C2E] ml-[53%] h-[90px] w-[30%] mr-[8%] mt-[40%] xl:mt-[530px] lg:ml-[50%] xl:ml-[700px] absolute'>
                      <button className='cont_wallet-btn sm:px-8 pt-4  lg:text-[40px] md:text-[27px] h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>MAP NAME</button>
                      </div>
<img src={MapCard} alt='' className=' mt-[100px] w-[80%] m-auto'/>
<div className='-mt-[3.5%] w-[80%] lg:px-[4rem] md:px-[3.5rem]'>  <img src={BottomIcons} alt='' className=''/></div>
</div>
<div>
<img src={RightArrow} alt='' className='h-12 w-12 cursor-pointer'/>
</div>
</div>
                        </Carousel>

    </div>
}
export default MapSection;