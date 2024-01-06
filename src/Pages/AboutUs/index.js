import SideEffect from './Images/AboutUsSideEffect.png'
import Cart from './Images/HowCart.png'
import RightArrow from './Images/RightArrow.png'
import Charactart from './Images/man.png'
import DownArrow from './Images/DownArrows.png'
import Carousel from 'react-multi-carousel';
import SliderImg from './Images/slider3rd.png'
import ThreeMan from './Images/ThreeCharacter.png'
import BottomEffect from './Images/ImageCurve.png'

const AboutUs = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return <div className="">
        <div className='w-full'>
        <div className='w-full absolute lg:mt-[10%] mt-[15%] z-10 text-white text-center'> 
        <div className='relative'>
        <img src={SideEffect} alt='' className='w-full absolute'/>
        <p className='xl:text-[100px] lg:text-[80px] md:text-[60px] text-[40px] text-stroke'>ABOUT</p></div>
        <p className='xl:text-[100px] lg:text-[80px] md:text-[60px] text-[40px] text-stroke-us -mt-[4%]'>US</p>
        <p className='xl:text-[30px] lg:text-[25px] md:text-base texr-[sm] text-[#ffc400] -mt-[2%]'>ITS TIME TO KNOW US</p>
        <div className=''><img src={DownArrow} alt='' className='m-auto w-[50px] md:w-[70px]  lg:w-[100px] cursor-pointer'/></div>
        </div> 
        <div className='w-full'>
                    <img src={ThreeMan} alt="" className='w-full' />
                </div>
            </div>

        {/* ************how metaninga Strik2************* */}

        <div className='bg-black bg-effect -mt-[6%]'>
            <div className='ml-[6%] pt-[4%]'>
                <p className='xl:text-[350%] lg:text-[250%] md:text-[200%] text-[30px] text-white font-bold'>How</p>
                <p className='xl:text-[400%] lg:text-[350%] md:text-[200%] text-[30px] text-[#ffc400] font-bold'>META NINJA STRIKE</p>
            </div>
            <div className='flex justify-center m-auto w-[90%] ml-[6%] '>
                <div className='text-white  w-[50%] '>
                    <p className='text-[60px] md:text-[100px] font-bold -mt-[4%]'>2080</p>
                    <div className='flex items-center md:-mt-[10%] lg:-mt-[4%] '>
                        <p className='xl:text-[60px] lg:text-[43px] md:text-[35px]'>CAME TO BE</p>
                        <div> <img src={RightArrow} alt='' /> </div>
                    </div>
                    <p className='text-sm inline-block '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className='w-[50%]'> <img src={Cart} alt='' className='float-right' /></div>
            </div>
       
            {/* <img src={FaddingEffect} alt='' className='w-full' /> */}
        </div>


{/* ********************** OUR STORY ********************** */}


<div className='bg-black bg-effect'>
<div className='ml-[23%]'>
        <img src={DownArrow} alt='' className='w-[80px] md:w-[120px] lg:w-[150px] xl:w-[190px]'/>
        </div>
    <div className='relative'>
        <div className='w-[48%] right-0 absolute'>
        <img src={DownArrow} alt='' className='ml-[60%] w-[80px] md:w-[120px] lg:w-[150px] xl:w-[190px] absolute lg:-mt-[20%] -mt-[30%]'/>
    <div className='mr-6 lg:mt-[30%] md:mt-[20%]'>
        <div className='flex items-center text-[#ffc400] font-bold'><p className='xl:text-[80px] lg:text-[60px] md:text-[40px]'>OUR</p><img src={RightArrow} alt='' className=''/> </div>
        <p className='text-[#ffc400] xl:text-[80px] lg:text-[60px] md:text-[40px] font-bold -mt-[4%]'>STORY</p>
        <p className='text-xs lg:text-sm text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       </p>
    </div>
        </div>
        <div className=''>
             <img src={Charactart} alt='' className='w-full'/>
              </div>
    </div> 
    {/* <img src={BottomEffect} alt='' className='b -mt-[12%] w-full' /> */}
</div>
    </div>
}

export default AboutUs