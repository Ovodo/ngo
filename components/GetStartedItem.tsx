import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const GetStartedItem = ({
  title = "Free consultation",
  button,
  description = "connecting doctors to patients, helping people needing procedures",
}: {
  title: string;
  button: string;
  description?: string;
}) => {
  return (
    <div className='flex-col w-[90%] hover:bg-amber-300 hover:bg-opacity-20 hover:cursor-pointer duration-150 ease-out lg:hover:-translate-x-5  lg:w-[90%]  rounded-[16.29px] shadow-[0px_4.41px_1.43px_-1.1px_#00000033] backdrop-blur-[44.06px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.06px)_brightness(100%)] p-[1em] mb-5 lg:flex-row justify-between items-start lg:items-center flex'>
      <div className='min-w-[200px] '>
        <h4 className='text-white mb-3 font-semibold'>{title}</h4>
        <p className='mb-3 lg:mb-0 text-white lg:w-[85%] '>{description}</p>
      </div>

      {/* <div className='flex justify-center min-w-[200px] '> */}
      <Link href={"/?started=true"} className=' '>
        <div className='bg-docBlue hover:bg-docP w-[290px] py-3 lg:h-[69px] font-medium text-base hover:scale-110 active:scale-90 duration-200 cursor-pointer px-7 shadow-sm shadow-slate-700 justify-center rounded-[13px] text-white flex items-center'>
          {button}
          <FaArrowRightLong style={{ marginLeft: 10 }} />
        </div>
      </Link>
      {/* </div> */}
    </div>
  );
};

export default GetStartedItem;
