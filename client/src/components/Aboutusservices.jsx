import React from 'react';

// Import images from assets
import services3 from '../assets/services3 1.png';
import services2 from '../assets/services2 (1).png';
import services4 from '../assets/services4 1 (1).png';

export default function Component() {
  const sections = [
    {
      image: services3,
      title: 'We use GenAI and Agentic Workflows for Operations',
      description: 'We move faster be it recruitment, training, project management, allocations, execution and so on. This while providing an extra personalised experience - where software works according to your needs and not the other way around.',
    },
    {
      image: services4,
      title: 'Generative AI Technology led Solutions and Services',
      description: 'We invest in a GenAI foundation, so we can offer a much higher value proposition to our clients. We can take projects most others would find challenging and deliver them in lesser time and with minimum hassle.',
    },
    {
      image: services2,
      title: 'Dev41 Platform for Software Generation & Management',
      description: 'With Dev41 our teams create and launch products much faster. This unique platform lets us deliver more with less and works across the SDLC. It can be customised to specific client needs accelerating software development across teams.',
    },
  ];

  return (
    <div className="bg-black text-[#A9A9A9] font-roboto">
      <div className="mx-auto py-24">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-16 ${
              index === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className={`w-full h-[500px] overflow-hidden ${index === 1 ? 'rounded-l-[50px]' : 'rounded-r-[50px]'}`}>
                <img
                  src={section.image}
                  alt={section.title}
                  className={`w-full h-full object-cover ${index === 1 ? 'rounded-l-[50px]' : 'rounded-r-[50px]'}`}
                />
              </div>
            </div>
            <div className={`w-full md:w-1/2 flex ${index === 1 ? 'md:justify-end' : ''}`}>
              <div className={`max-w-md ${index === 1 ? 'md:mr-8' : 'md:ml-8'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
