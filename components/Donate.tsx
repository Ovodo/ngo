import React from "react";
import GetStartedItem from "./GetStartedItem";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const Donate = () => {
  return (
    <motion.div
      key={"modal"}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 1, x: "200%" }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className='bg-amber-100 area relative lg:items-start w-[90vw] h-[60vh] lg:w-[50vw]  flex flex-col lg:flex-row lg:justify-between lg:pl-5 lg:pr-10  border-docP border-[1px] border-opacity-30 rounded-lg  py-10'
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
        <h3 className='text-black mb-5  font-semibold'>Bank Transfer</h3>
        <p className='break-all  whitespace-pre-wrap max-w-[500px] tracking-wide mb-3 text-black font-medium'>
          Access Bank
        </p>
        <p className='break-all  whitespace-pre-wrap max-w-[500px] tracking-wide mb-3 text-black font-medium'>
          Dona Life Foundation
        </p>
        <p className='break-all  whitespace-pre-wrap max-w-[500px] tracking-wide mb-3 text-black font-medium'>
          0949483756
        </p>
      </div>
      <Link
        href={"/donate"}
        className='absolute top-5 text-3xl right-5 text-black'
      >
        <MdClose />
      </Link>
    </motion.div>
  );
};

export default Donate;
