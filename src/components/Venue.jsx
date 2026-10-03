import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function Venue({ theme }) {
  const isEmerald = theme === 'emerald';
  const mapsUrl = "https://maps.app.goo.gl/oDdNfSjgahND6aCn6";

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`p-8 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl ${isEmerald ? 'bg-slate-900/85 border-emerald-900/60 text-emerald-100' : 'bg-white/90 border-rose-200/80 text-rose-950'}`}
      >
        <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4 shadow-inner animate-bounce">
          <MapPin className="w-7 h-7" />
        </div>
        <h2 className="font-serif text-3xl font-bold mb-3">Venue Location</h2>
        <p className="text-base opacity-90 mb-6 font-medium">New Colony Vessu, Anantnag, Jammu &amp; Kashmir</p>
        
        <motion.a 
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href={mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-xl shadow-rose-600/30 transition-all cursor-pointer"
        >
          <Navigation className="w-4 h-4" /> Open in Google Maps
        </motion.a>
      </motion.div>
    </section>
  );
}