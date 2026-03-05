import React from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="container -mb-16 relative z-30">
      <div className="bg-primary p-10 md:p-16 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-4 rounded-xl text-white">
            <Mail size={40} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Latest Updates Subscribe To Our Newsletter
            </h3>
            <p className="text-white/70">Stay updated with our latest medical news and health tips.</p>
          </div>
        </div>
        
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter Your Email" 
            className="bg-white/20 border border-white/30 rounded px-8 py-4 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all min-w-[300px]"
          />
          <button className="bg-white text-primary px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-lg">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}
