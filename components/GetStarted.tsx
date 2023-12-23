import React from "react";
import GetStartedItem from "./GetStartedItem";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

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
      <div className='px-5 '>
        <h3 className='text-docBlue mb-1 animate-pulse font-semibold'>
          Get Started
        </h3>
        <p className='break-all  whitespace-pre-wrap max-w-[500px] tracking-wide mb-3 text-docBlue'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ullam,
          explicabo voluptatem fugiat laboriosam delectus magnam iure error quo
          impedit eligendi dolores voluptatibus dicta consequuntur ducimus.
          Provident blanditiis odit quas?
        </p>
      </div>
      <div className='min-w-[60%]  flex flex-col items-center justify-start'>
        <GetStartedItem title='Free Consultation' />
        <GetStartedItem title='Donate' />
        <GetStartedItem title='Volunteer' />
        <GetStartedItem title='Refer a patient' />
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
