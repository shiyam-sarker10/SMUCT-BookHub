import React from 'react';
import horrorIcon from '../../../assets/horror.svg'
import sciFiIcon from "../../../assets/sciFiIcon.svg";
import mysteryIcon from "../../../assets/mysteryIcon.svg";
import fantasyIcon from "../../../assets/fantasyIcon.svg";
import historicalIcon from "../../../assets/historyIcon.svg";
import productivityIcon from "../../../assets/productivityIcon.svg";
import Button from '../../shared/Buttons/Button';
import Heading from '../../shared/Heading/Heading';

const BookCategory = () => {

    const categories = [
      {
        title: "Horror",
        svg: horrorIcon,
        desc: "Explore spooky tales and supernatural suspense in our Horror collection. Get ready for a thrilling reading experience",
      },
      {
        title: "Science Fiction",
        svg: sciFiIcon,
        desc: "Embark on futuristic adventures and explore distant galaxies in our Science Fiction collection. Immerse yourself in mind-bending concepts and innovative storytelling.",
      },
      {
        title: "Mystery",
        svg: mysteryIcon,
        desc: "Uncover gripping mysteries and solve thrilling puzzles in our Mystery category. Get ready for suspenseful plots and unexpected twists.",
      },
      {
        title: "Fantasy",
        svg: fantasyIcon,
        desc: "Journey into magical realms and mythical adventures in our Fantasy collection. Let your imagination soar with epic quests and fantastical creatures.",
      },
      {
        title: "Historical Fiction",
        svg: historicalIcon,
        desc: "Step back in time and explore historical events through captivating narratives in our Historical Fiction collection. Immerse yourself in rich, bygone eras.",
      },
      {
        title: "Productivity",
        svg: productivityIcon,
        desc: "Boost your efficiency and unlock your full potential with our Productivity collection. Dive into actionable strategies, time-management techniques, and inspirational guides to supercharge your personal and professional life.",
      },
    ];
    return (
      <div className='py-20'>
        <Heading
          title="All Categories"
          subTitle="Embark on an Epic Journey through Our Categories and Immerse Yourself in Thrilling Adventures"
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
          {categories?.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center border border-[#201F5E]/5 w-[350px] rounded-lg p-8 space-y-4  hover:scale-105 transition-all duration-500 shadow-[0px_0px_15px_2px_rgba(100,100,111,0.1)] mx-auto"
            >
              <img className="w-[80px]" src={category?.svg} alt="Horror" />
              <h4 className="text-center font-semibold text-[#201F5E] text-2xl">
                {category?.title}
              </h4>
              <div className="h-20 overflow-hidden">
                {" "}
                {/* Set a fixed height and hide overflow */}
                <p className="text-[#201F5E]/70 text-center text-sm font-medium flex-1">
                  {category?.desc}
                </p>
              </div>
              <Button title="Explore"></Button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default BookCategory;