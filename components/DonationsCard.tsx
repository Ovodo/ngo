import React from "react";
import { TiTick } from "react-icons/ti";

const donors = [
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
];

const DonationsCard = () => {
  return (
    <div className='rounded-[20px] h-[459px] relative mx-auto  py-10 bg-white px-5 max-w-[95%] lg:min-w-[758px]  shadow-[0px_4.07px_24.45px_-1.02px_#0000001c] backdrop-blur-[40.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40.75px)_brightness(100%)]'>
      <h3 className='font-bold text-2xl  mx-auto w-full text-center text-docBlack'>
        Our Donations
      </h3>
      <p className='text-base font-medium absolute bottom-4 right-8 text-[#3f3f3f]'>
        See More
      </p>
      <div className='grid rounded-full text-docAsh text-sm mt-[30px] font-medium py- px-4 grid-cols-[1.5fr,1fr,1fr,1fr]'>
        <p className='w-full text-center'>Name</p>
        <p className='w-full text-center'>Amount</p>
        <p className='w-full text-center'>Date</p>
        <p className='w-full text-center'>Approval</p>
      </div>
      {donors.map((item, index) => {
        return (
          <div
            key={index.toString()}
            className='grid rounded-[30px] text-xs lg:text-sm text-docP font-medium py-5 px-4 bg-white shadow-[14px_17px_40px_4px_#7090b014] my-4 grid-cols-[1.5fr,1fr,1fr,1fr]'
          >
            <p className='w-full text-center'>{item.name}</p>
            <p className='w-full text-center'>{item.amount}</p>
            <p className='w-full text-center'>{item.date}</p>
            <div className='flex text-white  items-center justify-center'>
              <div className='rounded-full absolute  bg-green-600 w-[20px] h-[20px]'></div>

              <i className='z-10'>
                <TiTick />
              </i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DonationsCard;
