import Image from "next/image";
import Carousel from "@/components/Carousel";
import { FaArrowRightLong } from "react-icons/fa6";

const hero = ["/group3.jpg", "/team.jpg", "/covid.jpg", "/team2.jpg"];

export default function Home() {
  return (
    <main>
      <section className='relative flex items-center' id='HERO'>
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
    </main>
  );
}
