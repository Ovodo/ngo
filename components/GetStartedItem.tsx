import React from "react";

const GetStartedItem = ({
  title = "Free consultation",
  description = "connecting doctors to patients, helping people needing procedures",
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className='flex-col w-[90%] hover:bg-amber-300 hover:bg-opacity-20 hover:cursor-pointer duration-150 ease-out lg:hover:-translate-x-5  bg-white lg:w-[90%]  rounded-[16.29px] shadow-[0px_4.41px_1.43px_-1.1px_#00000033] backdrop-blur-[44.06px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.06px)_brightness(100%) p-[1em] mb-5 lg:flex-row justify-between items-start lg:items-center flex'>
      <div className='min-w-[200px] '>
        <h4 className='text-textAsh mb-3 font-semibold'>{title}</h4>
        <p className='mb-3 lg:mb-0 lg:w-[85%] '>{description}</p>
      </div>
      <button className='w-[150px] hover:scale-110 hover:bg-docP duration-300 active:scale-90  text-center justify-center  hidden lg:flex h-max text-white py-2 rounded-[15px] bg-docBlue'>
        Book a session
      </button>
      <button className='w-[100px] hover:scale-110 hover:bg-docP duration-300 active:scale-90 text-center justify-center  lg:hidden flex h-max text-white py-2 rounded-[15px] bg-docBlue'>
        Book
      </button>
    </div>
  );
};

export default GetStartedItem;
