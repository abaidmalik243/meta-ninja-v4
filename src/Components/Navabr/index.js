import { useNavigate } from 'react-router-dom';
import logo from '../../img/MetaNinjaLogo.png'
import React, { useEffect } from 'react';
import profile from '../../img/profile.png';
// import logo from '../../img/MetaNinjaLogo.png';
// import Dropdown from '../../Component/Dropdown';
// import BackgroundImg from './images/headerBackground.png'

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Icons from './images/Group 3.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import bgMedia from '../Media/bgMedia.mp4';
import MyImg from '../../img/sliderimg1.png';
import MyImg2 from '../../img/image (1).png';
import MyImg3 from '../Navabr/images/slider3rd.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const navigate = useNavigate();

  const navigation = [
    { name: 'STRIKE', href: '/strike', current: true },
    { name: 'GAMES', href: '/games', current: false },
    { name: 'NFT', href: '/nft', current: false },
    { name: 'GALLERY', href: '/gallery', current: false },
    { name: 'MARKITPLACE', href: '/marketplace', current: false },
    { name: 'COMMUNITY', href: '/community', current: false },
    { name: 'ABOUT US', href: '/aboutUs', current: false },
    // { name: <Dropdown />, href: '#', current: false },
  ];

  

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.main-wrapper');
      if (window.scrollY > 7) {
        nav.classList.add('nav-bg');
      } else {
        nav.classList.remove('nav-bg');
      }
    };

    // Set up the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div className='w-full m-auto '>
    {/* <div>
            <img src={BackgroundImg} alt=''/>
        </div> */}
    <Disclosure as="nav" className="main-wrapper w-full">
      {({ open }) => (
        <>
          {/* <div className='w-full'>
            <img src={Icons} alt='' className='absolute mt-[300px] z-20 w-full' />
          </div> */}

          <div className="px-2 absolute w-full z-20 b">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 bg-[orange] hover:text-white ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-center lg:justify-between ml-[20px]">
                <div className="flex flex-shrink-0 lg:w-[15%] items-center">
                  <img
                    className="h-[90px] w-[150px] cursor-pointer"
                    src={logo}
                    onClick={() => navigate('/')}
                    alt="Meta Ninja Strike - Logo"
                  />
                </div>
                <div className='nav-cutting-parent bg-[#ffc400] h-[44px] flex items-center lg:w-[70%]'>
                  <div className="hidden h-[40px] mx-0.5 lg:block bg-black nav-cutting w-full">
                    <div className="flex space-x-4 justify-evenly py-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className=' text-[15px] font-medium text-white hover:text-[#ffc400] hover:border-b-2 hover:border-b-[#ffc400]'
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>



              <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:w-[15%]">

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-sm">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className='cont_wallet-btn-parent bg-[#EC9C2E] h-[70px]'>
                        <button className='cont_wallet-btn sm:px-10 py-2 md:text-xl h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]'>L O G I N</button>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    // as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">


                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-[15px] font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    {/* <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
      showDots={false}
      arrows={false}
      className='absolute -z-20'

    >
      <div className='w-full'>
        <img src={BackgroundImg} alt="" className='w-full h-[700px]' />
      </div>
      <div className='w-full'>
        <img src={MyImg3} alt="" className='w-full h-[700px]' />
      </div>
    </Carousel> */}

  </div>
}

export default Navbar

