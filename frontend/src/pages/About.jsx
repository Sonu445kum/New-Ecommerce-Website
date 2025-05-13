import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about our mission, values, and what drives us.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          We are an innovative eCommerce company dedicated to bringing quality products to your doorstep.
          Our platform was built with love using the MERN stack – MongoDB, Express.js, React.js, and Node.js.
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the most customer-centric eCommerce platform in the world, where anyone can find and discover anything they want to buy online.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To provide top-quality products at affordable prices while ensuring a seamless and enjoyable shopping experience for our customers.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Customer First</li>
          <li>Innovation & Simplicity</li>
          <li>Integrity & Trust</li>
          <li>Quality Over Quantity</li>
          <li>Sustainable Growth</li>
        </ul>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Got Questions?</h3>
        <p className="text-gray-600 mb-4">We'd love to hear from you. Contact us any time!</p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
