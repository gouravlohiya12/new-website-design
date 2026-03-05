import React from 'react';
import { Check } from 'lucide-react';

export default function About() {
  const points = [
    "Comprehensive Inpatient Services",
    "Medical And Surgical Services",
    "Outpatient Services",
    "Medicine & Instrument",
    "Specialised Support Service",
    "Instant Operation & Appointment"
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/medical-about/600/500" 
              alt="Medical Team" 
              className="rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 hidden xl:block">
              <img 
                src="https://picsum.photos/seed/medical-about-2/300/200" 
                alt="Medical Equipment" 
                className="rounded-lg shadow-lg border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">
              WHAT ABOUT US
            </span>
            <h2 className="text-4xl font-bold text-secondary mb-6 leading-tight">
              The Heart And Science Of Medic Test
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="text-primary">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="text-secondary font-medium">{point}</span>
                </div>
              ))}
            </div>
            
            <button className="btn-primary">
              READ MORE +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
