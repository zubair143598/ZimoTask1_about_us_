import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef, useState } from "react";

const Category = () => {
  const sliderRef = useRef(null);
  

  //for applying to 4 images on large and 1 on small
 

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
    
  };

  return (
    <section
      id="category"
      className="   mt-[120px] sm:mt-[25px]  px-[30px]  flex   uppercase tracking-[2px] flex-col justify-between "
    >
      <div className="flex mt-[20px] justify-between sm-mt-[20px]   px-[20px] sm:px-[10px] ">
        <div>
          <p className=" text-[40px]  sm:text-[20px] ">our Category</p>
        </div>
        <div className="mt-2">
          <button onClick={handlePrevious}>
            <img
              className="w-[20px] sm:w-[15px] sm:h-[30px] sm:mr-[20px] mr-[60px] h-[40px]"
              src="../assistes/left.png"
              alt=""
            />
          </button>
          <button onClick={handleNext}>
            <img
              className="w-[20px] sm:w-[15px] sm:h-[30px] h-[40px]"
              src="../assistes/right.png"
              alt=""
            />
          </button>
        </div>
      </div>

      <Slider className="mt-[90px] sm:mt-[30px] " {...settings} ref={sliderRef}>
        <div>
          <img className=" px-3" src="/assistes/Rectangle-1.png" alt="" />
        </div>
        <div>
          <img className=" px-3" src="/assistes/Rectangle-2.png" alt="" />
        </div>
        <div>
          <img className=" px-3" src="/assistes/Rectangle-3.png" alt="" />
        </div>
        <div>
          <img className=" px-3" src="/assistes/Rectangle-4.png" alt="" />
        </div>
        <div>
          <img className=" px-3" src="/assistes/Rectangle-5.png" alt="" />
        </div>
        <div>
          <img className=" px-3" src="/assistes/Rectangle-6.png" alt="" />
        </div>
        <div>
          <img className=" px-3" src="/assistes/Rectangle-7.png" alt="" />
        </div>
        <div>
          <img className=" px-3" src="/assistes/Rectangle-8.png" alt="" />
        </div>
      </Slider>
      <div className=" text-center sm:text-left sm:mt-[30px] mt-[90px] ">
        <p className=" sm:text-[15px] text-[25px] ">
          one platform for all premium listing
        </p>
        <p className=" mt-[30px] sm:mt-[20px]  sm:text-[17px] text-[25px] ">UNLIMITED POTENTIAL</p>
      </div>
    </section>
  );
};

export default Category;
