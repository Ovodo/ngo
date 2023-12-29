import MediaCard from "@/components/MediaCard";
import React from "react";

const med = [1, 2, 3, 4, 5, 6];

const Page = () => {
  return (
    <div className='relative flex flex-col items-center w-full h-full'>
      <div className='ml-[20px] lg:ml-[100px] mt-[50px] lg:w-[639px]'>
        <h4 className='text-[#404040] whitespace-nowrap font-semibold text-[32px] lg:text-[64px] leading-[69.76px]'>
          See what we have done
        </h4>
        <p className='text-base lg:text-[20px] leading-[30px]'>
          connecting doctors to patients, helping people needing procedures
        </p>
      </div>
      <div className='grid my-[50px] px-[2vw] lg:px-[70px] grid-cols-1 lg:grid-cols-3 gap-[72px]'>
        {med.map((item, index: number) => (
          <MediaCard key={index.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Page;
