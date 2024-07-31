"use client";

import CheckWithText from "@/components/CheckWithText";
import Donate from "@/components/Donate";
import { useInView } from "react-intersection-observer";

import Input from "@/components/Input";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import ProceduresCard from "@/components/ProceduresCard";
import { usePaystackPayment } from "react-paystack";

const donors = [
  { name: "Victor Ndukwe", amount: "#100,000", date: "03/24" },
  { name: "Emeka Onyia", amount: "#100,000", date: "03/24" },
  { name: "Chima Dubem", amount: "#60,000", date: "03/24" },
];

const initialInfo = [
  { number: 0, targetNumber: 25, text: "Patients supported" },
  { number: 0, targetNumber: 5, text: "Supporting volunteers" },
  { number: 0, targetNumber: 3, text: "Hospitals affiliate with us" },
  { number: 0, targetNumber: 4, text: "Procedures completed" },
];
const incrementSpeed = 100; // milliseconds

const Page = () => {
  const [info, setInfo] = useState(initialInfo);
  const { ref, inView } = useInView({ threshold: 0.4 });
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const animation = useAnimation();
  const animationImg = useAnimation();
  const donate = useSearchParams().get("donate");

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_0c16a74819c3e66e2d1da2404852fa613290ce9f",
  };

  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = (reference: any) => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);

  useEffect(() => {
    console.log("inView", inView);

    if (!inView) {
      animation.start({
        x: -200,
        opacity: 0,
      });
      animationImg.start({
        x: +200,
        height: 0,
        opacity: 0,
      });
    } else {
      animation.start({
        x: 0,
        opacity: 1,
      });
      animationImg.start({
        x: 0,
        height: 600,
        opacity: 1,
      });
    }
  }, [inView, animation, animationImg]);

  useEffect(() => {
    const incrementNumbers = () => {
      setInfo((prevInfo) =>
        prevInfo.map((item) => {
          // Check if the number has reached its target
          if (item.number >= item.targetNumber) {
            return item; // Don't increment anymore
          }
          return {
            ...item,
            number: Math.min(item.number + 1, item.targetNumber), // Increment and clamp to target
          };
        })
      );
    };

    const intervalId = setInterval(() => {
      inView && incrementNumbers();
    }, incrementSpeed); // Set increment interval

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [inView]);

  return (
    <div className='w-full flex flex-col items-center mb-[20vh] justify-start h-full'>
      <AnimatePresence mode='wait'>
        {donate && (
          <div className='fixed z-20 w-screen  top-[10vh] left-[50%] -translate-x-1/2'>
            <Donate />
          </div>
        )}
      </AnimatePresence>
      <div className='flex w-[90%]  mb-[4vw] mt-[5vw] items-start  flex-col'>
        <h2 className='text-docBlue    flex flex-col justify-start font-semibold '>
          We care
        </h2>
        <h2 className='text-docBlack  relative bottom-[1vh] lg:bottom-[2vh] font-semibold whitespace-nowrap bg-teal-30'>
          Lets give to them
        </h2>
        <p className='font-medium text-sm relative bottom-[1vh] lg:bottom-[2vh] text-[#606060] lg:text-lg'>
          Dona Care Foundation supports indigent patients in critical need of
          medical procedures such as Dialysis and Surgeries
        </p>
      </div>
      <div className='section h-[450px] lg:h-[850px] flex w-[90%] '>
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
        <div className='w-full lg:w-[50%] relative mx-auto h-full flex flex-col lg:ml-32 justify-center space-y-10 items-center'>
          <h5
            id='donate'
            className='text-2xl font-medium   text-[#3f3f3f] text-[38.7px] tracking-[0] leading-[normal] self-center'
          >
            Donate
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
              val={amount}
              setValue={setAmount}
              title='Amount in Naira'
              holder='100'
              width='w-full'
            />
          </div>
          <button
            onClick={() => {
              initializePayment({ onSuccess, onClose });
            }}
            className='max-w-[25vw]  lg:max-w-[15vw] mt-[5vh] mx-auto  bg-docBlue hover:bg-docP hover:scale-110 active:scale-90 duration-200 cursor-pointer px-2 lg:px-7 py-3  shadow-md shadow-slate-700 justify-center rounded-lg text-white    z-10 flex items-center'
          >
            Donate
            <FaArrowRightLong style={{ marginLeft: 10 }} />
          </button>
        </div>
      </div>
      <section
        ref={ref}
        className='section overflow-hidden  lg:h-screen w-[90%]  flex flex-col lg:flex-row px-5 lg:px-10'
        id='HOW_FAR'
      >
        <div className=' w-full lg:w-1/2  flex flex-col justify-between  h-[60vh] lg:h-[85vh]'>
          <h2 className='font-'>Let&apos;s tell you how far we have come</h2>
          <p className='lg:w-[70%]'>
            These are the numbers that tell our story
          </p>
          <div className='grid grid-cols-[1fr,1fr]'>
            {info.map((item, index) => {
              return (
                <div key={index.toString()} className='space-y-1 mb-7'>
                  <h3 className='text-2xl lg:text-4xl text-patientBlue'>{`${item.number}+`}</h3>
                  <p className='w-1/2'>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='h-full relative hidden lg:flex  w-full lg:w-1/2'>
          <motion.div
            animate={animationImg}
            transition={{ type: "tween", duration: 1.5 }}
            className='absolute right-0 w-[25vw] h-[80%]'
          >
            <Image
              src={"/hospi.png"}
              alt='hospi'
              className='object-cover rounded-md'
              fill
            />
          </motion.div>
          <motion.div
            animate={animation}
            transition={{ type: "tween", duration: 1.5 }}
            className='absolute left-20 bottom-0 w-[20vw] h-[60%]'
          >
            <Image src={"/hosp.png"} alt='hospi' className='' fill />
          </motion.div>
        </div>
      </section>
      <div className='mt-20 w-full'>
        <div className='rounded-[20px] h-[459px] relative mx-auto  py-10 bg-white px-5 max-w-[95%] lg:min-w-[758px] '>
          <h3 className='font-bold text-2xl  mx-auto w-full text-center text-docBlack'>
            Donors
          </h3>
          {/* <p className='text-base font-medium absolute bottom-4 right-8 text-[#3f3f3f]'>
            See More
          </p> */}
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
      </div>
      <ProceduresCard width='lg:min-w-[90%]' />
    </div>
  );
};

export default Page;
