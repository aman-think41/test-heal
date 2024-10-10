import React from 'react';
import anshuman from "../assets/anshuman.svg";
import harshith from "../assets/harshith.svg";
import sripathi from "../assets/sripathi.svg";
import himanshu from "../assets/himanshu.svg";
import line from "../assets/line.svg";

const ProfileCards = () => {
  const profiles = [
    {
      name: 'Anshuman Singh',
      image: anshuman,
      description: 'Anshu loves tech and scalability, having built hundreds of products and driven significant growth in the past 13 years. He approaches business problems like chess challenges, drawing from his expertise as a chess master. Outside of work, Anshu enjoys playing carrom and tennis, balancing his strategic mind with fun and competition.',
      linkedIn: 'https://www.linkedin.com/in/anshum4n/',
    },
    {
      name: 'Harshit Singhal',
      image: harshith,
      description: 'Harshit loves business and has supercharged the growth trajectory for HashedIn, significantly expanding the mid-market segment for Deloitte. Previously, he co-founded Auctus Advisors, a strategy consulting firm acquired by YCP, and worked as a management consultant with SDG. Passionate about history, Harshit also enjoys diving deep into the past to draw lessons for the future.',
      linkedIn: 'https://www.linkedin.com/in/harshitsinghal01/',
    },
    {
      name: 'Himanshu Varshney',
      image: himanshu,
      description: "Himanshu is a people person. Along with leading HashedIn, he has championed the creation of an open culture at Deloitte Engineering and was recognized as one of India's Top 25 Trusted Leaders by GPTW. Formerly with Trilogy, Himanshu is also an All-Star sportsman from IIT Guwahati and HashedIn. He remains active in various sports, continually fostering teamwork and spirit.",
      linkedIn: 'https://www.linkedin.com/in/himanshuhv/',
    },
    {
      name: 'Sripathi Krishnan',
      image: sripathi,
      description: "Sri is a tech guy who served as the CTO and MD of Modern Software Engineering at Deloitte US, where he was responsible for technology strategy and GenAI innovation. He previously founded RDBTools, acquired by RedisLabs. Known as a champ for GenAI CoE, Sri is also a foodie who loves hosting and attending parties, blending his passion for technology with a zest for life.",
      linkedIn: 'https://www.linkedin.com/in/sripathikrishnan/',
    },
  ];

  return (
    <div className='mt-10 mb-14'>
        <h1 className=' text-center font-roboto font-extrabold  lg:text-5xl text-4xl'>Meet Our <span className='text-orange-500'>Founders</span></h1>
        <img className='m-auto mt-5' src={line}/>
        <div className="flex justify-center gap-12 mt-16 flex-wrap">
        {profiles.map((profile, index) => (
            <div
            key={index}
            className="relative group w-80 h-96 flex flex-col items-center"
            >
            {/* Circular Image */}
            <img
                src={profile.image}
                alt={profile.name}
                className="w-46 h-46 object-cover mt-12 rounded-full transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-0"
            />

            {/* Name below the image */}
            <h2
                className={"mt-4 font-roboto text-2xl font-semibold text-orange-500 group-hover:opacity-0"}
            >
                {profile.name}
            </h2>

            {/* Hidden Info on Hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left p-4 px-6"> {/* Added text-center for alignment */}
                <p className="text-sm font-roboto text-gray-300">{profile.description}</p>

                {/* LinkedIn Button */}
                <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 bg-white font-roboto text-orange-500 py-2 w-full px-4 rounded-md hover:bg-orange-500 hover:text-white transition-colors text-center"
                >
                LinkedIn
                </a>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default ProfileCards;
