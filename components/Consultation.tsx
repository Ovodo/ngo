"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const consultants = [
  {
    name: `Dr. Emeka Onyia`,
    field: "Neurologist",
    animation: "center",
    src: "nurse",
  },
  {
    name: `Dr. Chima Dubem`,
    field: "Cardiologist",
    animation: "left",
    src: "fineboy",
  },
  {
    name: `Dr. Lembe Precious`,
    field: "Child Specialist",
    animation: "left1",
    src: "male",
  },
  {
    name: `Dr. Victor Ndukwe`,
    field: "Gynaecologist",
    animation: "right1",
    src: "female",
  },
  //   {
  //     name: `Management Consultant with Distinction in Time Management (London Graduate School).`,
  //     field: "right1",
  //     animation: "right1",
  //   },
];
const Consultation = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [awards, setAward] = useState(consultants);

  const setIndexOnClick = (clickedIndex: number) => {
    const newIndexes = [...awards];
    const frontIndex = newIndexes.findIndex(
      (item) => item.animation === "center"
    );
    const temp = newIndexes[frontIndex].animation;
    const click = newIndexes[clickedIndex].animation;
    newIndexes[frontIndex].animation = click;
    newIndexes[clickedIndex].animation = temp;
    setAward(newIndexes);
    setCurrentIndex(clickedIndex);
  };

  const imageVariants = {
    center: { x: "10%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-100%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "80%", scale: 0.7, zIndex: 3 },
  };
  const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
    const swipeThreshold = 40;
    if (info?.offset?.x > swipeThreshold) {
      handleNext();
    } else if (info?.offset?.x < -swipeThreshold) {
      handleBack();
    } else {
      handleNext();
    }
  };
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });

    const setNewIndex = currentIndex >= 4 ? 1 : currentIndex + 1;
    setCurrentIndex(setNewIndex);
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      const setNewIndex = currentIndex <= 0 ? 4 : currentIndex - 1;
      setCurrentIndex(setNewIndex);
      return updatedIndexes;
    });
  };

  return (
    <div className='relative     flex flex-col h-full'>
      <div className='lg:flex items-center  h-screen justify-center hidden  min-h-max  relative'>
        {awards.map((comp, index) => (
          <motion.div
            key={index.toString()}
            className={`w-[90%] absolute top-10 lg:w-[521px]  h-[618px] pt-[41.5px] flex flex-col items-center bg-white rounded-[16.29px] shadow-[0px_4.41px_26.43px_-1.1px_#00000033] backdrop-blur-[44.06px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.06px)_brightness(100%)]`}
            animate={comp.animation}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={() => setIndexOnClick(index)}
            onClick={() => setIndexOnClick(index)}
            // onHoverEnd={() => setIndexOnClick(index)}
          >
            <div className='relative w-[90%]  lg:w-[378px] mb-2'>
              <div className='w-[115px] h-[28px] flex  items-center px-5   bg-[#ececec] rounded-[13.23px]'>
                <div className='bg-docBlue w-[7.8px] mr-2 h-[7.8px] rounded-full'></div>
                <p className='text-xs'>Availiable</p>
              </div>
            </div>
            <div className='relative w-[90%]  lg:w-[378px]  flex justify-center h-[249px] top-0 left-0 bg-[#2ca3fa] rounded-[26.06px]'>
              <div className='absolute bottom-0 w-[220px] h-[299px]'>
                <Image
                  src={`/docs/${comp.src}.png`}
                  alt='docs'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
            <p className='p-3 text-3xl leading-none text-[#3f3f3f] font-medium'>
              {comp.name}
            </p>
            <p className='p-3 text-2xl relative bottom-3 leading-none text-[#767676] font-medium'>
              {comp.field}
            </p>
            <div className='border border-patientBlue hover:cursor hover:bg-patientBlue text-[#1a1b1d] hover:cursor-pointer hover:scale-110 hover:text-white duration-150 flex items-center justify-center min-w-[332.25px] min-h-[65.14px] rounded-2xl'>
              <p className=' font-medium text-center '>Book an Appointment</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='flex flex-row px-0 py-5  scrollbar-hide overflow-scroll    w-[100vmin] lg:hidden'>
        {awards.map((comp, index) => (
          <motion.div
            key={index.toString()}
            className={`min-w-[70vw]   min-h-[50vmax] mx-5  pt-[41.5px] flex flex-col items-center bg-white rounded-[16.29px] shadow-[0px_4.41px_26.43px_-1.1px_#00000033] backdrop-blur-[44.06px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.06px)_brightness(100%)]`}
          >
            <div className='relative w-[90%]  lg:w-[378px] mb-2'>
              <div className='w-[115px] h-[28px] flex  items-center px-5   bg-[#ececec] rounded-[13.23px]'>
                <div className='bg-docBlue w-[7.8px] mr-2 h-[7.8px] rounded-full'></div>
                <p className='text-xs'>Availiable</p>
              </div>
            </div>
            <div className='relative w-[90%]   flex justify-center h-[249px] top-0 left-0 bg-[#2ca3fa] rounded-[26.06px]'>
              <div className='absolute bottom-0 w-[220px] h-[220px]'>
                <Image
                  src={`/docs/${comp.src}.png`}
                  alt='docs'
                  fill
                  className='object-scale-down'
                />
              </div>
            </div>
            <p className='p-3 text-xl leading-none whitespace-nowrap text-[#3f3f3f] font-medium'>
              {comp.name}
            </p>
            <p className='p-3 text-lg relative bottom-3 leading-none text-[#767676] font-medium'>
              {comp.field}
            </p>
            <div className='border border-patientBlue relative bottom-2 hover:cursor hover:bg-patientBlue text-[#1a1b1d] hover:cursor-pointer  hover:text-white duration-150 flex items-center justify-center min-w-[50%] min-h-[44.14px] rounded-2xl'>
              <p className=' font-medium text-center '>Book</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='hidden lg:flex absolute bottom-5 self-center justify-center gap-2 mt-4'>
        {awards.map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full ${
              index === currentIndex ? "bg-gray-800 w-[25px]" : "bg-gray-400"
            } `}
          />
        ))}
      </div>
    </div>
  );
};

export default Consultation;
