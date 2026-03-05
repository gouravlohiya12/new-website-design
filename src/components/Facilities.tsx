import React from 'react';
import { Eye, Heart, Activity } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: "Eye Care Services",
      image: "https://picsum.photos/seed/eye/400/300",
      icon: <Eye className="text-primary" size={32} />,
      category: "MEDICAL SURGERY"
    },
    {
      title: "Cardiology Services",
      image: "https://picsum.photos/seed/heart/400/300",
      icon: <Heart className="text-primary" size={32} />,
      category: "MEDICAL THERAPY"
    },
    {
      title: "Dental Services",
      image: "https://picsum.photos/seed/dental/400/300",
      icon: <Activity className="text-primary" size={32} />,
      category: "MEDICAL PEDIATRICS"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <span className="section-subtitle">FACILITIES WE HAVE</span>
        <h2 className="section-title">What Facilities We Provided</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((f, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex items-center justify-between">
                <div>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                    {f.category}
                  </span>
                  <h3 className="text-xl font-bold text-secondary">{f.title}</h3>
                </div>
                <div className="bg-slate-100 p-3 rounded-lg">
                  {f.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
