import React from 'react';

interface HeaderProps {
  text: string;
  subText: string;
}

const Header: React.FC<HeaderProps> = ({ text, subText }) => {
  return (
    <header className="text-center p-8 mb-1 bg-gray-100 rounded-t-lg">
      <h1 className="text-4xl font-bold mb-2">{text}</h1>
      <p className="text-lg text-gray-600">{subText}</p>
    </header>
  );
};

export default Header;