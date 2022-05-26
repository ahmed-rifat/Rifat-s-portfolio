import React from 'react';
import Info from '../Info/Info';
import Banner from './Banner';
import Footer from './Footer/Footer';
import ProjectsShow from './ProjectsShow/ProjectsShow';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <ProjectsShow></ProjectsShow>
            <Footer></Footer>
        </div>
    );
};

export default Home;