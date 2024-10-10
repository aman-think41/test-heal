import React from 'react';
import underline from '../assets/Line 2.svg';

function Solutions({ data }) {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold mb-2 inline-block">
            <span className="text-[#F68C20]">Solutions</span>
            <span className="text-gray-700"> & </span>
            <span className="text-[#F68C20]">Insights</span>
          </h2>
          <img src={underline} alt="" className="mx-auto w-full max-w-md" />
        </div>
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 text-xl">
          {data.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Add solution cards here */}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
