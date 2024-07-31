import React from "react";

const Input = ({
  title,
  holder,
  width,
  setValue,
  val,
}: {
  title: string;
  holder: string;
  width: string;
  setValue: any;
  val: string | number;
}) => {
  return (
    <div className='flex w-full flex-col items-start'>
      <p className='mb-2 font-medium'>{title}</p>
      <input
        placeholder={holder}
        type={typeof val == "string" ? "text" : "number"}
        value={val}
        onChange={(e) => setValue(e.target.value)}
        className={`bg-[#F8F7F7] px-2 h-[63px] ${width} font-medium self-center text-bas rounded-lg placeholder:text-[#9A9A9A] border border-[#DCD7D7]`}
      />
    </div>
  );
};

export default Input;
