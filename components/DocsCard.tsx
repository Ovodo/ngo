"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const DocsCard = ({ images }: { images: any[] }) => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 4000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: !true,
    fade: !true,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
    useTransform: true,
    touchMove: true,
  };

  return (
    <div className='w-screen h-full'>
      <Slider {...settings}>
        {images.map((img: any, index) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              key={index.toString()}
              className='w-full bord h-[90vh] relative'
            >
              <div className='relative w-[90%]  lg:w-[378px] mb-2'>
                <div className='w-[115px] h-[28px] flex  items-center px-5   bg-[#ececec] rounded-[13.23px]'>
                  <div className='bg-docBlue w-[7.8px] mr-2 h-[7.8px] rounded-full'></div>
                  <p className='text-xs'>Availiable</p>
                </div>
              </div>
              <div className='relative w-[90%]  lg:w-[378px]  flex justify-center h-[249px] top-0 left-0 bg-[#2ca3fa] rounded-[26.06px]'>
                <div className='absolute bottom-0 w-[298px] h-[293px]'>
                  <Image
                    src={`/docs/${img.src}.png`}
                    alt='docs'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <p className='p-3 text-3xl leading-none text-[#3f3f3f] font-medium'>
                {img.name}
              </p>
              <p className='p-3 text-2xl relative bottom-3 leading-none text-[#767676] font-medium'>
                {img.field}
              </p>
              <div className='border border-patientBlue flex items-center justify-center min-w-[332.25px] min-h-[65.14px] rounded-2xl'>
                <p className=' font-medium text-center text-[#1a1b1d]'>
                  Book an Appointment
                </p>
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DocsCard;
