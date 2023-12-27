"use client";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import DonationsCard from "@/components/DonationsCard";
import Consultation from "@/components/Consultation";
import MediaCarosel from "@/components/MediaCarosel";
import SingleCarousel from "@/components/SingleCarousel";
import SpecialistCard from "@/components/SpecialistCard";
import SingleSpecialistCard from "@/components/SingleSpecialistCard";
import HospitalCard from "@/components/HospitalCard";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import GetStarted from "@/components/GetStarted";

const hero = [
  "/group3.jpg",
  "/team.jpg",
  "/covid.jpg",
  "/team2.jpg",
  "/scope.svg",
];
const media = [
  "/media/gloves.svg",
  "/media/hallway.svg",
  "/media/bed.svg",
  "/media/girl.svg",
  "/media/scan.svg",
];
const specials = [
  "/specialist/jim.png",
  "/specialist/carry.png",
  "/specialist/wade.png",
  "/specialist/jenny.png",
  "/specialist/jacob.png",
];
const special = [
  {
    name: `Jim Carry`,
    field: "orthodontist",
    animation: "center",
    src: "/specialist/jim.png",
  },
  {
    name: `Wade Warren`,
    field: "Endodontist",
    animation: "left",
    src: "/specialist/wade.png",
  },
  {
    name: `Jenny Wilson`,
    field: "Periodontist",
    animation: "left1",
    src: "/specialist/jenny.png",
  },
  {
    name: `Jacob Jones`,
    field: "Pediatric Dentist",
    animation: "right1",
    src: "/specialist/jacob.png",
  },
  {
    name: `Jim Carry`,
    field: "orthodontist",
    animation: "center",
    src: "/specialist/carry.png",
  },
  //   {
  //     name: `Management Consultant with Distinction in Time Management (London Graduate School).`,
  //     field: "right1",
  //     animation: "right1",
  //   },
];

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
  const router = useRouter();
  const started = useSearchParams().get("started");

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
    <main className='relative'>
      <section className='relative  section flex items-center' id='HERO'>
        <AnimatePresence mode='wait'>
          {started && (
            <div className='absolute z-20 top-[2%] left-[50%] -translate-x-1/2'>
              <GetStarted />
            </div>
          )}
        </AnimatePresence>

        <div
          id='HERO_TEXT'
          className='absolute top-[20vh] z-10 ml-2 lg:ml-16 flex flex-col space-y-5 items-start'
        >
          <h2 className='text-docBlue flex flex-col font-semibold '>
            We Support
            <span className='text-docBlack  p-[2px] whitespace-nowrap  mt-3 bg-teal-300 '>
              Patients with procedures
            </span>
          </h2>
          <p className='font-light p-[2px] w-[90%] lg:w-full text-white bg-docBlack '>
            Connecting doctors to patients, helping people needing procedures
          </p>
        </div>
        <Link href={"/?started=true"} className=' '>
          <div className='absolute bg-docBlue hover:bg-docP hover:scale-110 active:scale-90 duration-200 cursor-pointer px-7 py-3  shadow-md shadow-slate-700 justify-around space-x-5 rounded-lg text-white top-[50vh] lg:top-[60vh]  ml-2 lg:ml-16 z-10 flex items-center'>
            Get Started
            <FaArrowRightLong />
          </div>
        </Link>
        <div className='w-[99vw] p-1 bg-gray-200 bg-opacity-50 h-max'>
          <Carousel images={hero} />
        </div>
      </section>
      <section
        ref={ref}
        className='section overflow-hidden  lg:h-screen  flex flex-col lg:flex-row px-5 lg:px-10'
        id='HOW_FAR'
      >
        <div className=' w-full lg:w-1/2  flex flex-col justify-between  h-[60vh] lg:h-[85vh]'>
          <h2 className='font-'>Let&apos;s tell you how far we have come</h2>
          <p className='lg:w-[70%]'>
            We are pleased to tell you that we have catered to the needs of so
            many world wide, here are our numbers
          </p>
          <div className='grid grid-cols-[1fr,1fr]'>
            {info.map((item, index) => {
              return (
                <div key={index.toString()} className='space-y-1 mb-7'>
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
      <section className='relative  section overflow-y-visible  lg:top-[100px] flex min-h-[70vh] lg:h-screen   flex-col justify-center items-center'>
        <div className='absolute z-50 w-[70vw] h-[70vw] mx-auto rounded-full border-[6vw] border-opacity-10 border-docBlue' />
        <div className='relative lg:bottom-[100px]  flex items-center justify-center w-full h-full'>
          <div className='lg:absolute left-[5vw] top-[123px]'>
            <DonationsCard />
          </div>
          <div className='hidden left-[40vw] top-[315px] absolute lg:flex'>
            <DonationsCard />
          </div>
        </div>
      </section>
      <section className='section'>
        <h2 className='text-[#3f3f3f] text-center font-semibold'>
          Free Consultation
        </h2>
        <p className='text-[#b3b3b3] px-2 leading-normal text-center lg:text-left mx-auto max-w-[794px] font-medium'>
          Discover expertise and compassion in our dedicated team of
          doctors.Meet skilled professionals committed to your well -being and
          personalized care.
        </p>
        <div className='h-[70vh] lg:min-h-screen bg-transparent flex items-center justify-center pt-[11px]'>
          <Consultation />
        </div>
      </section>
      <section className='section'>
        <h2 className='text-[#3f3f3f] text-center font-semibold'>Media</h2>
        <p className='text-[#b3b3b3] leading-normal text-center mx-auto max-w-[794px] font-medium'>
          Oureach&apos;s and procedures done so far
        </p>
        <div className='min-h-max hidden lg:flex  items-center justify-center pt-[50px]'>
          <MediaCarosel images={media} />
        </div>
        <div className='min-h-max lg:hidden bg-transparent flex items-center justify-center pt-[50px]'>
          <SingleCarousel images={media} />
        </div>
      </section>
      <section className='section mt-5 lg:mt-0 overflow-hidden w-[99vw]'>
        <h2 className='text-[#3f3f3f] text-center font-semibold'>Volunteer</h2>
        <p className='text-[#b3b3b3] leading-normal text-center mx-auto max-w-[794px] font-medium'>
          Explore the collaborative strength of our valued partners.
        </p>
        <div className='section  mt-[40px] pt-[33px] pb-[40px] min-h-[70vh] lg:min-h-screen bg-[#e9f4f6] '>
          <h2 className='text-[#011632]  text-center  font-normal'>
            Meet Our Specialist
          </h2>
          <p className='text-[#3c4959] leading-[27.9px] text-center mx-auto max-w-[479px] font-normal'>
            We have the best network of doctors and specialists on our team
          </p>
          <div className='hidden  lg:flex'>
            <SpecialistCard images={special} />
          </div>
          <div className='flex  lg:hidden'>
            <SingleSpecialistCard images={special} />
          </div>
        </div>
        <div className='section  mt-[40px] pt-[33px] min-h-[70vh] lg:min-h-screen'>
          <h2 className='text-[#011632]  text-center  font-normal'>
            See Our Hospitals
          </h2>
          <p className='text-[#3c4959] leading-[27.9px] text-center mx-auto max-w-[479px] font-normal'>
            We have the best network of hospitals and specialists on our team
          </p>
          <div className='mt-[50px] overflow-scroll w-screen flex'>
            {special.map((item: any, index: number) => (
              <HospitalCard key={index.toString()} />
            ))}
          </div>
        </div>
      </section>
      <section className='text-white space-y-5 flex flex-col justify-center items-center relative h-[80vh] w-full'>
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
      <Footer />
    </main>
  );
}
