import React from "react";

const donors = [
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
  { name: "Cristiano Ronaldo", amount: "$10,000", date: "01/27" },
];

const DonationsCard = () => {
  return (
    <div className='rounded-lg shadow-md py-10 px-5 min-w-full lg:min-w-[758px] shadow-slate-500'>
      <h2 className='font-semibold mx-auto w-full text-center text-docBlack'>
        Our Donations
      </h2>
      <div className='grid rounded-full text-docAsh font-medium py- px-4 grid-cols-[1.5fr,1fr,1fr,1fr]'>
        <p className='w-full text-center'>Name</p>
        <p className='w-full text-center'>Amount</p>
        <p className='w-full text-center'>Date</p>
        <p className='w-full text-center'>Approval</p>
      </div>
      {donors.map((item, index) => {
        return (
          <div className='grid rounded-full text-docP font-medium py-5 px-4 bg-slate-300 my-10 grid-cols-[1.5fr,1fr,1fr,1fr]'>
            <p className='w-full text-center'>{item.name}</p>
            <p className='w-full text-center'>{item.amount}</p>
            <p className='w-full text-center'>{item.date}</p>
            <div className='flex items-center justify-center'>
              <div className='rounded-full bg-green-600 w-[20px] h-[20px]'></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DonationsCard;
