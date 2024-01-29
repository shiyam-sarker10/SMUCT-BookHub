import React from 'react';

const Heading = ({title,subTitle}) => {
    return (
      <div className='space-y-4 my-10'>
        <h1 className="text-3xl text-center font-medium text-[#201F5E]">
          {title}
        </h1>
        <p className=" text-[#201F5E]/70 mx-auto  text-center w-[40%]">{subTitle}</p>
      </div>
    );
};

export default Heading;