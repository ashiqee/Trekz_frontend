'use client'
import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactPage = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(formData);
    toast.success('Thank you for contacting us!');
  };

  return (
    <section
      className="relative bg-gradient-to-b dark:from-slate-900/15 dark:to-slate-900/20 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-bold  mb-8">Contact Us</h1>
        <p className="text-lg max-w-xl mx-auto  mb-10">
          We’d love to hear from you! Please fill out the form below and we will get in touch with you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto  p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left  font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              name="name"
              placeholder="Your Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-left  font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              name="email"
              placeholder="Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-left  font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
             />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
