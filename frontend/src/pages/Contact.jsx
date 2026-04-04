import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('⚠️ Please fill in all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus('⚠️ Please enter a valid email.');
      return;
    }

    try {
      setLoading(true);
      setFormStatus('');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus(' Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('❌ Something went wrong.');
      }
    } catch (err) {
      setFormStatus('❌ Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 grid md:grid-cols-2 gap-10">

      {/* LEFT SIDE - CONTACT INFO */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600">
          We’d love to hear from you. Reach out anytime — we’re here to help!
        </p>

        <div className="space-y-4">
          <p className="flex items-center gap-3 text-gray-700">
            <FiMapPin /> 123 Commerce Street, New York
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <FiPhone /> (123) 456-7890
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <FiMail /> support@yourecommerce.com
          </p>
        </div>

        {/* Extra engagement */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium">⏱ Response Time</p>
          <p className="text-sm text-gray-600">We usually reply within 24 hours.</p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-6 space-y-5"
      >

        <div>
          <label className="text-gray-700">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-black transition"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-gray-700">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-black transition"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-black transition"
            placeholder="Your message..."
          />
          <p className="text-xs text-gray-400 mt-1">
            {formData.message.length}/200 characters
          </p>
        </div>

        {/* Status Message */}
        {formStatus && (
          <p className="text-center text-sm font-medium text-red-500">
            {formStatus}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md text-white transition ${
            loading ? "bg-gray-400" : "bg-black hover:bg-gray-800"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;