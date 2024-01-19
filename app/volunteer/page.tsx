"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  return (
    <div className='w-full flex   flex-col items-center mb-[20vh] justify-start h-full'>
      <div className='flex w-[90%]  mb-[4vw] mt-[5vw] items-start  flex-col'>
        <h2 className='text-docBlue    flex flex-col justify-start font-semibold '>
          We care
        </h2>
        <h2 className='text-docBlack  relative bottom-[1vh] lg:bottom-[2vh] font-semibold whitespace-nowrap bg-teal-30'>
          Lets show it
        </h2>
        <p className='font-medium text-sm relative bottom-[1vh] lg:bottom-[2vh] text-[#606060] lg:text-lg'>
          Dona Care Foundation welcomes medical specialist who are willing to
          donate their skills and time to peform surgeries
        </p>
      </div>
      <div className=' h-[450px]  lg:h-[850px] flex w-[90%] '>
        <div className='w-[40%] hidden lg:flex rounded-tl-2xl relative rounded-bl-2xl  h-full bg-docBlue'>
          <div className='w-[715px] absolute bottom-0 left-0 h-[881px]'>
            <Image
              fill
              className=''
              alt='Medic looking tablet'
              src='/media/medic.png'
            />
          </div>
        </div>
        <div className='w-full lg:w-[50%] relative mx-auto h-[100%] flex flex-col lg:ml-32 justify-around items-center'>
          <h5
            id='donate'
            className='text-2xl font-medium text-[#3f3f3f] text-[38.7px] tracking-[0] leading-[normal] self-center'
          >
            Volunteer
          </h5>
          <div className='space-y-5'>
            <p className='font-medium text-sm text-[#606060] lg:text-lg'>
              Want to volunteer your services or hospital??
            </p>
            <p className='font-medium text-sm text-[#606060] lg:text-lg'>
              Click the button below to fill in a quick form.
            </p>
          </div>

          <Link
            href={"?donate=true"}
            className='max-w-[25vw]  lg:max-w-[15vw]   bg-docBlue hover:bg-docP hover:scale-110 active:scale-90 duration-200 cursor-pointer px-2 lg:px-7 py-3  shadow-md shadow-slate-700 justify-around rounded-lg text-white   hover:ml-3  z-10 flex items-center'
          >
            Volunteer
            <FaArrowRightLong style={{ marginLeft: 10 }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
