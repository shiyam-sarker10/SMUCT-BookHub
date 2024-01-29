import { Container } from 'postcss';
import React from 'react';
import Button from './../../shared/Buttons/Button';
import { HeroLottie } from './../../shared/LottieAnimation/LottieAnimation';

const Hero = () => {
    return (
      <div className="flex max-h-[calc(100sh-100px)]  md:max-h-[calc(100vh-100px)] items-center my-20 md:my-0">
        <div className="space-y-6 md:w-1/2 text-center md:text-left">
          <h1 className="text-[#201F5E] text-3xl md:text-4xl lg:text-5xl">
            Embark on a Literary Journey
          </h1>
          <p className="text-[#201F5E]/80 ">
            Indulge in a curated selection of books, spanning captivating novels
            to insightful non-fiction. Discover stories that inspire, captivate,
            and expand your world. Your next great read awaits.
          </p>
          <div>
            <Button title="Explore Books"></Button>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block">
          <HeroLottie></HeroLottie>
        </div>
      </div>
    );
};

export default Hero;