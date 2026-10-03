import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVP({ theme }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', guests: '1', attendance: 'Attending', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
  };

  const isEmerald = theme === 'emerald';

  return (
    <section className="py-14 px-4 max-w-xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`p-8 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl ${isEmerald ? 'bg-slate-900/85 border-emerald-900/60 text-emerald-100' : 'bg-white/95 border-rose-200 text-rose-950'}`}
      >
        <div className="text-center mb-8">
          <HeartHandshake className="w-10 h-10 text-rose-600 mx-auto mb-2 animate-pulse" />
          <h2 className="font-serif text-3xl font-bold mb-2">Confirm Your Attendance</h2>
          <p className="text-xs sm:text-sm opacity-80">Please let us know if you will be joining our joyous celebration</p>
        </div>

        {submitted ? (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="font-serif text-2xl font-bold">Jazakallah Khair, {formData.name}!</h3>
            <p className="text-xs sm:text-sm opacity-80">Your RSVP has been saved. We eagerly look forward to hosting you!</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-medium mb-1.5 opacity-90">Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your full name" 
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-rose-500 bg-white/60 text-gray-800 shadow-inner transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1.5 opacity-90">Attendance</label>
                <select 
                  value={formData.attendance}
                  onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-rose-500 bg-white/60 text-gray-800 shadow-inner"
                >
                  <option value="Attending">Happily Attending</option>
                  <option value="Not Attending">Regretfully Unable</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1.5 opacity-90">Number of Guests</label>
                <select 
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-rose-500 bg-white/60 text-gray-800 shadow-inner"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4+ Family</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1.5 opacity-90">Wishes for the Couple (Optional)</label>
              <textarea 
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Write a sweet du'a or wish..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-rose-500 bg-white/60 text-gray-800 resize-none shadow-inner"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" /> Send RSVP Confirmation
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}