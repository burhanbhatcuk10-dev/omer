import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Heart } from 'lucide-react';
import Countdown from './Countdown';

export default function Hero({ theme }) {
  const isEmerald = theme === 'emerald';

  return (
    <section className="relative py-24 sm:py-32 px-4 text-center overflow-hidden">
      {/* Background Floating Animated Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart 
            key={i} 
            className={`particle w-${(i % 3) + 4} h-${(i % 3) + 4} ${isEmerald ? 'text-emerald-400/20' : 'text-rose-400/30'}`}
            style={{ left: `${i * 13}%`, animationDelay: `${i * 1.2}s`, animationDuration: `${7 + (i % 4) * 2}s` }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-6 relative z-10"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest shadow-lg ${isEmerald ? 'bg-emerald-900/90 text-emerald-300 border border-emerald-700' : 'bg-rose-100 text-rose-800 border border-rose-200'}`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" /> Wedding Celebration 2026
        </motion.div>

        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight ${isEmerald ? 'text-emerald-100' : 'text-rose-950'}`}
        >
          Omer <span className="font-light italic text-rose-500 animate-pulse">&amp;</span> Sameena
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`text-base sm:text-xl font-light tracking-wide max-w-xl mx-auto italic ${isEmerald ? 'text-emerald-300' : 'text-rose-800'}`}
        >
          "And of His signs is that He created for you from yourselves mates..."
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 pt-2 text-sm sm:text-base font-medium"
        >
          <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg backdrop-blur-xl border ${isEmerald ? 'bg-slate-900/90 border-emerald-800 text-emerald-200' : 'bg-white/90 border-rose-200 text-rose-900'}`}>
            <Calendar className="w-4 h-4 text-rose-600 animate-bounce" />
            <span>October 21 &amp; 22, 2026</span>
          </div>
          <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg backdrop-blur-xl border ${isEmerald ? 'bg-slate-900/90 border-emerald-800 text-emerald-200' : 'bg-white/90 border-rose-200 text-rose-900'}`}>
            <MapPin className="w-4 h-4 text-rose-600 animate-bounce" />
            <span>New Colony Vessu, Anantnag</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8"
        >
          <Countdown targetDate="2026-10-21T00:00:00" theme={theme} />
        </motion.div>
      </motion.div>
    </section>
  );
}
