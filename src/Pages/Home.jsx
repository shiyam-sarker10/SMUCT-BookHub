import React from 'react';
import Container from '../component/shared/Container/Container';
import BookCategory from '../component/HomeComponent/BookCategory/BookCategory';
import Hero from './../component/HomeComponent/Hero/Hero';
import LatestBooks from '../component/HomeComponent/LatestBooks/LatestBooks';

const Home = () => {
    return (
      <Container>
        <Hero></Hero>
        <BookCategory></BookCategory>
        <LatestBooks></LatestBooks>
      </Container>
    );
};

export default Home;