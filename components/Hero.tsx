import React from 'react';

const Hero: React.FC = () => {




  return (
    <header className="bg-white dark:bg-gray-900">


      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Welcome to Our <br /> Plant <span className="text-green-500 ">Paradise!</span></h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">Discover a wide variety of plants to bring nature into your home. From lush greens to vibrant blooms, we have everything you need to create your own botanical oasis.</p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto hover:bg-green-400 focus:outline-none focus:bg-green-500">Explore Plants</button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-full h-full lg:max-w-3xl" src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg" alt="Catalogue-pana.svg" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
