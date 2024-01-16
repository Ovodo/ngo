"use client";
import GetStarted from "@/components/GetStarted";
import GetStartedItem from "@/components/GetStartedItem";
import Image from "next/image";
import React from "react";

const consultants = [
  {
    name: `Dr. Harry Littleton`,
    field: "Neurologist",
    animation: "center",
    src: "nurse",
    bio: "Specialist in taking care of the needy",
  },
  {
    name: `Dr. Robert Henry`,
    field: "Cardiologist",
    animation: "left",
    src: "fineboy",
    bio: "Specialist in taking care of the needy",
  },
  {
    name: `Dr. Sajeev Kapoor`,
    field: "Child Specialist",
    animation: "left1",
    src: "male",
    bio: "Specialist in taking care of the needy",
  },
  {
    name: `Dr. Sharina Khan`,
    field: "Gynaecologist",
    animation: "right1",
    src: "female",
    bio: "Specialist in taking care of the needy",
  },
  //   {
  //     name: `Management Consultant with Distinction in Time Management (London Graduate School).`,
  //     field: "right1",
  //     animation: "right1",
  //   },
];

const Page = () => {
  return (
    <div className='w-full'>
      <section className='text-white section space-y-5 flex flex-col justify-center items-center relative h-[80vh] w-full'>
        <Image
          alt='cold'
          fill
          className='object-cover -z-10 absolute'
          src={"/cold.png"}
        />
        <h4 className='text-3xl lg:text-5xl font-semibold'>
          Free Consultation
        </h4>
        <p className='text-[#b4b4b4] font-medium text-lg '>Apply for help</p>
        <div className='bg-[#f4f4f4] relative top-10 flex flex-col items-center justify-around pt-[34px] pb-[48px] w-[80vw] h-[201px] rounded-[15.07px]'>
          <p className='text-black text-center font-bold'>
            Kindly fill the form below to book your free consultation
          </p>
          <div className=' flex  bg-white w-[90%] h-max py-1 border rounded-[15.07px] items-center'>
            <input
              type='text'
              className='w-[85%] pl-3 h-full text-black  text-center text-sm outline-none mx-auto'
              placeholder='Enter your email here'
            />
            <button className='bg-docBlue font-semibold rounded-[15.07px] px-[4vw] py-[1vh] text-white'>
              Send
            </button>
          </div>
        </div>
      </section>
      <section className='section'>
        {consultants.map((item: any, i) => {
          return (
            <div
              className='mb-10 flex flex-col h-[65vh] bord w-[80%] mx-auto  lg:flex-row justify-around items-center'
              key={i.toString()}
            >
              <div className='relative border-docP border- rounded-[9px] w-full  lg:w-[30vw] h-[35vh]'>
                <Image
                  fill
                  alt='docs'
                  className='object-scale-down'
                  src={`/docs/${item.src}.png`}
                />
              </div>
              <div className=' pl-10 self-start lg:self-center lg:w-[40%] space-y-5'>
                <h2>{item.name}</h2>
                <h4>{item.field}</h4>
                <p>{item.bio}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Page;
