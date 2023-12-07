"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function ({ images }) {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: !true,
    fade: true,
  };

  return (
    <div className='w-full h-full'>
      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              key={index.toString()}
              className='w-full h-[90vh] relative'
            >
              <Image
                className='rounded-md object-cover'
                alt='img'
                src={img}
                fill
              />
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
}
