import React, { useState } from 'react';
import { MessageSquareHeart, Send } from 'lucide-react';

export default function WishesWall({ theme }) {
  const [wishes, setWishes] = useState([
    { name: "Aidah Farooq", message: "May Allah bless your marriage and fill your home with perpetual joy and harmony!", time: "Today" },
    { name: "Tariq Ahmad", message: "Heartiest congratulations to Omer and Menu! Barakallah lakuma.", time: "Yesterday" }
  ]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const addWish = (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    setWishes([{ name: author, message: text, time: "Just now" }, ...wishes]);
    setAuthor('');
    setText('');
  };

  const isEmerald = theme === 'emerald';

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto">
      <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl backdrop-blur-xl ${isEmerald ? 'bg-slate-900/80 border-emerald-900/60 text-emerald-100' : 'bg-white/90 border-rose-200/80 text-rose-950'}`}>
        <div className="flex items-center justify-center gap-2 mb-6">
          <MessageSquareHeart className="w-7 h-7 text-rose-600" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">Wishes &amp; Du'as Wall</h2>
        </div>

        <form onSubmit={addWish} className="space-y-3 mb-8">
          <input 
            type="text" 
            placeholder="Your Name" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white/60 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 shadow-inner"
          />
          <textarea 
            rows="2" 
            placeholder="Write your heartfelt wish or du'a..." 
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white/60 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 resize-none shadow-inner"
          ></textarea>
          <button type="submit" className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-md">
            <Send className="w-3.5 h-3.5" /> Post Wish
          </button>
        </form>

        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
          {wishes.map((w, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/50 border border-white/30 text-xs sm:text-sm shadow-xs transition-transform hover:scale-[1.01]">
              <div className="flex justify-between items-center mb-1 font-semibold text-rose-700">
                <span>{w.name}</span>
                <span className="text-[10px] opacity-60">{w.time}</span>
              </div>
              <p className="opacity-95 leading-relaxed">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}