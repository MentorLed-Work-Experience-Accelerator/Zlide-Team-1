import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="md:bg-gradient-to-r md:from-[#115] md:from-12.95% md:via-[#017] md:via-49.12% md:to-violet-800 md:to-887.71% bg-gradient-to-br from-[#115] from-2% via-[#017] via-30% to-violet-800 to-80% w-full md:h-[65vh] h-[60vh] flex justify-center items-center">
      <h2 className="text-6xl text-center font-bold text-white">{title}</h2>
    </div>
  );
};

export default Header;
