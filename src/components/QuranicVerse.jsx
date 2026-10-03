import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function QuranicVerse({ theme }) {
  const isEmerald = theme === 'emerald';
  return (
    <section className="py-12 px-4 max-w-2xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className={`p-8 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl transition-all ${isEmerald ? 'bg-slate-900/80 border-emerald-900/60' : 'bg-white/90 border-rose-200/80'}`}
      >
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4 shadow-inner"
        >
          <BookOpen className="w-6 h-6" />
        </motion.div>
        
        <p className="font-arabic text-2xl sm:text-3xl mb-6 leading-loose tracking-wide text-rose-700">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
        </p>
        <p className={`text-sm sm:text-base font-light italic mb-4 leading-relaxed ${isEmerald ? 'text-emerald-300' : 'text-rose-900'}`}>
          "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
        </p>
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest text-rose-600 uppercase bg-rose-50 border border-rose-200">
          Surah Ar-Rum [30:21]
        </span>
      </motion.div>
    </section>
  );
}