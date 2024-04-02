import React, { useEffect, useState } from 'react';
import Heading from '../../shared/Heading/Heading';
import Lcard from '../../ui/Lcard/Lcard';
import "./LatestBook.css"
import axios from 'axios';

const LatestBooks = () => {

const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://smuct-backend.vercel.app/books"
      ); // Adjust the URL as needed
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      // Handle errors appropriately
    }
  };

  fetchData();
}, []);

    return (
      <div className="overflow-hidden">
        <Heading
          title="Latest books"
          subTitle="Embark on an Epic Journey through Our Categories and Immerse Yourself in Thrilling Adventures"
        ></Heading>
        <div className="w-full flex items-center py-10 flex-nowrap relative">
          <div className="flex marquee gap-10">
            {data.map((book, idx) => (
              <Lcard key={idx} book={book}></Lcard>
            ))}
          </div>
          <div className="absolute left-0 w-[50px] h-full bg-gradient-to-r from-white via-white/40  to-transparent"></div>
          <div className="absolute right-0 w-[50px] h-full bg-gradient-to-l from-white via-white/40  to-transparent"></div>
        </div>
      </div>
    );
};

export default LatestBooks;