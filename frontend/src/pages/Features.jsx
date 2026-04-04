import React from "react";
import { FiTruck, FiShield, FiRefreshCw, FiCreditCard } from "react-icons/fi";

const features = [
  {
    icon: <FiTruck />,
    title: "Fast Delivery",
    desc: "Get your products delivered quickly and reliably.",
  },
  {
    icon: <FiShield />,
    title: "Secure Payments",
    desc: "All transactions are encrypted and safe.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Easy Returns",
    desc: "Hassle-free return policy within 7 days.",
  },
  {
    icon: <FiCreditCard />,
    title: "Multiple Payment Options",
    desc: "Pay using cards, PayPal, or UPI.",
  },
];

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Features</h1>
        <p className="text-gray-600 mt-3">
          Everything you need for a seamless shopping experience.
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
          >
            <div className="text-3xl mb-4 text-blue-600">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-black text-white p-10 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-2">
          Ready to shop?
        </h2>
        <p className="text-gray-300 mb-4">
          Explore our products and enjoy the experience.
        </p>

        <a
          href="/collections/all"
          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Features;