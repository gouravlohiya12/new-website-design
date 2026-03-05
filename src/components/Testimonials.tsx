import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nadim Kamal",
      role: "CANCER RESEARCH",
      img: "https://picsum.photos/seed/user1/100/100",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable."
    },
    {
      name: "Dr. John Martin",
      role: "NEUROLOGY",
      img: "https://picsum.photos/seed/user2/100/100",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <span className="section-subtitle">OUR CLIENTS</span>
        <h2 className="section-title">Our Client Happy Say About Us</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-lg shadow-md relative">
              <p className="text-slate-600 italic mb-8 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xl font-bold text-secondary">{t.name}</h4>
                  <span className="text-primary text-xs font-bold tracking-widest">{t.role}</span>
                </div>
              </div>
              <div className="absolute bottom-10 right-10 text-slate-100">
                <Quote size={64} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
