import MediaCard from "@/components/MediaCard";
import React from "react";

const med = [
  { name: "Blue Labs", desc: "A stethoscopic tour", src: "exam" },
  {
    name: "Examining tubes",
    desc: "Examinig a microscopic tube",
    src: "Examination",
  },
  {
    name: "Hair Revitalization",
    desc: "Bring back your lost hair",
    src: "Afro",
  },
  { name: "Ify dancing", desc: "Member dancing with an x-ray", src: "ify" },
  { name: "A group of girls", desc: "4 girls posing", src: "girls" },
  { name: "VIP lounge", desc: "A VIP bed ", src: "vip" },
];

const Page = () => {
  return (
    <div className='relative flex flex-col items-center w-full h-full'>
      <div className='ml-[20px] lg:ml-[100px] lg:self-start mt-[50px] lg:w-[639px]'>
        <h4 className='text-[#404040] whitespace-nowrap font-semibold text-[32px] lg:text-[64px] leading-[69.76px]'>
          See what we have done
        </h4>
        <p className='text-base lg:text-[20px] leading-[30px]'>
          In line with our vision and with your support, we accomplished these
        </p>
      </div>
      <div className='grid my-[50px] px-[2vw] lg:px-[70px] grid-cols-1 lg:grid-cols-3 gap-[72px]'>
        {med.map((item, index: number) => (
          <MediaCard
            name={item.name}
            desc={item.desc}
            src={item.src}
            key={index.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
