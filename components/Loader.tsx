import React from "react";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='flex flex-col justify-center  items-center w-full h-full'>
      <CircleLoader
        className='w-full'
        size={60}
        loading={!false}
        color='#2186FC'
      />
      <p className='mt-5 text-docBlue'>Loading...</p>
    </div>
  );
};

export default Loader;
