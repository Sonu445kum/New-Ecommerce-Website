import React from 'react'
import { Link } from 'react-router-dom';
import features from "../../assets/features.avif"
const FeaturedCollections = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-500 rounded-3xl'>
            {/* left content */}
            <div className='lg:w-1/2 p-8 text-center lg:text-left'>
            <h2 className='text-lg font-semibold'>Comfort And Style</h2>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>apparel made for everyday life </h2>
            <p className='text-lg text-gray-600 mb-6'>
                Our clothing is designed to be comfortable and stylish, perfect for everyday life. From casual wear to
                workWear, we have a wide range of options to suit your needs.  
            </p>
            <Link to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
            >
                Shop Now
            </Link>
            </div>
           {/* right Content */}
           <div className='lg:w-1/2'>
           <img src={features} alt="featured Collection" 
           className='w-half h-half object-cover lg:rounded-tr-3xl lg:rounded-br-3xl'
           />
           

           </div>
        </div>
    </section>
  )
}

export default FeaturedCollections
