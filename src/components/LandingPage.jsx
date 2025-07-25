import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      {/* Hero with Background Image */}
      <section className="relative bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-[url('/src/assets/hero-image.png')] bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/hero-image.png')"
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Connecting Businesses, Powering Growth. <br className="hidden md:block" />
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
            Your seamless bridge to quality business supplies across South Africa. 
            We deliver more than products - we deliver reliability,
            efficiency and peace of mind to your doorstep, 7 days a week.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-brand-700 transition-colors"
            >
              Book a Consultation
            </Link>
            <a
              href="/brochure.pdf"
              download
              className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <dt className="text-4xl font-bold text-brand-600">9 Provinces</dt>
              <dd className="mt-2 text-gray-600">Covered Daily</dd>
            </div>
            <div>
              <dt className="text-4xl font-bold text-brand-600">100%</dt>
              <dd className="mt-2 text-gray-600">Reliability</dd>
            </div>
            <div>
              <dt className="text-4xl font-bold text-brand-600">24/7</dt>
              <dd className="mt-2 text-gray-600">Support Hotline</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}