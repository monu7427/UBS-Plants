import React from 'react';

const FeatureSection = () => {
  return (
    <section className="bg-green-50 dark:bg-green-900 mt-7">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-green-800 capitalize lg:text-3xl dark:text-white">Discover our <br /> Unique Plant Collection</h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-5 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-green-500">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
</svg>

              </span>

              <h1 className="text-xl font-semibold text-green-700 capitalize dark:text-white">Variety of Plants</h1>

              <p className="text-green-500 dark:text-gray-300">
                Explore our vast collection of indoor and outdoor plants, including succulents, tropicals, and more.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-green-500">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l3 3m0 0l3-3m-3 3V10" />
</svg>


              </span>

              <h1 className="text-xl font-semibold text-green-700 capitalize dark:text-white">Expert Advice</h1>

              <p className="text-green-500 dark:text-gray-300">
                Get expert tips and advice on plant care, maintenance, and creating your own indoor garden oasis.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-green-500">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M4 8h16l2 9H6l-2-9zm8 9v4m-4-4v4m8-4v4" />
</svg>

              </span>

              <h1 className="text-xl font-semibold text-green-700 capitalize dark:text-white">Easy Ordering</h1>

              <p className="text-green-500 dark:text-gray-300">
                Browse, select, and order your favorite plants online with ease. We offer convenient delivery options.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-green-500">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
</svg>

              </span>

              <h1 className="text-xl font-semibold text-green-700 capitalize dark:text-white">Plant Care Guides</h1>

              <p className="text-green-500 dark:text-gray-300">
                Access our comprehensive plant care guides to ensure your plants thrive in their new home.
              </p>
            </div>
            {/* Add more features as needed */}
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            {/* Image */}
            <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.pexels.com/photos/12652586/pexels-photo-12652586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
