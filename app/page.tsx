"use client";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const hero = ["/group3.jpg", "/team.jpg", "/covid.jpg", "/team2.jpg"];

const initialInfo = [
  { number: 0, targetNumber: 20, text: "Happy patients with our services" },
  { number: 0, targetNumber: 225, text: "The best doctors we provide" },
  { number: 0, targetNumber: 316, text: "Hospitals affiliate with us" },
  { number: 0, targetNumber: 413, text: "Procedures completed" },
];

const incrementSpeed = 10; // milliseconds

export default function Home() {
  const [info, setInfo] = useState(initialInfo);
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();
  const animationImg = useAnimation();

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
  }, [inView, animation]);

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
    <main>
      <section className='relative  section flex items-center' id='HERO'>
        <div
          id='HERO_TEXT'
          className='absolute top-[20vh] z-10 ml-16 flex flex-col space-y-5 items-start'
        >
          <h2 className='text-docBlue flex flex-col font-semibold  lg:text-6xl'>
            Support
            <span className='text-docBlack  mt-3 bg-teal-300 '>
              Patients with Procedures
            </span>
          </h2>
          <p className='font-light text-white bg-docBlack '>
            Connecting doctors to patients, helping people needing procedures
          </p>
        </div>
        <div className='absolute bg-docBlue px-7 py-3  shadow-sm shadow-white justify-around space-x-5 rounded-lg text-white top-[60vh] ml-16 z-10 flex items-center'>
          <button className=' '>Book an appointment</button>
          <FaArrowRightLong />
        </div>
        <div className='w-[99vw] h-max'>
          <Carousel images={hero} />
        </div>
      </section>
      <section ref={ref} className='section h-[80vh]  flex px-10' id='HOW_FAR'>
        <div className='w-1/2 flex flex-col justify-between h-[60vh]'>
          <h3 className='text-4xl font-'>
            Let&apos;s tell you how far we have come
          </h3>
          <p className='w-[70%]'>
            We are pleased to tell you that we have catered to the needs of so
            many world wide, here are our numbers
          </p>
          <div className='grid grid-cols-[1fr,1fr]'>
            {info.map((item, index) => {
              return (
                <div className='space-y-1 mb-7'>
                  <h3 className='text-2xl lg:text-4xl text-patientBlue'>{`${item.number}K+`}</h3>
                  <p className='w-1/2'>{item.text}</p>
                </div>
              );
            })}
          </div>
          <button className='py-3 px-7 bg-patientBlue max-w-max font-light  rounded-md text-white'>
            {" "}
            See More
          </button>
        </div>
        <div className='h-full relative  w-1/2'>
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
    </main>
  );
}
