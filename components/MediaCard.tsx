import Image from "next/image";
import React from "react";

const MediaCard = ({
  src,
  name,
  desc,
}: {
  src?: string;
  name?: string;
  desc?: string;
}) => {
  return (
    <div className='flex flex-col w-max  items-start'>
      <div className='min-w-[300px]  lg:min-w-[385px] mb-[10px] min-h-[257px] lg:min-h-[257px] relative'>
        <Image
          src={`/media/${src}.png`}
          fill
          className='object-cover'
          alt='image'
        />
      </div>
      <h5 className='font-bold mb-[10px] text-[#3f3f3f] text-lg lg:text-[24px] tracking-[0] leading-[normal]'>
        {name}
      </h5>
      <p className='lg:w-[348px] w-[300px]  font-medium text-[#3f3f3f] text-base lg:text-[20px] tracking-[0] leading-[normal]'>
        {desc}
      </p>
    </div>
  );
};

export default MediaCard;
