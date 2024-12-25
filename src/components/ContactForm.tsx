import React, { useState } from 'react';

const SERVICES = [
  'Custom Cakes',
  'Fresh Pastries',
  'Coffee & Tea',
  'Gift Boxes',
  'Other'
] as const;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form Submit Successfully", formValues);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Thank You!</h2>
        <p className="text-gray-600">We have received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={submitHandler}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name='phoneNumber'
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Service Interested In</label>
          <select 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white"
            name='service'
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service.toLowerCase().replace(/ & /g, '-')}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea
          rows={4}
          name="message"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-semibold transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;