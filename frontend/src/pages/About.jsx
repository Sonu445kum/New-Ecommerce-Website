import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiShoppingBag, FiAward } from "react-icons/fi";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

      {/* HERO SECTION */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are building the future of eCommerce — fast, reliable, and customer-first.
        </p>
      </div>

      {/* IMAGE + STORY */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
          alt="about"
          className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
        />

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We are an innovative eCommerce company dedicated to delivering high-quality products
            directly to your doorstep. Built using modern technologies like the MERN stack,
            our platform ensures speed, security, and a seamless shopping experience.
          </p>
          <p className="text-gray-600">
            Our goal is simple — make online shopping easy, affordable, and enjoyable.
          </p>
        </div>
      </div>

      {/* STATS SECTION (VERY IMPORTANT 🔥) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition">
          <FiUsers className="text-3xl mx-auto mb-3 text-blue-600" />
          <h3 className="text-2xl font-bold">10K+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition">
          <FiShoppingBag className="text-3xl mx-auto mb-3 text-green-600" />
          <h3 className="text-2xl font-bold">5K+</h3>
          <p className="text-gray-600">Products Sold</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition">
          <FiAward className="text-3xl mx-auto mb-3 text-yellow-500" />
          <h3 className="text-2xl font-bold">99%</h3>
          <p className="text-gray-600">Customer Satisfaction</p>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the most customer-centric eCommerce platform where people can discover
            anything they want online with ease.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Deliver high-quality products at affordable prices while ensuring an exceptional
            shopping experience.
          </p>
        </div>
      </div>

      {/* CORE VALUES */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Customer First",
            "Innovation & Simplicity",
            "Integrity & Trust",
            "Quality Over Quantity",
            "Sustainable Growth",
            "Fast Delivery"
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-black text-white p-10 rounded-xl text-center space-y-4">
        <h3 className="text-2xl font-bold">Want to know more?</h3>
        <p className="text-gray-300">
          Our team is always ready to help you.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
};

export default About;