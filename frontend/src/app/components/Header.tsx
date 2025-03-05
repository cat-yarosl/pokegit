import React from 'react';

interface HeaderProps {
  text: string;
  subText: string;
  imgSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ text, subText }) => {
  return (
    <header className='
      flex
      flex-row
      text-center 
      p-8 
      bg-gray-700 
      rounded-t-lg
    '>
      <img 
        src='/logo.png' 
        alt='Pokemon Finder Logo' 
        className='
          w-20 
          h-20 
          mr-4
      '/>
      <div className='
        flex
        flex-col
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
      </div>
    </header>
  );
};

export default Header;