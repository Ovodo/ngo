import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
const font = Montserrat({ subsets: ["latin"] });

const HospitalCard = ({
  name,
  src,
  field,
  link,
}: {
  name: string;
  src: string;
  field: string;
  link: string;
}) => {
  return (
    <div className='mx-5' style={font.style}>
      <div className='min-h-[350px] relative min-w-[350px]'>
        <Image src={src} className='object-cover' fill alt='hospital' />
      </div>

      <div className='min-w-[350px] flex flex-col items-start space-y-5 h-auto p-[25px]'>
        <div className='flex w-[350px]   mx-auto items-center justify-between'>
          <h6 className='font-bold  text-[#fc724d] text-[14px] tracking-[0.20px] leading-[24px] whitespace-nowrap'>
            {name}
          </h6>
          <div className='inline-flex items-center gap-[5px] p-[5px] bg-darkBlue  rounded-[20px] overflow-hidden'>
            <Image alt='star' width={16} height={16} src={"/icons/star.svg"} />
            <p style={font.style} className='text-xs font-semibold text-white'>
              4.9
            </p>
          </div>
        </div>
        <p className='text-base font-bold text-black'>{field}</p>
        <p className='text-sm font-normal text-[#727272]'>
          We focus ongiving you the best procedures at teh best price
        </p>
        <Link
          href={link}
          className='border-2 gap-[10px] text-docBlue inline-flex rounded-[37px] border-docBlue py-[10px] px-[20px] '
        >
          <p className='font-bold text-sm'>Learn More</p>
          <Image src={"/icons/arr.svg"} width={9.14} height={16} alt='arrow' />
        </Link>
      </div>
    </div>
  );
};

export default HospitalCard;
