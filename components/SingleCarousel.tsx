"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const SingleCarousel = ({ images }: { images: string[] }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: !true,
  };

  return (
    <div className='w-[90dvw] h-[40vh]'>
      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              key={index.toString()}
              className='w-full h-[40vh] relative'
            >
              <Image
                className='rounded-md px-[2vw] object-cover'
                alt='img'
                src={img}
                priority
                fill
              />
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SingleCarousel;
