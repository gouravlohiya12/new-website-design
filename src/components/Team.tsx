import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Team() {
  const specialists = [
    { name: "Naidan Smith", role: "PEDIATRIC CLINIC", img: "https://picsum.photos/seed/doc1/400/500" },
    { name: "Danial Frankie", role: "DOCTOR", img: "https://picsum.photos/seed/doc2/400/500" },
    { name: "Alexa Jhon", role: "DOCTOR", img: "https://picsum.photos/seed/doc3/400/500" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <span className="section-subtitle">OUR TEAM</span>
        <h2 className="section-title">Meet Our Heart Specialists</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {specialists.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Social Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                  <button className="bg-primary text-white p-2 rounded hover:bg-secondary transition-colors">
                    <Facebook size={18} />
                  </button>
                  <button className="bg-primary text-white p-2 rounded hover:bg-secondary transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="bg-primary text-white p-2 rounded hover:bg-secondary transition-colors">
                    <Instagram size={18} />
                  </button>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-1">{doc.name}</h3>
                <span className="text-primary text-xs font-bold tracking-widest">{doc.role}</span>
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
