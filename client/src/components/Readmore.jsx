import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ThumbsUp, Share2 } from "lucide-react";

function ReadMore() {
  const location = useLocation();
  const { post } = location.state || {};
  const navigate = useNavigate();

  if (!post) {
    return <div>No content available</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleLike = () => {
    alert("You liked this post!");
  };

  const handleShare = () => {
    alert("Share functionality to be implemented.");
  };

  const renderSection = (section, index) => {
    switch (section.type) {
      case "heading":
        const HeadingTag = `h${section.level}`;
        return (
          <HeadingTag
            key={index}
            className={`text-${section.level === 2 ? '2xl' : '4xl'} font-bold mb-2`}
            dangerouslySetInnerHTML={{ __html: section.text }}
          />
        );
      case "paragraph":
        return (
          <p
            key={index}
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: section.text }}
          />
        );
      default:
        return null;
    }
  };

  const renderSections = () => {
    if (post.content1 && post.content1.sections) {
      return post.content1.sections.map((section, index) => renderSection(section, index));
    } else {
      return <p>No content available</p>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg mt-4 sm:mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-500 hover:text-gray-700 mb-2 sm:mb-0"
        >
          <ArrowLeft className="mr-2" /> Back
        </button>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <button
            onClick={handleLike}
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <ThumbsUp className="mr-2" /> Like
          </button>
          <button
            onClick={handleShare}
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <Share2 className="mr-2" /> Share
          </button>
        </div>
      </div>

      <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">{post.title}</h1>
      <p className="text-gray-600 text-sm sm:text-md mb-2">
        {/* By {post.author} | {post.date} | {post.readTime} */}
      </p>
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs sm:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto object-cover mb-4 sm:mb-6 rounded-lg shadow-lg"
      />

      <div className="mt-4 sm:mt-6 text-gray-800 leading-relaxed text-sm sm:text-base">
        {renderSections()}
        <p className="mt-4 sm:mt-6">{post.content2}</p>
      </div>
    </div>
  );
}

export default ReadMore;