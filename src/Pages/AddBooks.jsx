import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddBooks = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const bookName = e.target.name.value;
        const bookImage = e.target.image.value;
        const author = e.target.author.value;
        const bookDetails = e.target.bookDetails.value;

        const bookInfo = { bookName, bookImage, bookDetails, author };
        console.log(bookInfo);
        axios
          .post("https://smuct-backend.vercel.app/addBook", bookInfo)
          .then(() => {
            e.target.reset();
            toast.success("Successfully Inserted!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          })
          .catch(() => {});
    }
    return (
      <div>
        <h1 className="text-4xl text-center py-8">Add your book</h1>
        <form
         onSubmit={handleSubmit}
          className="flex flex-col items-center h-[60vh] justify-center"
          action=""
        >
          <label className="t" htmlFor="">
            Book Name
          </label>
          <input
            className="w-[500px] my-3 border border-[#201F5E] rounded-lg px-4 py-2"
            type="text"
            name="name"
          />
          <label htmlFor="">Book Image Link</label>
          <input
            className="w-[500px] my-3 border  border-[#201F5E] rounded-lg px-4 py-2"
            type="text"
            name="image"
          />
          <label htmlFor="">Author Name</label>
          <input
            className="w-[500px] my-3 border  border-[#201F5E] rounded-lg px-4 py-2"
            type="text"
            name="author"
          />
          <label htmlFor="">Book Details</label>
          <textarea
            className="w-[500px] my-3 border  border-[#201F5E] rounded-lg px-4 py-2"
            rows={10}
            type="text"
            name="bookDetails"
          />
          <input
            className="w-[100px] bg-[#201F5E] px-4 py-2 rounded-lg text-white"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
};

export default AddBooks;