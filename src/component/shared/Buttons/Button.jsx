import React from 'react';

const Button = ({title}) => {
    return (
      <button className="bg-[#201F5E] text-white px-4 py-2 rounded-md font-medium">
        {title}
      </button>
    );
};

export default Button;