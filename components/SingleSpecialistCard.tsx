"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const SingleSpecialistCard = ({ images }: { images: any[] }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: !true,
    fade: !true,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
    useTransform: true,
    touchMove: true,
    // className: "bord rounded-lg px-2",
  };

  return (
    <div className='w-screen  mt-[11vh] h-full'>
      <Slider {...settings}>
        {images.map((img: any, index) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              key={index.toString()}
              className='min-w-[80vw] mb-6 rounded-[10px]   h-[343px] relative'
            >
              {/* <div className='relative w-[298px] h-[293px]'> */}
              <Image src={img.src} alt='docs' fill className='object-cover' />
              {/* </div> */}
              <div className=' absolute text-white translate-x-1/2 right-[50%] bottom-3 mx-auto self-center w-[273px] h-[90px] rounded-[10px] backdrop-blur-[200px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(200px)_brightness(100%)] [background:linear-gradient(180deg,rgba(37,180,248,0.3)_10.48%,rgba(37,180,248,0)_100%)]'>
                <p className='p-3 text-2xl leading-none font-light'>
                  {img.name}
                </p>
                <p className='p-3 text-base relative bottom-3 leading-none font-light'>
                  {img.field}
                </p>
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SingleSpecialistCard;
