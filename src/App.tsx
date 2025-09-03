import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Competitions } from './components/Competitions';
import { Footer } from './components/Footer';
import { MemphisShapes } from './components/MemphisShapes';

function App() {
  return (
    <div className="min-h-screen bg-white font-fredoka relative overflow-x-hidden">
      <MemphisShapes />
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Competitions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
