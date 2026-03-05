import React from 'react';
import { Heart, Activity, Shield, Plus, Zap } from 'lucide-react';

export default function Logos() {
  const brands = [
    { name: "DrugSto", icon: <Zap className="text-primary" /> },
    { name: "Hospita", icon: <Heart className="text-primary" /> },
    { name: "MEDICA", icon: <Plus className="text-primary" /> },
    { name: "HEALTH LOGO", icon: <Shield className="text-primary" /> },
    { name: "Hospital", icon: <Activity className="text-primary" /> }
  ];

  return (
    <section className="py-16 border-b border-slate-100">
      <div className="container">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <div className="bg-slate-100 p-2 rounded-lg">
                {brand.icon}
              </div>
              <span className="text-xl font-bold text-secondary tracking-tighter">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
