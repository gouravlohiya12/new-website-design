import React from 'react';
import { Stethoscope, UserRound, Clock, Phone } from 'lucide-react';

export default function QuickInfo() {
  const cards = [
    {
      title: "Emergency Cases",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      icon: <Stethoscope size={40} />,
      footer: (
        <div className="flex items-center gap-3 mt-6">
          <div className="bg-white/20 p-2 rounded-full">
            <Phone size={20} />
          </div>
          <span className="text-xl font-bold">987 654 321</span>
        </div>
      ),
      bg: "bg-primary"
    },
    {
      title: "Doctors Timetable",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      icon: <UserRound size={40} />,
      footer: (
        <button className="mt-6 border border-white/50 px-6 py-2 rounded hover:bg-white hover:text-primary transition-colors font-semibold">
          TIMETABLE +
        </button>
      ),
      bg: "bg-secondary"
    },
    {
      title: "Opening Hours",
      desc: "",
      icon: <Clock size={40} />,
      footer: (
        <div className="mt-6 space-y-2 w-full">
          <div className="flex justify-between border-b border-white/20 pb-1">
            <span>Monday - Friday</span>
            <span>8:00 - 7:00 PM</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-1">
            <span>Saturday</span>
            <span>9:00 - 5:00 PM</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-1">
            <span>Sunday</span>
            <span>9:00 - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Emergency</span>
            <span>24HRS 7Days</span>
          </div>
        </div>
      ),
      bg: "bg-primary"
    }
  ];

  return (
    <section className="relative z-20 -mt-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
          {cards.map((card, idx) => (
            <div key={idx} className={`${card.bg} text-white p-10 flex flex-col items-start`}>
              <div className="mb-6 opacity-80">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              {card.desc && <p className="text-white/80 leading-relaxed">{card.desc}</p>}
              {card.footer}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
