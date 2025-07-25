const offerings = [
  {
    title: 'Office Consumables',
    desc: 'Paper, toners, pens—everything your team needs to stay productive.',
    icon: '🖨️'
  },
  {
    title: 'IT & Office Equipment',
    desc: 'Printers, copiers, shredders, laptops and more from leading brands.',
    icon: '💻'
  },
  {
    title: 'Equipment Leasing',
    desc: 'Preserve capital with flexible 12-, 24- or 36-month rental plans.',
    icon: '📑'
  },
  {
    title: 'Nationwide Logistics',
    desc: 'Next-day delivery to major metros, 48 hrs to outlying areas.',
    icon: '🚚'
  },
  {
    title: 'After-sales Service',
    desc: 'Certified technicians on call for maintenance and repairs.',
    icon: '🛠️'
  },
  {
    title: 'Custom Procurement',
    desc: 'Tailored catalogues and approval workflows for large enterprises.',
    icon: '📊'
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#2d3748 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-600 bg-brand-100 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Comprehensive Business Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Tailored services designed to keep South African businesses equipped and operational
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((service) => (
            <div
              key={service.title}
              className="bg-white group relative p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-brand-100"
            >
              <div className="absolute -top-5 left-6 w-12 h-12 flex items-center justify-center text-2xl bg-white rounded-lg shadow-sm group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-brand-600 hover:text-brand-700 cursor-pointer">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors shadow-sm">
            View Full Service Catalogue
          </button>
        </div>
      </div>
    </section>
  );
}