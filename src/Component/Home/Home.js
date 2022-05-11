import React from 'react';
import Info from '../Info/Info';
import Banner from './Banner';
import Footer from './Footer/Footer';
import Form from './Form/Form';
import ProjectsShow from './ProjectsShow/ProjectsShow';
import Services from './Services/Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ProjectsShow></ProjectsShow>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;