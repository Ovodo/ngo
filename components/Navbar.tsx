"use client";

import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const listStyle: string =
  "text-sm min-h-max hover:scale-110  leading-[16px] list relative cursor-pointer hover:opacity-60 hover:text-docBlue duration-200  flex flex-col items-center my-[14px] lg:mb-0 mt-[40px] lg:mt-0  lg:leading-[20px]  font-normal";

const Navbar = () => {
  // --------------------------------------------VARIABLES
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  //-----------------------------------------------------------FUNCTIONS
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //
  return (
    <div className='relative    shadow-sm w-full shadow-slate-300 z-20   flex items-center lg:justify-around bg-white h-[10vh] '>
      <Link href={"/"}>
        <h4 className='font-semibold ml-5 lg:ml-0 text-docBlue'>
          Dona life <span className='text-black'>Foundation</span>
        </h4>
      </Link>
      <ul
        onClick={() => toggleMenu()}
        className={`pl-5 w-[60vw] lg:w-[45vw] menu  ${
          !isOpen
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100 scale-100 z-10"
        }  h-[90vh] lg:h-full  duration-300 lg:translate-x-0  lg:opacity-100 transition-all ease-linear  lg:flex-row items-start justify-start lg:justify-between lg:items-center absolute lg:relative top-[10vh] lg:top-0 left-0 flex flex-col bg-white`}
      >
        <li
          className={`${listStyle} ${
            router.includes("/about") ? "text-docBlue" : ""
          }`}
        >
          <Link href={"/"}>About us</Link>
        </li>
        <li
          className={`${listStyle} ${
            router.includes("/media") ? "text-docBlue" : ""
          }`}
        >
          <Link href={"/media"}>Media</Link>
        </li>
        <li
          className={`${listStyle} ${
            router.includes("/volunteer") ? "text-docBlue" : ""
          }`}
        >
          <Link href={"/volunteer"}>Volunteer</Link>
        </li>
        <li
          className={`${listStyle} ${
            router.includes("/consultation") ? "text-docBlue" : ""
          }`}
        >
          <Link href={"/consultation"}>Free Consultation</Link>
        </li>
        <li
          className={`${listStyle} ${
            router.includes("/contact") ? "text-docBlue" : ""
          }`}
        >
          <Link href={"/contact"}>Contact us</Link>
        </li>
        <Link href={"/donate"}>
          <button className='px-7 lg:hidden hover:scale-110 hover:bg-docP duration-300 active:scale-90  absolute top-[60vh] z-10 left-5 text-white py-2 rounded-xl bg-docBlue text-base'>
            Donate
          </button>
        </Link>
      </ul>
      <Link href={"/donate"}>
        <button className='px-7 hidden hover:scale-110 hover:bg-docP duration-300 active:scale-90  lg:flex text-white py-2 rounded-xl bg-docBlue text-base'>
          Donate
        </button>
      </Link>
      <div
        onClick={toggleMenu}
        className={`lg:hidden flex absolute right-2  items-center justifiy-center mr-2`}
      >
        {isOpen ? (
          <MdClose size={40} color={"#132238"} />
        ) : (
          <BiMenu size={40} color={"#132238"} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
