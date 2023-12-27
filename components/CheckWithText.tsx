"use client";
import React, { useState } from "react";
import { BiCheck, BiCheckbox } from "react-icons/bi";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

const CheckWithText = ({
  text,
  cText,
  style,
}: {
  text: string;
  cText: string;
  style: string;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={`flex items-center ${style}`}>
      <button
        onClick={() => setChecked(!checked)}
        className='w-[26px] cursor-pointer z-10 flex items-center justify-center  h-[26px] '
      >
        {checked ? (
          <GrCheckbox size={100} color={"#545454"} />
        ) : (
          <GrCheckboxSelected color={"#545454"} size={50} />
        )}
      </button>
      <p className='ml-3'>
        {text} <span className='cursor-pointer text-docBlue'>{cText}</span>
      </p>
    </div>
  );
};

export default CheckWithText;
