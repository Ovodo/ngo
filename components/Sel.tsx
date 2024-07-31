import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Sel = ({
  title,
  options,
  width,
  setValue,
  value,
}: {
  title: string;
  options: string[];
  width: string;
  setValue: any;
  value: string;
}) => {
  return (
    <div className='flex w-full flex-col items-start'>
      <p className='mb-2 font-medium'>{title}</p>
      <div className='relative w-full h-max flex items-center'>
        <select
          value={value}
          defaultValue={"Select"}
          onChange={(e) => setValue(e.target.value)}
          className={`bg-[#F8F7F7] w-full appearance-none px-2 h-[63px] ${width} font-medium self-center text-bas rounded-lg placeholder:text-[#9A9A9A] border border-[#DCD7D7]`}
        >
          {options.map((option) => (
            <option defaultValue='Select' key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className='absolute right-3'>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Sel;
