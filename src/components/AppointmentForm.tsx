import React from 'react';

export default function AppointmentForm() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/3 relative min-h-[400px]">
            <img 
              src="https://picsum.photos/seed/appointment/600/800" 
              alt="Doctor" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="lg:w-2/3 p-12 lg:p-20">
            <span className="text-white/80 font-semibold uppercase tracking-wider text-sm mb-2 block">
              APPOINTMENT
            </span>
            <h2 className="text-4xl font-bold text-white mb-10">
              Apply For Free Treatments
            </h2>
            
            <form className="grid sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="bg-white/20 border border-white/30 rounded px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/20 border border-white/30 rounded px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
              />
              <input 
                type="text" 
                placeholder="Your Doctor Name" 
                className="bg-white/20 border border-white/30 rounded px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
              />
              <input 
                type="text" 
                placeholder="Your Disease Name" 
                className="bg-white/20 border border-white/30 rounded px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
              />
              <div className="sm:col-span-2">
                <button className="bg-white text-primary px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-lg">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
