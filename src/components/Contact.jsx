import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // integrate endpoint here
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#2d3748 0.5px, transparent 0.5px)",
          backgroundSize: "15px 15px"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-brand-600 to-green-700 p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="opacity-90">
              We're here to help and answer any questions you might have
            </p>
          </div>
          
          {/* Form Section */}
          <div className="p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We've received your message and will be in touch within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 border border-transparent text-sm font-medium rounded-md text-brand-600 bg-brand-50 hover:bg-brand-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-3 border"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 text-white py-3 rounded-md font-semibold hover:bg-brand-700 transition-colors shadow-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info Section */}
          <div className="bg-gray-50 p-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start">
                    <svg className="h-5 w-5 text-brand-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    comfortmasuku04@gmail.com
                  </p>
                  <p className="flex items-start">
                    <svg className="h-5 w-5 text-brand-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +27 71 575 2822
                  </p>
                  <p className="flex items-start">
                    <svg className="h-5 w-5 text-brand-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Stand No 2121, Tjakastad, Mpumalanga, 1193
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">07:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">08:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">08:00 - 13:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}