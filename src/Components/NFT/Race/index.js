import React from "react";
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
      <div className="bg-[black] bg-opacity-90 w-[100%] bg-net min-h-[100vh]">
        <div className="w-[100%] relative">
          <img src={yellowTopGradient} alt="" className="w-[100%]" />
          <div className="flex justify-between items-center absolute top-0 w-[100%]">
            <img src={leftZigZagLine} alt="" className="w-[20vw]" />
            <img src={backForwardArrow} alt="" className="" />
            <h1 className="text-6xl font-[800] text-[#ffbf00]">Race</h1>
            <img src={forwardArrow} alt="" className="" />
            <img src={rightZigZagLine} alt="" className="w-[20vw]" />
          </div>
        </div>

        {/* Cards */}

        <div className="flex justify-between w-[95%] mx-auto mt-12 items-center">
          <img
            src={leftArrowGroup}
            alt=""
            className=" w-[10vw] lg:w-[6vw] cursor-pointer"
          />
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[20vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p1} alt="" />
              <p classNamemt-12=" text-white">NAME</p>
              <h1 className=" text-white bg-[#ffbf00] text-[12px] p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae, amet sequi similique nam autem
                necessitatibus velit nesciunt aliquam id debitis quod eligendi?
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[20vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p2} alt="" />
              <p classNamemt-12="text-white">NAME</p>
              <h1 className=" text-white bg-[#ffbf00] text-[12px] p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae, amet sequi similique nam autem
                necessitatibus velit nesciunt aliquam id debitis quod eligendi?
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center relative ">
            <img src={Card} alt="" className="w-[20vw] " />
            <div className="absolute top-2 w-[90%]">
              <img src={p3} alt="" />
              <p className="mt-12 text-white">NAME</p>
              <h1 className=" text-white bg-[#ffbf00] text-[12px] p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                facilis eveniet, molestiae quae, amet sequi similique nam autem
                necessitatibus velit nesciunt aliquam id debitis quod eligendi?
              </h1>
            </div>
          </div>

          <img
            src={rightArrowGroup}
            alt=""
            className=" w-[10vw] lg:w-[6vw] cursor-pointer"
          />
        </div>
        <div className="w-[65%] flex justify-between mx-auto">
          <img src={downArrows} alt="" />
          <img src={downArrows} alt="" />
          <img src={downArrows} alt="" />
        </div>
      </div>
    </>
  );
}
