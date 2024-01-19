import React from "react";
import GetStartedItem from "./GetStartedItem";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const GetStarted = () => {
  return (
    <motion.div
      key={"modal"}
      style={{
        backgroundImage: ' url("/background.png")',
        objectFit: "cover",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 1, x: "200%" }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className='bg-zinc-200 h-screen relative lg:items-start w-screen flex flex-col lg:flex-row lg:justify-between lg:pl-5 lg:pr-10  border-docP border-[1px] border-opacity-30 rounded-lg  py-12'
    >
      {/* <ul className='circles absolute w-full h-full -z-10'>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
        <li className='rounded-full'></li>
      </ul> */}
      {/* Left SVG with Circles */}
      {/* <div className='absolute top-0 left-0 w-6 h-full bg-blue-500 flex items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <circle cx='12' cy='12' r='6' />
        </svg>
      </div> */}

      <div className='min-w-[100%]  flex flex-col items-center justify-start'>
        <Link
          className='w-full mx-auto flex justify-center'
          href={"/consultation"}
        >
          <GetStartedItem
            description='Get in touch with world class medical specialists from across the globe'
            button='Book a session'
            title='Free Consultation'
          />
        </Link>
        <Link className='w-full mx-auto flex justify-center' href={"/donate"}>
          <GetStartedItem
            description='Your financial contribution will expand our activities and impact more lives '
            button='Donate'
            title='Donate'
          />
        </Link>
        <Link
          className='w-full mx-auto flex justify-center'
          href={"/volunteer"}
        >
          <GetStartedItem
            description='We welcome anyone willing to offer their time, skills or medical facilities'
            button='Become a volunteer'
            title='Volunteer'
          />
        </Link>
        <Link
          className='w-full mx-auto flex justify-center'
          href={"/volunteer"}
        >
          <GetStartedItem
            description='Do you know an indigent patient? Please let us know'
            button='Refer someone'
            title='Refer a patient'
          />
        </Link>
      </div>
      <Link
        href={"/"}
        className='absolute top-5 text-2xl lg:text-3xl right-2 lg:right-5 text-white hover:scale-105 duration-200 '
      >
        <MdClose />
      </Link>
    </motion.div>
  );
};

export default GetStarted;
