import Image from "next/image";
import React from "react";

const ContactDetails = ({ imag, title }: { imag: string; title: string }) => {
  return (
    <div className='flex items-center'>
      <div className='w-[50px] lg:w-[70px] relative h-[50px] lg:h-[70px]'>
        <Image alt='icon' src={`/icons/${imag}`} fill />
      </div>
      <p className=' font-medium text-[#3f3f3f] text-base lg:text-[20px] tracking-[0] leading-[normal]'>
        {title}
      </p>
    </div>
  );
};

export default ContactDetails;
