import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: "HAPPY PATIENTS", value: "450+" },
    { label: "SAVED HEARTS", value: "100+" },
    { label: "EXPERT DOCTORS", value: "59+" }
  ];

  return (
    <section className="relative bg-secondary py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white h-full"></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              ABOUT US
            </span>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Joining Hands With Techno Easement
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            
            <div className="flex items-start gap-6 mb-10">
              <div className="bg-primary p-4 rounded-full text-white">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Infection Prevention</h4>
                <p className="text-white/60">There are many variations of passages of Lorem Ipsum available majority.</p>
              </div>
            </div>
            
            <button className="btn-primary">
              READ MORE +
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-primary text-xs font-bold tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
