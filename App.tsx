import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right text-slate-800" dir="rtl">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;