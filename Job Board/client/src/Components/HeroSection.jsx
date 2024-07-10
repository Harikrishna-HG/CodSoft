import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-lime-400 py-10 px-4 md:px-24">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Left Section (Text Content) */}
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-3">4536+ Jobs listed</h1>
          <h2 className="text-4xl md:text-4xl lg:text-4xl font-extrabold mb-3">Find your Dream Job</h2>
          <p className="text-lg md:text-xl lg:text-xl mb-6">We provide online instant cash loans with quick approval that suit your term length</p>
          <button className="p-3 md:p-3 bg-blue-400 rounded-lg hover:text-white hover:bg-red-500">Upload Your Resume</button>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img className="rounded-xl shadow-xl md:rounded-2xl" src="https://img.freepik.com/free-vector/illustrated-business-person-meditating_52683-60757.jpg?t=st=1720261162~exp=1720264762~hmac=8db65434f065d77de7e5d9c7b58a34e2f568d1f04c4d043ec46d0930c9668137&w=740" alt="Illustration" />
        </div>
      </div>
    </section>  
  );
};

export default HeroSection;
