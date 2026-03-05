import React from 'react';
import { Heart, Activity, Stethoscope, Droplets, Eye, Brain, Bone, Microscope } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Angioplasty", icon: <Activity size={40} /> },
    { title: "Cardiology", icon: <Heart size={40} /> },
    { title: "Dental", icon: <Stethoscope size={40} /> },
    { title: "Endocrinology", icon: <Droplets size={40} /> },
    { title: "Eye Care", icon: <Eye size={40} /> },
    { title: "Neurology", icon: <Brain size={40} /> },
    { title: "Orthopaedics", icon: <Bone size={40} /> },
    { title: "RMI", icon: <Microscope size={40} /> }
  ];

  return (
    <section className="py-24">
      <div className="container">
        <span className="section-subtitle">OUR SERVICES</span>
        <h2 className="section-title">We Provide Various Directions</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-10 text-center border border-slate-100 rounded-lg hover:shadow-xl transition-all group hover:-translate-y-2">
              <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-6">There are many variations of passages of Lorem Ipsum available.</p>
              <a href="#" className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">
                READ MORE +
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
