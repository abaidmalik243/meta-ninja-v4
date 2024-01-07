import React from "react";
import Previleges from "../Previleges";
import yellowTopGradient from "../../../images/yellowTopGradient.png";
import rightZigZagLine from "../../../images/rightZigZagLine.png";
import backForwardArrow from "../../../images/backForwardArrow.png";
import forwardArrow from "../../../images/forwordArrow.png";
import leftZigZagLine from "../../../images/leftZigZagLine.png";
import leftArrowGroup from "../../../images/leftArrowGroup.png";
import rightArrowGroup from "../../../images/rightArrowGroup.png";
import Card from "../../../images/Card.png";
import downArrows from "../../../images/downArrows.png";
import p1 from "../../../images/p1.png";
import p2 from "../../../images/p2.png";
import p3 from "../../../images/p3.png";
export default function Index() {
  return (
    <>
      <div className=" w-[100%] min-h-[100vh] gradient-shadow-bottom-top">
        <div className="w-[100%] h-[250px] gradient-shadow-bottom relative">
          {/* <img src={yellowTopGradient} alt="" className="w-[100%]" /> */}
          <div className="flex justify-between items-center absolute top-0 w-[100%]">
            <img src={leftZigZagLine} alt="" className="w-[20vw]" />
            <img src={backForwardArrow} alt="" className="" />
            <h1 className="text-6xl font-[800] text-[#ffbf00]">Race</h1>
            <img src={forwardArrow} alt="" className="" />
            <img src={rightZigZagLine} alt="" className="w-[20vw]" />
          </div>
        </div>

        {/* Cards */}

        <div className="flex justify-between w-[80%] mx-auto mt-12 items-center">
          {/* <img
            src={leftArrowGroup}
            alt=""
            className=" w-[10vw] md:w-[6vw] cursor-pointer"
          /> */}
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p1} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p2} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2  w-[90%]">
              <img src={p3} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2  w-[90%]">
              <img src={p3} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>

          {/* <img
            src={rightArrowGroup}
            alt=""
            className=" w-[10vw] md:w-[6vw] cursor-pointer"
          /> */}
        </div>
        <div className="flex justify-between w-[80%] mx-auto mt-24 items-center">
          {/* <img
            src={leftArrowGroup}
            alt=""
            className=" w-[10vw] md:w-[6vw] cursor-pointer"
          /> */}
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p1} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p2} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2  w-[90%]">
              <img src={p3} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2  w-[90%]">
              <img src={p3} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>

          {/* <img
            src={rightArrowGroup}
            alt=""
            className=" w-[10vw] md:w-[6vw] cursor-pointer"
          /> */}
        </div>
        <div className="flex justify-between w-[80%] mx-auto mt-24 items-center">
          {/* <img
            src={leftArrowGroup}
            alt=""
            className=" w-[10vw] md:w-[6vw] cursor-pointer"
          /> */}
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p1} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p2} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2  w-[90%]">
              <img src={p3} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[16vw] " />
            <div className="absolute top-2  w-[90%]">
              <img src={p3} alt="" className="w-full" />
              <p className="text-center text-white top-[14vw] w-full absolute">
                NAME
              </p>
              <h1 className="text-white bg-[#ffbf00] text-[12px] p-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae,
              </h1>
            </div>
          </div>

          {/* <img
            src={rightArrowGroup}
            alt=""
            className=" w-[10vw] md:w-[6vw] cursor-pointer"
          /> */}
        </div>
        <div className=" flex justify-center mt-12">
          <div className="cont_wallet-btn-parent bg-[#EC9C2E] h-[70px]">
            <button className="cont_wallet-btn sm:px-10 py-2 md:text-xl h-[70px] text-[10px] font-medium text-black w-full bg-[#ffc400]">
              LOAD MORE
            </button>
          </div>
        </div>
        <div className="w-[100%] h-[350px] gradient-shadow-top relative">
          {/* <div className="relative mt-12 gradient-shadow-top-bottom border-2"> */}
          {/* <img src={yellowTopGradient} alt="" /> */}
          <div className="w-[100%] mx-auto flex justify-center  absolute bottom-[-90px] gap-48 z-10">
            <img src={downArrows} alt="" />
            <img src={downArrows} alt="" />
            <img src={downArrows} alt="" />
          </div>
          {/* </div> */}
        </div>
      <Previleges />
      </div>
    </>
  );
}
