import React from 'react';

export default function Gallery() {
  const images = [
    "https://picsum.photos/seed/gallery1/600/600",
    "https://picsum.photos/seed/gallery2/600/600",
    "https://picsum.photos/seed/gallery3/600/600",
    "https://picsum.photos/seed/gallery4/600/600"
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <span className="section-subtitle">OUR PORTFOLIO</span>
        <h2 className="section-title">All The Gret Work That We Done</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-lg group">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
          <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
