import React, { useState } from "react";
import list from "../../images/listStyle.png";
import video from "../../images/video.png";
import forwordArrow from "../../images/forwordArrow.png";
import leftArrowGroup from "../../images/leftArrowGroup.png";
import rightArrowGroup from "../../images/rightArrowGroup.png";
import videoCardLeft from "../../images/videoCardLeft.png";
import videoCard from "../../images/videoCard.png";
import character1 from "../../images/videoCardCharacter1.png";
import character2 from "../../images/videoCardCharacter2.png";
import rightZigZag from "../../images/rightZigZagLine.png";
import yellowPiller from "../../images/yellowPiller.png";
import lightBars from "../../images/lightBars.png";
import game from "../../images/gameText.png";
import story from "../../images/storyText.png";
import storyCharacter from "../../images/storyCharacter.png";
import gameStoriesCharacter from "../../images/gameStoriesCharacter2.png";
import downArrows from "../../images/downArrows.png";
import dots from "../../images/Dots.png";
import yellowGradient from "../../images/yellowGradient.png";

export default function Index() {
  const slides = [
    { src: character1, alt: "Character 1" },
    { src: character2, alt: "Character 2" },
    { src: videoCardLeft, alt: "Character 3"},
    { src: videoCard, alt: "Character 4" }, // Added third character
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + slides.length) % slides.length);
  };

  // Determine the index for the second slide to display
  const secondSlideIndex = (currentSlide + 1) % slides.length;

  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <>
      <div className="bg-[black] bg-opacity-90 bg-net relative">
        <div className="py-[12px] flex items-center">
          <img src={list} alt="" className="z-1 w-[20vw] sm:w-[10vw]" />
          <img src={video} alt="" className="pt-6 ml-3 w-[30vw] sm:w-[20vw] md:mb-2 lg:mb-0 " />
          <img src={forwordArrow} alt="" className="pt-6 ml-3 w-[20vw] sm:w-[10vw]" />
        </div>

        {/* SLIDER */}
        <div className="flex items-center justify-between w-[95%] mx-auto sm:mt-12">
          <img
            src={leftArrowGroup}
            alt=""
            className="cursor-pointer w-[10vw] lg:w-[6vw]"
            onClick={prevSlide}
          />
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="w-[30vw] sm:h-[50vh] md:h-[60vh]"
          />
          <img
            src={slides[secondSlideIndex].src}
            alt={slides[secondSlideIndex].alt}
            className=" w-[30vw] sm:h-[50vh] md:h-[60vh]"
          />

          <img
            src={rightArrowGroup}
            alt=""
            className="cursor-pointer w-[10vw] lg:w-[6vw]"
            onClick={nextSlide}
          />
        </div>

        <img
          src={rightZigZag}
          alt=""
          className=" absolute right-0 mt-12 w-[30vw] lg:w-[18vw]"
        />

        <div className="flex items-start justify-between w-full relative">
          <div className="flex ">
            <div>
              <img src={lightBars} alt="" className=" mt-48 h-[200px]" />
              <img src={game} alt="" className="h-[63vh] w-[100px]" />
            </div>
            <img src={story} alt="" className="mt-48 h-[60vh] w-[100px] ml-6" />
            <img
              src={yellowPiller}
              alt=""
              className="absolute left-[18.2vw] mt-3 w-[200px] h-[122vh] mx-6 z-2"
            />

            <img
              src={storyCharacter}
              alt=""
              className="absolute z-4 left-[15vw] bottom-0 h-[87vh] w-[24vw] z-2"
            />
            <img
              src={downArrows}
              alt=""
              className="h-[200px] absolute left-[30vw] mt-36 "
            />
          </div>
          <div className="ml-48 w-[70%] h-[100vh] mt-auto bg-[black] border-t-[1px] border-[#ffbf00] relativ">
            <img src={dots} alt="" className="absolute right-3 mt-3" />
            <img
              src={gameStoriesCharacter}
              alt=""
              className="h-[99.5vh] float-right"
            />
          </div>

          <span className=" absolute right-0 bottom-60 w-[50%]">
            <div className="bg-[yellow] relative leading-none p-1  ">
              <span className="font-[500] md:text-[14px] text-[10px]">
                THE BEST GAMING EXPERIENCE,THE BEST GAMING EXPERIENCE,THE BEST
                GAMING EXPERIENCE.
              </span>
              <span
                className="text-[20px] font-[800] mx-1 cursor-pointer"
                onClick={handleButtonClick}
              >
                +
              </span>
            </div>
            {isTextVisible && (
              <p className="text-white absolute">
                This is the additional text that appears when you click the
                'Read More' button.
              </p>
            )}
          </span>
          <img src={yellowGradient} alt="" className="absolute bottom-0" />
        </div>
      </div>
    </>
  );
}
