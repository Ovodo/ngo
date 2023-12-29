import CheckWithText from "@/components/CheckWithText";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  return (
    <div className='w-full flex flex-col items-center mb-[20vh] justify-start h-full'>
      <div className='flex w-[90%]  mb-[4vw] mt-[5vw] space-y-2 lg:space-y-0 items-start flex-col lg:flex-row justify-between'>
        <div className='hidden lg:flex flex-col'>
          <Link
            href={"/donate/#donate"}
            className='max-w-[25vw] lg:max-w-[10vw]  mb-[3vw]  bg-docBlue hover:bg-docP hover:scale-110 active:scale-90 duration-200 cursor-pointer px-2 lg:px-7 py-3  shadow-md shadow-slate-700 justify-around rounded-lg text-white   ml-2 lg:ml-16 z-10 flex items-center'
          >
            Donate
            <FaArrowRightLong />
          </Link>
          <p>Become a member of our hospital community?</p>
        </div>
        <div className=' mt-0'>
          <h2 className='text-docBlue   mb-5 flex flex-col justify-start font-semibold '>
            We care
            <span className='text-docBlack  whitespace-nowrap bg-teal-30'>
              About your health
            </span>
          </h2>
          <p>
            Grid for people has donated, add in form need for anonymous if
            desired{" "}
          </p>
        </div>
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
        <div className='w-full lg:w-[50%] mx-auto h-full flex flex-col lg:ml-32 justify-around items-center lg:items-start'>
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
          <CheckWithText
            style=''
            text='I accept all'
            cText='terms and conditions'
          />
          <Link
            href={"/donate/#donate"}
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
    </div>
  );
};

export default Page;
