import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllBooks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://smuct-backend.vercel.app/books"); // Adjust the URL as needed
          setData(response.data);
        } catch (error) {
          console.error("Failed to fetch data:", error);
          // Handle errors appropriately
        }
      };

      fetchData();
    }, []);
    console.log(data)
    return (
      <div className='min-h-screen m-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data?.map((book, idx) => (
            <div key={idx} className="w-[600px] border shadow-md flex gap-4 p-6 rounded-lg">
              <img
                className="h-[300px] w-[200px]"
                src={book?.bookImage}
                alt=""
              />
              <div className="space-y-8">
                <h1 className="text-2xl font-medium">Book : {book?.bookName}</h1>
                <h1 className="text-lg font-medium">Author : {book?.author}</h1>
                <p className='text-gray-500 truncate overflow-hidden text-wrap'>{book?.bookDetails}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AllBooks;