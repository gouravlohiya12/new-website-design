import React from 'react';
import { User, MessageCircle } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "Get The Exercise Limited Mobility",
      date: "DECEMBER 17, 2021",
      img: "https://picsum.photos/seed/blog1/600/400",
      comments: 0
    },
    {
      title: "Transfusion Strategy And Heart Surgery",
      date: "DECEMBER 5, 2021",
      img: "https://picsum.photos/seed/blog2/600/400",
      comments: 0
    },
    {
      title: "Latest Equipment For The Heart Treatment",
      date: "DECEMBER 5, 2021",
      img: "https://picsum.photos/seed/blog3/600/400",
      comments: 0
    }
  ];

  return (
    <section className="py-24">
      <div className="container">
        <span className="section-subtitle">OUR BLOG</span>
        <h2 className="section-title">See Our Latest Blog</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded">
                  {post.date}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-slate-400 text-xs font-bold mb-4">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-primary" />
                    <span>ADMIN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={14} className="text-primary" />
                    <span>{post.comments} COMMENTS</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-6 group-hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <a href="#" className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">
                  READ MORE +
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
