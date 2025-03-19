import React from 'react';
import shirtImg from "../../assets/landingPage.avif";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Image */}
      <img 
        src={shirtImg} 
        alt="shirtImage" 
        className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-5">
            Explore our vacation-ready outfits with fast worldwide shipping
          </p>
          <Link 
            to="#" 
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg 
                       hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
