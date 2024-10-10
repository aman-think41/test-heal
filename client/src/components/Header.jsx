import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.querySelector('.hero-section')?.offsetHeight || 0;
      setIsSticky(window.scrollY > heroSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleclick = () => {
    navigate('/');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      id="sticky-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-md' : 'bg-black bg-opacity-20'
      }`}
    >
      <div className="mx-auto px-2 sm:px-4 lg:px-16 py-1 sm:py-6 flex items-center justify-between">
        <div
          className={`text-2xl sm:text-2xl md:text-3xl font-bold font-roboto text-[#F68C20] py-2 px-4 cursor-pointer`}
          onClick={handleclick}
        >
          {data.logo}
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-roboto px-4">
          <ul className="flex space-x-10">
            {data.menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`text-lg md:text-xl hover:text-[#F68C20] transition-colors duration-300 ${
                    isSticky ? 'text-black' : 'text-white'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex items-center justify-center py-1 px-4 ${
            isSticky ? 'text-black' : 'text-white'
          }`}
          onClick={toggleMenu}
          style={{ lineHeight: 1 }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 z-50 ${
            isSticky ? 'bg-white shadow-md' : 'bg-white bg-opacity-30'
          }`}
        >
          <nav className="max-w-[1920px] mx-auto px-2 sm:px-12 lg:px-16 py-4 w-full">
            <ul className="space-y-4">
              {data.menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`block text-base sm:text-lg hover:text-[#F68C20] transition-colors duration-300 ${
                      isSticky ? 'text-black' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
