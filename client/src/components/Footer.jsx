import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";  // Import useLocation
import facebook from "../assets/facebook.svg";
import linkdin from "../assets/linkdin.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import instagram from "../assets/instagram.svg";
import map from "../assets/map.svg";

export default function Footer({ data }) {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const hoverTimerRef = useRef(null);
  const location = useLocation();  // Get current location

  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      setIsEnlarged(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimerRef.current);
    setIsEnlarged(false);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Ensures smooth scrolling to the top
      });
    }
  }, [location]); // Add location as a dependency

  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <h1 className="lg:text-2xl md:text-1xl sm:text-xl text-orange-500 font-semibold mb-4">
              Think41
            </h1>
            <ul className="text-lg">
              <li>Crafting intelligent</li>
              <li>software to solve your</li>
              <li>unique challenges</li>
            </ul>
          </div>

          <div className="lg:col-span-1 lg:ml-24">
            <h3 className="lg:text-2xl md:text-1xl sm:text-xl text-orange-500 font-semibold mb-4">
              {data.quickLinksTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {data.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 lg:ml-24">
            <h3 className="lg:text-2xl md:text-1xl sm:text-xl text-orange-500 font-semibold mb-4">
              {data.demosTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {data.demos.map((demo, index) => (
                <li key={index}>
                  <Link
                    to={demo.href}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {demo.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="lg:text-2xl md:text-1xl sm:text-xl text-orange-500 font-semibold mb-4">
              {data.contactInfoTitle}
            </h3>
            <div className="text-sm space-y-2">
              <address className="not-italic">
                {/* <p>{data.addressLabel}:</p> */}
                {data.contactInfo.address}
              </address>
              <p className="flex items-center gap-2">
                <img src={mail} alt="email" />
                <a
                  href={`mailto:${data.contactInfo.email}`}
                  className="hover:text-orange-500"
                >
                  {data.contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <img src={phone} alt="phone" />
                {data.phoneLabel}:{" "}
                <a
                  href={`tel:${data.contactInfo.phone}`}
                  className="hover:text-orange-500"
                >
                  {data.contactInfo.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1 lg:ml-24">
            <h3 className= "lg:ml-0 ml-5 lg:text-2xl md:text-1xl sm:text-xl text-orange-500 font-semibold mb-1">
              Find us here
            </h3>
            <a
              href={data.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-36 h-36 relative flex justify-center items-center cursor-pointer" // Flex applied here
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`transition-transform duration-300 ease-in-out ${
                  isEnlarged ? "scale-125" : "scale-100"
                }`}
              >
                <img
                  src={map}
                  alt="THINK41 office location map"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
                  isEnlarged ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-white text-lg font-semibold">
                  {data.mapViewText}
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center mb-6">
          <div className="flex space-x-10">
            {data.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors"
                aria-label={social.name}
              >
                {social.name === "Facebook" && (
                  <img src={facebook} alt="facebook" />
                )}
                {social.name === "Instagram" && (
                  <img src={instagram} alt="instagram" />
                )}
                {social.name === "LinkedIn" && (
                  <img src={linkdin} alt="linkedin" />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center text-center text-xs sm:text-sm text-gray-400">
          <p>{data.copyright} &nbsp;</p>
          <p>
            <Link
              to={data.privacyPolicy.href}
              className="hover:text-orange-500 transition-colors"
            >
              {data.privacyPolicy.text}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}