"use client";
import MediaCard from "@/components/MediaCard";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const med = [
  { name: "Outreach", desc: "General Vaccination", src: "/vac.jpg" },
  {
    name: "Outreach",
    desc: "Fitness Training",
    src: "/fit.jpg",
  },
  {
    name: "Outreach",
    desc: "Fitness Training",
    src: "/fit2.mp4",
  },
  {
    name: "Outreach",
    desc: "Donacare Team",
    src: "/team.jpg",
  },
  {
    name: "Outreach",
    desc: "Donacare Team",
    src: "/team2.jpg",
  },
  { name: "Outreach", desc: "Visit to LASUTH", src: "/two_men.jpg" },
  { name: "Outreach", desc: "Visit to LASUTH", src: "/three_doc.jpg" },
  { name: "Outreach", desc: "Visit to LASUTH ", src: "/office.mp4" },
];

const Page = () => {
  const [showImage, setShowImage] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    desc: "",
    src: "",
  });
  return (
    <div className='relative  flex flex-col overflow-x-hidden items-center w-full h-full'>
      <AnimatePresence mode='wait'>
        {showImage && (
          <motion.div
            key={"modal"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 1, x: "200%" }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            onClick={() => setShowImage(false)}
            className='fixed top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center bg-gray-300'
            // className='absolute bg-gray-300 z-20 flex items-center  justify-center w-screen h-screen lg:h-full'
          >
            <div className='flex flex-col w-max  items-start'>
              <div className='min-w-[80vw]  lg:min-w-[70vw] mb-[10px] min-h-[60vh] lg:min-h-[80vh] relative'>
                {details.src.includes("mp4") ? (
                  <video className='w-full h-full ' controls preload='none'>
                    <source src={`/outreach${details.src}`} type='video/mp4' />
                    Not supported
                  </video>
                ) : (
                  <Image
                    src={`/outreach${details.src}`}
                    fill
                    className='object-cover hover:cursor-pointer'
                    alt='image'
                  />
                )}
              </div>
              <h5 className='font-bold mb-[10px] text-[#3f3f3f] text-lg lg:text-[24px] tracking-[0] leading-[normal]'>
                {details.name}
              </h5>
              <p className='lg:w-[348px] w-[300px]  font-medium text-[#3f3f3f] text-base lg:text-[20px] tracking-[0] leading-[normal]'>
                {details.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='ml-[20px] lg:ml-[100px] lg:self-start mt-[50px] lg:w-[639px]'>
        <h4 className='text-[#404040] whitespace-nowrap font-semibold text-[32px] lg:text-[64px] leading-[69.76px]'>
          See what we have done
        </h4>
        <p className='text-base lg:text-[20px] leading-[30px]'>
          In line with our vision and with your support, we accomplished these
        </p>
      </div>
      <div className='grid my-[50px] px-[2vw] lg:px-[70px] grid-cols-1 lg:grid-cols-3 gap-[72px]'>
        {med.map((item, index: number) => (
          <div
            onClick={() => {
              setShowImage(!showImage);
              setDetails({
                name: item.name,
                desc: item.desc,
                src: item.src,
              });
            }}
            key={index.toString()}
          >
            <MediaCard name={item.name} desc={item.desc} src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
