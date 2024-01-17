import ContactDetails from "@/components/ContactDetails";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  return (
    <div className='flex w-full lg:px-[99px] flex-col h-[120vh] px-[10px] lg:h-[180vh] justify-around'>
      <div className='lg:w-[639px]'>
        <h4 className='text-[#404040] font-semibold text-[32px] lg:text-[64px] leading-[69.76px]'>
          Let us get in touch
        </h4>
        <p className=' text-[20px] leading-[30px]'>
          Need to speak with us, reach us from anywhere around the world
        </p>
      </div>
      <div className='w-[98.5dvw] self-center relative rigt-[99px] h-[400px]   lg:h-[660px] bg-[#eaf1f9]'>
        <div className='w-[80%] lg:w-[1243px]  mx-auto relative h-[400px] lg:h-[660px] '>
          <Image src={"/map.png"} fill className='object-contain' alt='map' />
        </div>
      </div>
      <div className='w-full  justify-between items-center flex flex-col lg:flex-row'>
        <div className=''>
          <ContactDetails
            title='Email: info@donalifefoundation.org'
            imag='@.svg'
          />
          <ContactDetails
            title='Phone Number: +234 - (0)8012345678'
            imag='phone.svg'
          />
          <ContactDetails title='Address: 1 Road Street Lagos' imag='add.svg' />
        </div>
        <div className='flex mt-10  lg:mt-0 flex-col space-y-14 items-start lg:items-end'>
          <Link href={"/?started=true"} className=' '>
            <div className=' bg-docBlue hover:bg-docP hover:scale-110 active:scale-90 duration-200 cursor-pointer px-7 py-3  shadow-md shadow-slate-700 justify-around space-x-5 rounded-lg text-white z-10 flex items-center'>
              Get Started
              <FaArrowRightLong />
            </div>
          </Link>
          <p className=' font-medium mt-5 text-[#3f3f3f] text-base lg:text-[20px] tracking-[0] leading-[normal]'>
            Explore opportunities available at Dona Life Foundation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
