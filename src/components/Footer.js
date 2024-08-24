import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center p-4 fixed bottom-0 left-0 w-full flex justify-center items-center z-10">
      <a
        href="https://www.linkedin.com/in/aur%C3%A9lie-besnard-hn/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black"
      >
        Aurélie Besnard
      </a>
      <span className="mx-2">|</span>
      <span className="text-gray-600">
        &copy; {currentYear}
      </span>
    </footer>
  );
};

export default Footer;
