"use client";

import CheckWithText from "@/components/CheckWithText";
import Donate from "@/components/Donate";
import DonationsCard from "@/components/DonationsCard";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Input from "@/components/Input";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const donors = [
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
];

const Page = () => {
  const donate = useSearchParams().get("donate");

  return (
    <div className='w-full flex flex-col items-center mb-[20vh] justify-start h-full'>
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
      <div className='h-[850px] flex w-[90%] '>
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
        <div className='w-full lg:w-[50%] relative mx-auto h-full flex flex-col lg:ml-32 justify-around items-center lg:items-start'>
          <AnimatePresence mode='wait'>
            {donate && (
              <div className='absolute z-20  top-[2%] left-[50%] -translate-x-1/2'>
                <Donate />
              </div>
            )}
          </AnimatePresence>

          <h5
            id='donate'
            className='text-2xl font-medium text-[#3f3f3f] text-[38.7px] tracking-[0] leading-[normal] self-center'
          >
            Volunteer
          </h5>
          <div className='flex flex-col lg:flex-row '>
            <Input
              width='w-[298px] mb-10 lg:mb-0 lg:mr-20'
              holder='Your First Name'
              title='First Name'
            />
            <Input
              width='w-[298px]'
              holder='Your Last Name'
              title='Last Name'
            />
          </div>
          <div className='self-start w-full'>
            <Input
              width='w-[298px] lg:w-[44vw] flex self-start'
              title='Email Address'
              holder='Enter your email address'
            />
          </div>
          <div className='self-start w-full'>
            <Input
              width='w-[298px] lg:w-[44vw] flex self-start'
              title='Phone'
              holder='Enter phone number'
            />
          </div>
          <CheckWithText
            style=''
            text='I accept all'
            cText='terms and conditions'
          />
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
