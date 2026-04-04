import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqsData = [
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes 3–7 business days depending on your location.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, you can return products within 7 days of delivery.",
  },
  {
    question: "What payment methods are available?",
    answer: "We support PayPal, credit/debit cards, and UPI.",
  },
  {
    question: "Is my payment secure?",
    answer: "Yes, all transactions are encrypted and secure.",
  },
  {
    question: "How can I track my order?",
    answer: "Go to 'My Orders' section to track your shipment.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqsData.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      <h1 className="text-4xl font-bold text-center mb-6">FAQs</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search your question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg mb-8 focus:ring-2 focus:ring-black"
      />

      {/* FAQ LIST */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{faq.question}</h3>
              <FiChevronDown
                className={`transition ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="text-gray-600 mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;