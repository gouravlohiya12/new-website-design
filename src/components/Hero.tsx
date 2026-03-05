import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/medical-hero/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            PASSION FOR CARING
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
            Genuine Commitment To Your Health
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className="btn-primary">
            READ MORE +
          </button>
        </motion.div>
      </div>
    </section>
  );
}
