import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='h-[400px] sm:h-[30vh] lg:h-[450px] justify-between flex-col sm:flex-row py-[40px] lg:py-[100px] px-[20px] lg:px-[125px] text-white w-full bg-docBlue flex'>
      <div className='h-full sm:w-[200px] mb-10 flex flex-col justify-start'>
        <h4 className='font-normal lg:whitespace-nowrap  mb-10 text-[32px] '>
          Dona life Foundation
        </h4>
        <div className='font-light space-y-3'>
          <p className='font-normal'>Contact</p>
          <p className='text-sm'>08061129226</p>
          <p className='text-sm'>donalifefoundation@gmail.com</p>
        </div>
      </div>
      <div className='flex-col hidden sm:flex font-light  h-full justify-start sm:justify-between'>
        <Link href={"/about"}>About us</Link>
        <Link href={"/media"}>Media</Link>
        <Link href={"/volunteer"}>Volunteer</Link>
        <Link href={"/consultation"}>Free Consultation</Link>
      </div>
      <div className='flex flex-col font-light sm:w-[168px]  h-full justify-start space-y-3 md:space-y-10'>
        <Link href={"/about"}>Privacy Policy</Link>
        <Link href={"/about"}>Subscribe to newsletter</Link>
      </div>
      <div className='flex mt-[40px] sm:mt-0 sm:flex-col font-light  h-full justify-between'>
        <p>Follow us</p>
        <Link href={"/about"}>
          <Image alt='icons' width={38} height={38} src={"/icons/face.svg"} />
        </Link>
        <Link href={"/about"}>
          <Image alt='icons' width={38} height={38} src={"/icons/tweet.svg"} />
        </Link>
        <Link href={"/about"}>
          <Image alt='icons' width={38} height={38} src={"/icons/inst.svg"} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
