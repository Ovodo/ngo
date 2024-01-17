import React from "react";
import GetStartedItem from "./GetStartedItem";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const GetStarted = () => {
  return (
    <motion.div
      key={"modal"}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 1, x: "200%" }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className='bg-zinc-200 area relative lg:items-start w-[95vw] flex flex-col lg:flex-row lg:justify-between lg:pl-5 lg:pr-10  border-docP border-[1px] border-opacity-30 rounded-lg  py-10'
    >
      <ul className='circles absolute w-full h-full -z-10'>
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
      </ul>
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
          <GetStartedItem title='Free Consultation' />
        </Link>
        <Link className='w-full mx-auto flex justify-center' href={"/donate"}>
          <GetStartedItem title='Donate' />
        </Link>
        <Link
          className='w-full mx-auto flex justify-center'
          href={"/volunteer"}
        >
          <GetStartedItem title='Volunteer' />
        </Link>
        <Link
          className='w-full mx-auto flex justify-center'
          href={"/volunteer"}
        >
          <GetStartedItem title='Refer a patient' />
        </Link>
      </div>

      {/* Right SVG with Circles */}
      {/* <div className='absolute top-0 right-0 w-6 h-full bg-blue-500 flex items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <circle cx='12' cy='12' r='6' />
        </svg>
      </div> */}

      <Link href={"/"} className='absolute top-5 text-3xl right-5 text-docP '>
        <MdClose />
      </Link>
    </motion.div>
  );
};

export default GetStarted;
