import React from 'react';

const FeatureSection = () => {
  return (
    <section className="bg-green-50 dark:bg-green-900 mt-7">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-green-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome Components</h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-5 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-green-700 capitalize dark:text-white">New Components</h1>

              <p className="text-green-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-green-700 capitalize dark:text-white">New Components</h1>

              <p className="text-green-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-green-700 capitalize dark:text-white">New Components</h1>

              <p className="text-green-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-green-700 capitalize dark:text-white">New Components</h1>

              <p className="text-green-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
            </div>
            {/* Repeat this structure for other features */}
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.pexels.com/photos/12652586/pexels-photo-12652586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
