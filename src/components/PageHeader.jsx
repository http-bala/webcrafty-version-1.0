import React from 'react';

const PageHeader = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative h-64 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
      <h1 className="relative text-4xl font-bold z-10">{title}</h1>
    </div>
  );
};

export default PageHeader;
