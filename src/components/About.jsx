export default function About() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/src/assets/about.png')] bg-cover bg-center opacity-85"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/src/assets/about.png')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Founded in 2024 by directors <span className="font-semibold text-brand-600">Sbusiso</span> and <span className="font-semibold text-brand-600">Sebenzile Masuku</span>, we're more than a supplier - we're your strategic partner in business growth.
            </p>
            
            <p className="text-lg leading-relaxed">
              With deep roots in <span className="font-semibold">Tjakastad</span> and a vision that spans the nation, we combine local understanding with national capabilities to keep South African businesses moving forward.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">✓</span>
                  <span>Reliability in every delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">✓</span>
                  <span>Nationwide coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">✓</span>
                  <span>Personalized service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-600 mr-2">✓</span>
                  <span>Community-focused approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}