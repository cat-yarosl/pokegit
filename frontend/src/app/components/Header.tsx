import React from 'react';

interface HeaderProps {
  text: string;
  subText: string;
}

const Header: React.FC<HeaderProps> = ({ text, subText }) => {
  return (
    <header className='
      text-center 
      p-8 
      bg-gray-700 
      rounded-t-lg
    '>
      <h1 className='
        text-4xl 
        font-bold 
        mb-2 
        text-white
      '>
        {text}
      </h1>
      <p className='
        text-lg 
        text-gray-300
      '>
        {subText}
      </p>
    </header>
  );
};

export default Header;