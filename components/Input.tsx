import React from "react";

const Input = ({
  title,
  holder,
  width,
}: {
  title: string;
  holder: string;
  width: string;
}) => {
  return (
    <div className='flex flex-col lg:items-start items-center'>
      <p className='mb-5 font-medium'>{title}</p>
      <p>
        <input
          placeholder={holder}
          type='text'
          className={`bg-[#F8F7F7] px-2 h-[63px] ${width} font-medium self-center text-bas rounded-lg text-[#9A9A9A] border border-[#DCD7D7]`}
        />
      </p>
    </div>
  );
};

export default Input;
