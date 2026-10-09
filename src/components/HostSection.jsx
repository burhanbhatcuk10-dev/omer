import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function HostSection({ theme }) {
  const isEmerald = theme === 'emerald';
  return (
    <section className="py-10 px-4 max-w-2xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`p-8 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl ${isEmerald ? 'bg-slate-900/80 border-emerald-900/60 text-emerald-100' : 'bg-white/90 border-rose-200/80 text-rose-950'}`}
      >
        <h3 className="text-xs uppercase tracking-widest font-bold text-rose-600 mb-3 flex items-center justify-center gap-2">
          <Heart className="w-3.5 h-3.5 fill-rose-600 animate-ping" /> Cordially Invites You <Heart className="w-3.5 h-3.5 fill-rose-600 animate-ping" />
        </h3>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 shimmer-text">
          Mr. &amp; Mrs.<br> AB Rashid Bhat
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto my-4"></div>
        <p className="text-base sm:text-lg leading-relaxed opacity-90 font-light">
          Warmly welcome you and your family to grace the auspicious wedding ceremony of our beloved son <span className="font-semibold text-rose-600">Omer</span> with <span className="font-semibold text-rose-600">Menu</span>.
        </p>
      </motion.div>
    </section>
  );
}
