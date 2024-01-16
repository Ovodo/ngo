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
          Lets give to them
        </h2>
        <p className='font-medium text-sm relative bottom-[1vh] lg:bottom-[2vh] text-[#606060] lg:text-lg'>
          Dona Care Foundation supports indigent patients in critical need of
          medical procedures such as Dialysis and Surgeries
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
            Donate
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
              title='Description (Optional)'
              holder='Brief Description'
            />
          </div>
          <CheckWithText
            style=''
            text='I accept all'
            cText='terms and conditions'
          />
          <Link
            href={"?donate=true"}
            className='max-w-[25vw]  lg:max-w-[10vw]   bg-docBlue hover:bg-docP hover:scale-110 active:scale-90 duration-200 cursor-pointer px-2 lg:px-7 py-3  shadow-md shadow-slate-700 justify-around rounded-lg text-white   hover:ml-3  z-10 flex items-center'
          >
            Donate
            <FaArrowRightLong style={{ marginLeft: 10 }} />
          </Link>
          <CheckWithText style='' text='Donate as' cText='annonymous' />
          <div className='w-[232px] h-[48px] '>
            <p className='w-[232px] font-medium text-transparent text-[16px] tracking-[0] leading-[normal]'>
              <span className='text-[#3f3f3f]'>Don’t want to reveal your</span>
              <span className='text-[#2086fb]'> identity?&nbsp;&nbsp;</span>
              <span className='text-black'>tick the box above</span>
            </p>
          </div>
        </div>
      </div>
      <div className='mt-20 w-full'>
        <div className='rounded-[20px] h-[459px] relative mx-auto  py-10 bg-white px-5 max-w-[95%] lg:min-w-[758px] '>
          <h3 className='font-bold text-2xl  mx-auto w-full text-center text-docBlack'>
            Donors
          </h3>
          {/* <p className='text-base font-medium absolute bottom-4 right-8 text-[#3f3f3f]'>
            See More
          </p> */}
          <div className='grid rounded-full text-docAsh text-sm mt-[30px] font-medium py- px-4 grid-cols-[1.5fr,1fr,1fr,1fr]'>
            <p className='w-full text-center'>Name</p>
            <p className='w-full text-center'>Amount</p>
            <p className='w-full text-center'>Date</p>
            <p className='w-full text-center'>Approval</p>
          </div>
          {donors.map((item, index) => {
            return (
              <div
                key={index.toString()}
                className='grid rounded-[30px] text-xs lg:text-sm text-docP font-medium py-5 px-4 bg-white shadow-[14px_17px_40px_4px_#7090b014] my-4 grid-cols-[1.5fr,1fr,1fr,1fr]'
              >
                <p className='w-full text-center'>{item.name}</p>
                <p className='w-full text-center'>{item.amount}</p>
                <p className='w-full text-center'>{item.date}</p>
                <div className='flex text-white  items-center justify-center'>
                  <div className='rounded-full absolute  bg-green-600 w-[20px] h-[20px]'></div>

                  <i className='z-10'>
                    <TiTick />
                  </i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
