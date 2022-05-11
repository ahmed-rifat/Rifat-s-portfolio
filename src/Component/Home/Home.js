import React from 'react';
import Info from '../Info/Info';
import Banner from './Banner';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;