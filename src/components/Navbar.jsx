import React from 'react';
import { Palette, Heart, Sparkles } from 'lucide-react';
import { themes } from '../utils/themes';

export default function Navbar({ currentTheme, setTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-rose-200/40 shadow-xs transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 font-serif text-lg font-bold text-rose-900">
          <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shadow-inner">
            <Heart className="w-4 h-4 fill-rose-600 animate-pulse" />
          </div>
          <span className="tracking-wide">Omer &amp; Menu</span>
        </div>
        
        <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-rose-200 shadow-xs">
          <Palette className="w-4 h-4 text-rose-600 animate-spin" style={{ animationDuration: '10s' }} />
          <select 
            value={currentTheme}
            onChange={(e) => setTheme(e.target.value)}
            className="text-xs sm:text-sm bg-transparent focus:outline-hidden font-medium text-gray-800 cursor-pointer"
          >
            {Object.entries(themes).map(([key, t]) => (
              <option key={key} value={key}>{t.name}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
