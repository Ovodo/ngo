"use client";
import GetStarted from "@/components/GetStarted";
import GetStartedItem from "@/components/GetStartedItem";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
  const [search, setSearch] = useState("");

  return (
    <div className='w-full bg-[#E9F4F6]'>
      <section className='text-white section space-y-5 flex flex-col justify-center items-center relative h-[80vh] w-full'>
        <Image
          alt='cold'
          fill
          className='object-cover absolute'
          src={"/cold.png"}
        />
        <h4 className='text-3xl z-10 lg:text-5xl font-semibold'>
          Free Consultation
        </h4>
        <p className='text-white z-10 text-center font-medium text-lg '>
          Seekinig for advice and suggestions from a seasoned consultant?
        </p>
        <div className='bg-[#f4f4f4] relative top-10 flex flex-col items-center justify-around pt-[34px] pb-[48px] w-[95vw] lg:w-[80vw] h-[201px] rounded-[15.07px]'>
          <p className='text-black text-center font-bold'>
            Kindly search from our list and fill in a quick form with your
            request.
          </p>
          <div className=' flex  bg-white w-[90%] h-max py-1 border rounded-[15.07px] items-center'>
            <input
              type='text'
              className='w-[85%] pl-3 h-full text-black  text-center text-sm outline-none mx-auto'
              placeholder='Search by Name or Field'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className='bg-docBlue font-semibold rounded-[15.07px] px-[4vw] py-[1vh] text-white'>
              Search
            </button>
          </div>
        </div>
      </section>
      <section className='section'>
        <h4 className='text-3xl mb-[5vh] z-10 text-docBlack w-full text-center lg:text-5xl font-semibold'>
          Consultants
        </h4>
        {consultants
          .filter(
            (item: any) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.field.toLowerCase().includes(search.toLowerCase())
          )
          .map((item: any, i) => {
            return (
              <div
                className='mb-10 pt-10 flex flex-col relative h-[65vh] border-dashed border-logoBlue border-2 w-[80%] mx-auto  lg:flex-row justify-around items-center'
                key={i.toString()}
              >
                <div className='bg-docBlue w-[80%] lg:w-[40%] flex justify-center rounded-md'>
                  <div className='relative border-docP border- rounded-[9px] w-full  lg:w-[30vw] h-[35vh]'>
                    <Image
                      fill
                      alt='docs'
                      className='object-scale-down'
                      src={`/docs/${item.src}.png`}
                    />
                  </div>
                </div>
                <div className=' pl-10 self-start flex flex-col h-full justify-center  lg:self-center lg:w-[40%]'>
                  <div className='self-start  lg:self-center'>
                    <h2>{item.name}</h2>
                    <h6 className='text-xl lg:text-2xl text-docBlack font-semibold mb-3'>
                      {item.field}
                    </h6>
                    <p>{item.bio}</p>
                  </div>
                  <Link
                    href={"/consultation"}
                    className='self-center relative  top-5 lg:top-20'
                  >
                    <div className='bg-docBlue hover:bg-docP  max-w-max font-medium text-base hover:scale-110 active:scale-90 duration-200 cursor-pointer px-7 py-3  shadow-sm shadow-slate-700 justify-center rounded-lg text-white flex items-center'>
                      {"Book"}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Page;
