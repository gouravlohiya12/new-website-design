import React from 'react';
import { Plus, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-32 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="text-primary">
                <Plus size={32} strokeWidth={3} />
              </div>
              <span className="text-2xl font-bold">Medicate</span>
            </div>
            <p className="text-white/60 mb-8 leading-relaxed">
              It helps designers plan out where the content will sit, the content to be written and approved.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button key={i} className="bg-white/10 p-3 rounded hover:bg-primary transition-colors">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Our Courses
            </h4>
            <ul className="space-y-4">
              {["About Us", "Our Services", "Our Process", "Doctors 1", "Doctors 2", "Events", "Contact Us", "Our Process", "FAQ", "Departments", "Member"].map((link, i) => (
                <li key={i} className="inline-block w-1/2">
                  <a href="#" className="text-white/60 hover:text-primary flex items-center gap-2 transition-colors">
                    <ChevronRight size={14} className="text-primary" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Recent Posts
            </h4>
            <div className="space-y-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <img 
                    src={`https://picsum.photos/seed/footer${i}/80/80`} 
                    alt="Post" 
                    className="w-16 h-16 rounded object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-primary text-[10px] font-bold block mb-1 uppercase">DECEMBER 12, 2021</span>
                    <h5 className="text-sm font-bold hover:text-primary cursor-pointer transition-colors">
                      Get The Exercise Limited Mobility
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-primary">
                  <Phone size={20} />
                </div>
                <span className="text-white/60">+1-800-001-658</span>
              </li>
              <li className="flex gap-4">
                <div className="text-primary">
                  <Mail size={20} />
                </div>
                <span className="text-white/60">info@peacefulthemes.com</span>
              </li>
              <li className="flex gap-4">
                <div className="text-primary">
                  <MapPin size={20} />
                </div>
                <span className="text-white/60">Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center gap-4 text-white/40 text-sm">
          <p>Copyright 2023 medicate All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
