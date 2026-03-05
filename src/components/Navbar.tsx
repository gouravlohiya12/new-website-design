import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Search, ShoppingCart, Plus } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <span>+1-800-001-658</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <span>info@peacefulthemes.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Facebook size={14} className="hover:text-primary cursor-pointer" />
            <Twitter size={14} className="hover:text-primary cursor-pointer" />
            <Instagram size={14} className="hover:text-primary cursor-pointer" />
            <Linkedin size={14} className="hover:text-primary cursor-pointer" />
            <button className="bg-primary px-4 py-1 rounded-sm text-xs font-bold ml-4">Buy now</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <Plus size={32} strokeWidth={3} />
            </div>
            <span className="text-2xl font-bold text-secondary">Medicate</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-semibold text-secondary">
            <a href="#" className="text-primary">HOME</a>
            <a href="#" className="hover:text-primary transition-colors">PAGES</a>
            <a href="#" className="hover:text-primary transition-colors">SERVICES</a>
            <a href="#" className="hover:text-primary transition-colors">PROJECTS</a>
            <a href="#" className="hover:text-primary transition-colors">BLOG</a>
            <a href="#" className="hover:text-primary transition-colors">CONTACT US</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="bg-primary text-white px-6 py-3 rounded font-bold text-sm hidden sm:block">
              APPOINTMENTS +
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
