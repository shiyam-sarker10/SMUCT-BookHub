import React from 'react';

const Lcard = ({ book }) => {
  return (
    <div className="bg-[#CDD3F7]/30 group w-[250px] p-4 rounded-lg relative overflow-hidden">
      <img
        className="w-full h-full object-cover object-top"
        src={book?.bookImage}
        alt=""
      />
      <div className="absolute  bg-gradient-to-t from-[#362E94] to-transparent duration-500 group-hover:opacity-100 inset-0 opacity-0 z-20">
        <h1 className="absolute bottom-5 text-white left-[50%] -translate-x-1/2 font-medium group-hover:bottom-10 duration-500 opacity-0 group-hover:opacity-100 whitespace-nowrap">
          {book?.bookName}
        </h1>
      </div>
    </div>
  );
};

export default Lcard;