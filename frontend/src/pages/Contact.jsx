import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setFormStatus('Server error. Try again later.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 space-y-6">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
          />
        </div>

        {formStatus && <p className="text-center text-red-500">{formStatus}</p>}

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-10 text-center text-gray-600">
        <p>📍 123 Commerce Street, New York, NY 10001</p>
        <p>📞 (123) 456-7890</p>
        <p>📧 support@yourecommerce.com</p>
      </div>
    </div>
  );
};

export default Contact;
