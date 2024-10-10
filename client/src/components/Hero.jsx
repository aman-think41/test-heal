import React from 'react';
import heroImage from '../assets/mindai.png';

export default function Hero({ data }) {
  return (
    <div className="relative bg-black mx-auto min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt={data.imageAlt}
        className="absolute inset-0 w-full h-full object-cover lg:hidden"
        loading="lazy" // Add lazy loading attribute
      />
      <div className="relative w-full max-w-[1920px] mx-auto px-2 sm:px-10 lg:px-16 pt-20 lg:pt-0 flex flex-col lg:flex-row items-center justify-between">
        <div className="relative lg:w-1/2 mb-10 lg:mb-0 z-10">
          <h1 className="text-[#F68C20] font-roboto font-bold text-4xl sm:text-5xl lg:text-7xl xl:text-7xl leading-tight mb-8 px-4">
            {data.title}
          </h1>
          <div className="text-white font-roboto text-xl sm:text-2xl lg:text-4xl leading-normal mb-4 px-4">
            <p className="lg:hidden">{data.subtitle}</p>
            <p className="hidden lg:block">{data.subtitle.split(' ').slice(0, 6).join(' ')}</p>
            <p className="hidden lg:block mt-4">{data.subtitle.split(' ').slice(6).join(' ')}</p>
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:flex justify-end items-center">
          <div className="relative w-full h-[800px] overflow-visible">
            <img
              src={heroImage}
              alt={data.imageAlt}
              className="absolute top-0 right-0 w-[1300px] h-auto max-w-none"
              style={{ transform: 'translate(5%, -11%)' }}
              loading="lazy" // Add lazy loading attribute
            />
          </div>
        </div>
      </div>
    </div>
  );
}