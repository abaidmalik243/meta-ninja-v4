import SideEffect from './Images/AboutUsSideEffect.png'
import Heading from './Images/HeadingText.png'
import FaddingEffect from './Images/yellow color gradiant.png'
import Cart from './Images/HowCart.png'
import RightArrow from './Images/RightArrow.png'
import Charactart from './Images/man.png'
import DownArrow from './Images/DownArrows.png'
import Carousel from 'react-multi-carousel';
import SliderImg from './Images/slider3rd.png'

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
        <img src={Heading} alt='' className='w-full absolute mt-[10%] z-10' /> 
        {/* <img src={DownArrow} alt='' className='absolute mt-[10%] z-10' />  */}
        <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={true}
                showDots={false}
                arrows={false}
                className=''

            >
                <div className='w-full'>
                    <img src={SliderImg} alt="" className='w-full h-[700px]' />
                </div>
                <div className='w-full'>
                    <img src={SliderImg} alt="" className='w-full h-[700px]' />
                </div>
                {/* <div className='w-full'>
                    <img src={MyImg2} alt="" className='w-full h-[700px]' />
                </div> */}
            </Carousel>
            </div>

        {/* ************how metaninga Strik2************* */}

        <div className='-mt-[6.3%] bg-black'>
            <div className='absolute mt-[10%] ml-[6%]'>
                <p className='text-[400%] text-white font-bold'>How</p>
                <p className='text-[600%] text-[#ffc400] font-bold -mt-[3%]'>META NINJA STRIKE</p>
            </div>
            <div className='flex justify-between m-auto absolute mt-[23%] w-[90%] ml-[6%]'>
                <div className='text-white w-[50%]'>
                    <p className='text-[100px] font-bold -mt-[4%]'>2080</p>
                    <div className='flex items-center -mt-[4%]'>
                        <p className='text-[60px]'>CAME TO BE</p>
                        <div> <img src={RightArrow} alt='' /> </div>
                    </div>
                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
                <div className='w-[50%]'> <img src={Cart} alt='' className='float-right' /></div>
            </div>
       
            <img src={FaddingEffect} alt='' className='w-full' />
        </div>


{/* ********************** OUR STORY ********************** */}


<div className='-mt-[25%] bg-black'>
<div className='ml-[23%] -mt-[10%] absolute '>
        <img src={DownArrow} alt='' className=''/>
        </div>
    <div className='flex justify-between'>
        <div className='w-1/2'> <img src={Charactart} alt=''/> </div>
        <div className='mr-[3%] w-1/2'>
        <img src={DownArrow} alt='' className=''/>
    <div className=''>
        <div className='flex items-center text-[#ffc400] text-[80px] font-bold'><p>OUR</p><img src={RightArrow} alt='' className=''/> </div>
        <p className='text-[#ffc400] text-[80px] font-bold'>STORY</p>
        <p className='text-sm text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </p>
    </div>
        </div>
    </div> 
</div>
    </div>
}

export default AboutUs