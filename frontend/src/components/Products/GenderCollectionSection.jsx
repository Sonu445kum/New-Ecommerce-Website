import React from 'react'
import mensCollection from "../../assets/men'sCollection.jpg";
import womenColl from "../../assets/womenColl.jpg";
import { Link } from 'react-router-dom';
const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            {/* women's Collections */}
            <div className='relative flex-1'>
                <img src={womenColl} alt="women'sCollections"
                className='w-full h-[700] object-cover'
                />
                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women's Collection's</h2>
                    <Link to="/collections/all?gender=women"
                    className='text-gray-900 underline'
                    >
                    </Link>
                    Shop Now
                </div>
            </div>
            {/* men's Collections */}
            <div className='relative flex-1'>
                <img src={mensCollection} alt="men'sCollections"
                className='w-full h-[700] object-cover'
                />
                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>men's Collection's</h2>
                    <Link to="/collections/all?gender=men"
                    className='text-gray-900 underline'
                    >
                    </Link>
                   Shop Now 
                </div>
            </div>
        </div>

    </section>
  )
}

export default GenderCollectionSection
