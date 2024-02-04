import React from 'react';
import Heading from '../../shared/Heading/Heading';
import Lcard from '../../ui/Lcard/Lcard';
import "./LatestBook.css"

const LatestBooks = () => {
const bookDetails = [
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    publicationDate: "September 8, 2020",
    genre: ["Self-help", "Personal Finance"],
    publishers: [
      "Jaico Publishing House (India)",
      "The Collins Publishing Company (US/UK)",
    ],
    language: "English",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg",
  },
  {
    title: "Journey to the Unknown",
    author: "Alice Stevenson",
    publicationDate: "April 12, 2018",
    genre: ["Mystery", "Thriller"],
    publishers: ["Thriller Press", "Mysterious Books Co."],
    language: "English",
    img: "https://d1ldy8a769gy68.cloudfront.net/300/978/059/317/841/6/9780593178416.jpg",
  },
  {
    title: "Beyond the Stars",
    author: "David Mitchell",
    publicationDate: "November 5, 2019",
    genre: ["Science Fiction", "Adventure"],
    publishers: ["Galactic Books", "Stellar Publishing"],
    language: "English",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1572736974i/48669002.jpg",
  },
  {
    title: "Whispers in the Shadows",
    author: "Emily Harper",
    publicationDate: "July 20, 2021",
    genre: ["Horror", "Suspense"],
    publishers: ["Darkened Pages", "Eerie House Publishing"],
    language: "English",
    img: "https://image-proxy.andisearch.com/b4783eabd3bf51a4f340529abf40f549177be256/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f532f636f6d707265737365642e70686f746f2e676f6f6472656164732e636f6d2f626f6f6b732f31363830303430353637692f3132333932393034322e6a7067",
  },
  {
    title: "Echoes of Eternity",
    author: "Michael Fitzgerald",
    publicationDate: "February 3, 2017",
    genre: ["Fantasy", "Magic"],
    publishers: ["Enchanted Press", "Mystical Books Ltd."],
    language: "English",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzSYkchP1RBge6p_HAq0jf2skUcf5-dxRwn89r_felEZ_SI5vZAVZjpm-qxicTG2MzUU&usqp=CAU",
  },
  {
    title: "A Symphony of Colors",
    author: "Isabella Cruz",
    publicationDate: "June 10, 2022",
    genre: ["Romance", "Drama"],
    publishers: ["Love Stories Publishing", "Heartfelt Novels Co."],
    language: "English",
    img: "https://rukminim2.flixcart.com/image/850/1000/kjiwfbk0-0/book/p/3/c/symphony-of-colors-original-imafz3yxfe65jnw3.jpeg?q=90&crop=false",
  },
  {
    title: "Lost in Time",
    author: "Christopher Anderson",
    publicationDate: "December 15, 2015",
    genre: ["Historical Fiction", "Time Travel"],
    publishers: ["Timeless Books", "Historia Publications"],
    language: "English",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651062928l/60522318.jpg",
  },
  {
    title: "Infinite Possibilities",
    author: "Sophia Roberts",
    publicationDate: "March 8, 2020",
    genre: ["Sci-Fi", "Dystopian"],
    publishers: ["Futuristic Press", "Limitless Novels"],
    language: "English",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347699931i/6601221.jpg",
  },
  {
    title: "The Enchanted Garden",
    author: "Olivia Harper",
    publicationDate: "October 1, 2016",
    genre: ["Children's", "Fantasy"],
    publishers: ["Magical Tales Publishing", "Dreamland Books"],
    language: "English",
    img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41wPq2v0uyL.jpg",
  },
  {
    title: "Hidden Truths",
    author: "Nathan Reynolds",
    publicationDate: "May 18, 2018",
    genre: ["Suspense", "Mystery"],
    publishers: ["Enigma Books", "Cryptic Novels Inc."],
    language: "English",
    img: "https://m.media-amazon.com/images/I/71e+VveS9TL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Echoes of Silence",
    author: "Emma Thompson",
    publicationDate: "August 22, 2021",
    genre: ["Drama", "Contemporary"],
    publishers: ["Silent Stories Press", "Serene Publishing"],
    language: "English",
    img: "https://m.media-amazon.com/images/I/51mPsyC0oZL._AC_UF350,350_QL50_.jpg",
  },
  {
    title: "The Midnight Chronicles",
    author: "Benjamin White",
    publicationDate: "January 7, 2019",
    genre: ["Fantasy", "Adventure"],
    publishers: ["Epic Tales Publishing", "Mystical Realms Co."],
    language: "English",
    img: "https://m.media-amazon.com/images/I/51fs58QSAQL._AC_UF894,1000_QL80_.jpg",
  },
];

console.log(bookDetails);

    return (
      <div className="overflow-hidden">
        <Heading
          title="Latest books"
          subTitle="Embark on an Epic Journey through Our Categories and Immerse Yourself in Thrilling Adventures"
        ></Heading>
        <div className="w-full flex items-center py-10 flex-nowrap relative">
          <div className="flex marquee gap-10">
            {bookDetails.map((book, idx) => (
              <Lcard key={idx} book={book}></Lcard>
            ))}
          </div>
          <div className="absolute left-0 w-[150px] h-full bg-gradient-to-r from-white via-white/40  to-transparent"></div>
          <div className="absolute right-0 w-[150px] h-full bg-gradient-to-l from-white via-white/40  to-transparent"></div>
        </div>
      </div>
    );
};

export default LatestBooks;