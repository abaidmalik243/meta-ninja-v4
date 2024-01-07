import React from "react";
import dots from "../../../images/Dots.png";
import nft from "../../../images/NFT.png";
import Priveleges from "../../../images/Priveleges.png";
import downArrows from "../../../images/downArrows.png";
import leftArrow from "../../../images/backForwardArrow.png";
import rightArrow from "../../../images/forwordArrow.png";
import remote from "../../../images/remote.png";
import twoAvatars from "../../../images/twoAvatars.png";
import Avatar from "../../../images/Avatar.png";
import gameCoin from "../../../images/gameCoin.png";
import lightBars from "../../../images/lightBars.png";
import lightRight from "../../../images/lightRight.png";
import lightLeft from "../../../images/lightLeft.png";
export default function Index() {
  return (
    <>
      <div className=" w-[100%] min-h-[100vh] gradient-shadow-bottom-top">
        <div className="w-[100%] h-[250px] gradient-shadow-bottom relative">
          <img src={dots} alt="" className="absolute right-12 mt-[5rem] " />
          <div className="pt-32 flex flex-col items-center w-full">
            <img src={nft} alt="" className="w-[25vw]" />
            <div className="flex justify-center items-center">
              <img src={leftArrow} alt="" className="w-[10vw]" />
              <img src={Priveleges} alt="" className="w-[40vw]" />
              <img src={rightArrow} alt="" className="w-[10vw]" />
            </div>
          </div>
          <div className="mt-12 flex items-start w-full">

            <img src={lightBars} alt="" className="w-[60px]" />
          <div className="mt-12 flex justify-around items-center w-full ">
            <div className="w-[15%] ">
              <img src={remote} alt="" className="" />
              <p className="text-white text-center mt-3">All future piority testing pass</p>
            </div>
            <div className="w-[15%] ">
              <img src={gameCoin} alt="" className="" />
              <p className="text-white text-center mt-3">Early access to game content</p>
            </div>
            <div className="w-[15%] ">
              <img src={twoAvatars} alt="" className="w-[90%]" />
              <p className="text-white text-center mt-3">Priority pass for Genesis Avatars</p>
            </div>
            <div className="w-[15%] ">
              <img src={Avatar} alt="" className="" />
              <p className="text-white text-center mt-3">Airdrops of in-game tokens and NFTs</p>
            </div>
            </div>
          </div>
        </div>
      </div>
        <div className="text-white h-[250px] gradient-shadow-top"></div>
        <div className="text-white h-[250px] gradient-shadow-bottom relative">
          <div className="absolute top-[-84px]  flex justify-between items-start w-full">
       
          <img src={lightRight} alt="" className="w-[30vw] mt-24"/>
          <img src={downArrows} alt="" className=""/>
          <img src={lightLeft} alt="" className="w-[30vw] h-[179px] mt-12"/>
          </div>
        </div>
        
    </>
  );
}
