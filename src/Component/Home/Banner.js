import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Hi, I'm Ahmed Rifat</h1>
      <p class="py-6">I Completed graduation in computer science and engineering from North South University.I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
      <a href="https://drive.google.com/file/d/1TKR2FdSKwfFtiNKlCUhk89TBtf7_vHMD/view" target='_blank'>    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">VIEW RESUME</button>
</a>
    </div>
  </div>
</div>
    );
};

export default Banner;