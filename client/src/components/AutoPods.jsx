import React from "react";
import autopods from "../assets/autopods.png";

const AutoPODS = ({ data }) => {
  return (
    <div className="relative w-full min-h-[650px] max-h-[650px] overflow-hidden bg-gray-900 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${autopods})`, height: '100%' }}
      />
      <div className="absolute inset-0 bg-black opacity-0" />
      <div className="relative z-10 flex justify-end items-center w-full px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-start pr-8 md:pr-16 lg:pr-24">
          <div className="max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-left">
              <span className="text-white">Auto</span>
              <span className="text-[#F68C20]">PODS</span>
            </h1>
            <p className="text-lg font-semi-bold sm:text-xl md:text-xl text-[#F68C20] text-left">
              {data.subtitle}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white text-left">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPODS;
