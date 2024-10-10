import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { insightsData } from '../data/componentData'; // Adjust the path as needed

export default function Insights({ data }) {
  const navigate = useNavigate();

  const handleReadMoreClick = (post) => {
    navigate("/ReadmoreBlogs", { state: { post } });
  };

  const handleExternalLinkClick = (link) => {
    window.open(link, '_blank'); // Open LinkedIn link in a new tab
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.blogPosts.length - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < data.blogPosts.length - 2 ? prevIndex + 1 : 0));
  };

  const displayedPosts = data.blogPosts.slice(currentIndex, currentIndex + 2);

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4 py-12 bg-gray-100 relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {displayedPosts.map((post, index) => (
          <motion.div
            key={index}
            variants={itemVariants(index)}
            className="bg-black overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.image} // Use the image property from the post
              alt={post.title}
              className="w-full md:w-1/2 h-48 md:h-auto object-cover"
            />
            <div className="p-6 flex flex-col justify-between md:w-1/2 text-white">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-roboto font-semibold mb-3 leading-tight flex-grow">{post.title}</h3>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white font-roboto text-[#7C7C7C] px-2 py-1 text-sm rounded hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      if (index === 0) {
                        handleReadMoreClick(post);
                      } else {
                        handleExternalLinkClick(post.link);
                      }
                    }}
                    className="self-center mt-2 mb-4 border-2 border-white text-white py-2 px-4 rounded hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {index === 0 ? (post.linkText || 'Read More') : (post.linkText || 'View on LinkedIn')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </motion.div>
  );
}
