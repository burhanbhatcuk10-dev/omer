import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer({ theme }) {
  const isEmerald = theme === 'emerald';
  return (
    <footer className={`py-10 text-center text-xs sm:text-sm opacity-90 border-t transition-colors duration-500 ${isEmerald ? 'border-emerald-900/50 text-emerald-300 bg-slate-950/80' : 'border-rose-200/60 text-rose-900 bg-white/60'}`}>
      <div className="flex items-center justify-center gap-2 mb-2 font-serif text-base font-bold">
        <span>Omer</span>
        <Heart className="w-4 h-4 text-rose-600 fill-rose-600 animate-pulse" />
        <span>Sameena</span>
      </div>
      <p className="font-light">With warm regards, Mr. &amp; Mrs. AB Rashid Bhat &amp; Family</p>
      <p className="mt-2 text-[11px] opacity-60">© 2026 Wedding Celebration • New Colony Vessu, Anantnag</p>
    </footer>
  );
}
