"use client";

import Input from "@/components/Input";
import Sel from "@/components/Sel";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { baseUrl } from "@/config";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";

const Page = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [volunteer, setVolunteer] = useState("Specialist");
  const [success, setSuccess] = useState<null | boolean>(null);
  const [response, setResponse] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendDetails = async () => {
    setIsLoading(true);
    const details = { name: fullName, email, phone: number, volunteer };

    try {
      const res = await axios.post(`${baseUrl}/api/volunteer`, details);
      if (res.status === 200) {
        toast.success(res.data.message);
        setFullName("");
        setEmail("");
        setNumber("");
      }
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);

      toast.error(error.response.data.message);
      setFullName("");
      setEmail("");
      setNumber("");
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full flex   flex-col items-center mb-[20vh] justify-start h-full'>
      {isLoading && (
        <div className='w-screen h-screen fixed flex items-center justify-center top-0 bg-slate-900/90 z-50'>
          {/* <div className='w-[20vw] h-[20vw] flex flex-col items-center justify-center bg-transparent rounded-lg'> */}
          <Loader />
          {/* </div> */}
        </div>
      )}
      <div className='flex w-[90%]  mb-[4vw] mt-[5vw] items-start  flex-col'>
        <h2 className='text-docBlue    flex flex-col justify-start font-semibold '>
          We care
        </h2>
        <h2 className='text-docBlack  relative bottom-[1vh] lg:bottom-[2vh] font-semibold whitespace-nowrap bg-teal-30'>
          Lets show it
        </h2>
        <p className='font-medium text-sm relative bottom-[1vh] lg:bottom-[2vh] text-[#606060] lg:text-lg'>
          Dona Care Foundation welcomes medical specialist who are willing to
          donate their skills and time to peform surgeries
        </p>
      </div>
      <div className=' h-[450px]  lg:h-[850px] flex w-[90%] '>
        <div className='w-[40%] hidden lg:flex rounded-tl-2xl relative rounded-bl-2xl  h-full bg-docBlue'>
          <div className='w-[715px] absolute bottom-0 left-0 h-[881px]'>
            <Image
              fill
              className=''
              alt='Medic looking tablet'
              src='/media/medic.png'
            />
          </div>
        </div>
        <div className='w-full lg:w-[50%] relative mx-auto h-[100%] flex flex-col lg:ml-32 justify-aroundv items-center'>
          <h5
            id='donate'
            className='text-2xl font-medium text-[#3f3f3f] lg:text-[38.7px] tracking-[0] leading-[normal] self-center'
          >
            Volunteer
          </h5>
          <div className='space-y-5  w-full'>
            <Input
              val={fullName}
              setValue={setFullName}
              title='Full Name'
              holder='John Doe'
              width='w-full'
            />
            <Input
              val={email}
              setValue={setEmail}
              title='Email Address'
              holder='johndoe@outlook.com'
              width='w-full'
            />
            <Input
              val={number}
              setValue={setNumber}
              title='Phone No'
              holder='2348181983526'
              width='w-full'
            />
            <Sel
              value={volunteer}
              setValue={setVolunteer}
              title='Volunteer as'
              width='w-full'
              options={["Hospital", "Specialist", "Patner"]}
            />
          </div>
          <button
            onClick={sendDetails}
            className='max-w-[25vw]  lg:max-w-[15vw] mt-[5vh] mx-auto  bg-docBlue hover:bg-docP hover:scale-110 active:scale-90 duration-200 cursor-pointer px-2 lg:px-7 py-3  shadow-md shadow-slate-700 justify-center rounded-lg text-white    z-10 flex items-center'
          >
            Volunteer
            <FaArrowRightLong style={{ marginLeft: 10 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
