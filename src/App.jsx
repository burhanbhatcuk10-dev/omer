import React, { useState } from 'react';
import { themes } from './utils/themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuranicVerse from './components/QuranicVerse';
import HostSection from './components/HostSection';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import WishesWall from './components/WishesWall';
import Footer from './components/Footer';

export default function App() {
  const [currentTheme, setTheme] = useState('rose');
  const activeTheme = themes[currentTheme];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${activeTheme.bg}`}>
      <Navbar currentTheme={currentTheme} setTheme={setTheme} />
      <main>
        <Hero theme={currentTheme} />
        <QuranicVerse theme={currentTheme} />
        <HostSection theme={currentTheme} />
        <Schedule theme={currentTheme} />
        <Venue theme={currentTheme} />
    
        <WishesWall theme={currentTheme} />
      </main>
      <Footer theme={currentTheme} />
    </div>
  );
}