import React from 'react';
import Container from '../component/shared/Container/Container';
import BookCategory from '../component/HomeComponent/BookCategory/BookCategory';
import Hero from './../component/HomeComponent/Hero/Hero';

const Home = () => {
    return (
        <Container>
            <Hero></Hero>
            <BookCategory></BookCategory>
            
        </Container>
    );
};

export default Home;