import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Schedule({ theme }) {
  const events = [
    {
      date: "October 21, 2026",
      time: "6:00 PM Onwards",
      title: "Mehndiraat",
      desc: "Join us for dinner and celebrations as we welcome our honored guests.",
      location: "Residence, New Colony Vessu, Anantnag"
    },
    {
      date: "October 22, 2026",
      time: "11:00 AM Onwards",
      title: "Wedding Ceremony",
      desc: "Witness the blessed Wedding followed by traditional feast.",
      location: "Residence, New Colony Vessu, Anantnag"
    }
  ];

  const isEmerald = theme === 'emerald';

  return (
    <section className="py-14 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className={`font-serif text-3xl sm:text-4xl font-bold mb-2 ${isEmerald ? 'text-emerald-100' : 'text-rose-950'}`}>Wedding Itinerary</h2>
        <p className={`text-sm ${isEmerald ? 'text-emerald-300' : 'text-rose-700'}`}>Two days of celebration, love, and traditions</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((ev, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`p-7 rounded-3xl border shadow-xl backdrop-blur-xl transition-all ${isEmerald ? 'bg-slate-900/85 border-emerald-900/60 text-emerald-100' : 'bg-white/90 border-rose-200/80 text-rose-950'}`}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 mb-4 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" /> {ev.date}
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">{ev.title}</h3>
            <p className="text-xs sm:text-sm opacity-80 mb-6 leading-relaxed">{ev.desc}</p>
            <div className="space-y-2 text-xs sm:text-sm opacity-90 border-t pt-4 border-gray-200/20 font-medium">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{ev.time}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{ev.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}