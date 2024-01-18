import React from "react";
import GetStartedItem from "./GetStartedItem";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const Donate = () => {
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
      className='relative  w-screen h-screen   flex flex-col  items-center justify-center space-y-16 lg:pl-5 lg:pr-10  border-docP border-[1px] border-opacity-30 rounded-lg'
    >
      <div className='inline-flex flex-col  items-center gap-[10px] '>
        <div className=' w-[359px] h-[56px] mt-[-1.00px] text-center self-center  font-bold text-white text-3xl lg:text-[48px] tracking-[0] leading-[52.3px] whitespace-nowrap'>
          Bank Transfer
        </div>
        <p className=' lg:w-[686px] w-[90vw]  font-normal text-white text-lg lg:text-[20px] text-center tracking-[0] leading-[normal]'>
          Kindly make your donations to the account details provided above.
          Thank you for your donation!
        </p>
      </div>
      <div className='w-[799px] scale-50 lg:scale-100 h-[210px]'>
        <p className='w-[799px] font-normal text-white text-[40px] text-center tracking-[0] leading-[70px]'>
          <span className='font-semibold'>Bank Name</span>
          <span className='font-normal'>
            : Access Bank Nigeria
            <br />
          </span>
          <span className='font-semibold'>Account Name</span>
          <span className='font-normal'>
            : Dona Life Foundation
            <br />
          </span>
          <span className='font-semibold'>Account Number</span>
          <span className='font-normal'>: 0949483756</span>
        </p>
      </div>

      <Link
        href={"/donate"}
        className='absolute -top-7 hover:scale-110 duration-75 text-3xl right-5 text-white'
      >
        <MdClose />
      </Link>
    </motion.div>
  );
};

export default Donate;
