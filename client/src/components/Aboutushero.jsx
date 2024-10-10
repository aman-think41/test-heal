import React from 'react';
import PossibilitiesImage from '../assets/aboutushero.jpeg'; // Adjust the path to match your project structure

const AboutUsHeroSection = () => {
  return (
    <section className="relative bg-black text-white h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${PossibilitiesImage})`,
        }}
      />

      {/* Black overlay for opacity effect */}
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl font-roboto md:text-8xl font-bold text-orange-500 mb-4  mx-auto">
          Fullstack GenAI Company
        </h1>
        <p className="text-lg font-roboto md:text-xl max-w-6xl mx-auto">
          At Think41, we use Generative AI to hire, operate, build, innovate, and scale. Our mission is to build cutting-edge AI solutions tailored to meet the unique challenges of modern enterprises.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
