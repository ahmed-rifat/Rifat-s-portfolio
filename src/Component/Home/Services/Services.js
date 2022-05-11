import React from 'react';
import developer from "../../../assets/icons/frontend.svg"
import "./Services.css"

const Services = () => {
    return (
        <div className='my-28 rounded-lg max-w-xxl lg:mx-80 md:mx-60 sm:mx-20'>
            <div className='text-center text-xl font-bold uppercase'>
                <h3 className='text-primary'>Services</h3>
                <progress class="progress w-56"></progress>

            </div>

            <div>
            <div class="card w-96 bg-base-100 shadow-xl lg:mx-28 mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <figure class="px-10 pt-10">
                    <img src={developer} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Front End Developer</h2>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    <h2 class="card-title mt-5">Languages</h2>
                    <p className='mt-5'>HTML5, CSS3, Bootstrap5, Tailwind.css, JavaScript, ES6, React.js, React-router, MongoDB, Express.js, Node.js, Heroku</p>
                    <h2 class="card-title mt-5">Dev Tools</h2>
                    <p>Visual Studio Code</p>
                    <p>GitHub</p>
                    <p>Chrome DevTools</p>
                    <p className='mb-10'>Bootstrap</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;