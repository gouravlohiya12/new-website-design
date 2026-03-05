import React from 'react';

export default function Process() {
  const steps = [
    { title: "Emergency Care", num: "01", img: "https://picsum.photos/seed/p1/200/200" },
    { title: "Operation Theatre", num: "02", img: "https://picsum.photos/seed/p2/200/200" },
    { title: "Blood Test", num: "03", img: "https://picsum.photos/seed/p3/200/200" },
    { title: "Outdoor Checkup", num: "04", img: "https://picsum.photos/seed/p4/200/200" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dotted Line Decoration */}
      <div className="absolute top-1/2 left-0 w-full h-1 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 1200 100" fill="none">
          <path d="M50 50 Q 300 10, 600 50 T 1150 50" stroke="#007bff" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />
        </svg>
      </div>

      <div className="container relative z-10">
        <span className="section-subtitle">OUR STEP</span>
        <h2 className="section-title">Our Workig Best Processs</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center relative">
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute top-0 left-0 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm">There are many variations of passages Lorem Ipsum available.</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <button className="btn-primary">
            GET APPOINTMENT +
          </button>
        </div>
      </div>
    </section>
  );
}
