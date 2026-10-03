import React, { useState, useEffect } from 'react';

export default function Countdown({ theme }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-10-21T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cardStyle = theme === 'emerald' 
    ? 'bg-slate-900/80 border-emerald-800/80 text-emerald-100 shadow-lg shadow-emerald-950/40' 
    : 'bg-white/90 border-rose-200 text-rose-950 shadow-lg shadow-rose-950/5';

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5 max-w-lg mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className={`p-4 rounded-3xl border backdrop-blur-xl flex flex-col items-center transform transition-all duration-300 hover:scale-105 ${cardStyle}`}>
          <span className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-b from-rose-500 to-rose-700 bg-clip-text text-transparent">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold opacity-70 mt-1">{unit}</span>
        </div>
      ))}
    </div>
  );
}