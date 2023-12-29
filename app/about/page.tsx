import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  return (
    <div className='w-full pt-[7vw] lg:py-[11vw]'>
      <div className='h-[850px]  flex justify-between  mx-auto w-[90%] '>
        <div className='w-full  lg:w-[50%] h-full flex flex-col justify-start items-center lg:items-start'>
          <h5 className=' font-semibold text-[#3f3f3f] text-[64px] tracking-[0] leading-[69.8px] whitespace-nowrap'>
            About us
          </h5>
          <div className='lg:w-[631px] mt-10 lg:mt-5  h-[768px]'>
            <p className=' lg:w-[631px]  font-medium text-center lg:text-left text-[#606060] text-[20px] lg:text-[32px] tracking-[0] leading-[normal]'>
              We are a group of compassionate humans that care about people with
              critical health needs and are challenged with finance.
              <br />
              <br />
              We have seen painful soliciting of funds from Elder Statesmen and
              Celebrities in Nigeria when they fall into health challenges
              requiring Surgeries. We think that there are many more persons in
              this very difficult position that direly need help but do not have
              a voice to ask for it.
              <br />
              <br />
              We are their voice, and we implore you to heed our cry - their
              cries.
            </p>
          </div>
        </div>
        <div className='w-[40%] hidden lg:flex rounded-tl-2xl relative rounded-bl-2xl  h-[850px] bg-docBlue'>
          <div className='w-[910px]  absolute right-0 bottom-0 h-[975px]'>
            <Image
              fill
              className='object-cover'
              alt='Medic looking tablet'
              src='/media/girl.png'
            />
          </div>
        </div>
      </div>
      <div className='hidden lg:flex mx-auto w-[90%]  mt-20 items-start  flex-col'>
        <Link
          href={"/donate"}
          className='max-w-[25vw] lg:max-w-[10vw]  mb-[3vw]  bg-docBlue hover:bg-docP hover:scale-110 active:scale-90 duration-200 cursor-pointer px-2 lg:px-7 py-3  shadow-md shadow-slate-700 justify-around rounded-lg text-white   z-10 flex items-center'
        >
          Donate
          <FaArrowRightLong />
        </Link>
        <p>Become a member of our hospital community?</p>
      </div>
    </div>
  );
};

export default Page;
