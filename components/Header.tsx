
import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-gray-100' : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <div className={`p-2.5 rounded-lg transition-colors shadow-lg ${
            isScrolled ? 'bg-primary text-white group-hover:bg-teal-900' : 'bg-white text-primary'
          }`}>
            <TrendingUp size={22} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold leading-none ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              שרית<span className={isScrolled ? 'text-primary' : 'text-teal-200'}>אלטלף</span>
            </span>
            <span className={`text-xs font-medium tracking-wide ${isScrolled ? 'text-slate-500' : 'text-teal-100/80'}`}>ניהול פיננסי וחשבונאות</span>
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg ${
              isScrolled 
                ? 'bg-primary hover:bg-teal-900 text-white shadow-teal-900/20' 
                : 'bg-white hover:bg-teal-50 text-primary shadow-black/10'
            }`}
          >
            צור קשר
          </a>
        </div>

        {/* Mobile Contact Button */}
        <div className="md:hidden">
            <a 
            href="#contact" 
            className={`px-4 py-2 rounded-lg font-bold text-xs shadow-md ${
               isScrolled 
                ? 'bg-primary hover:bg-teal-900 text-white' 
                : 'bg-white hover:bg-teal-50 text-primary'
            }`}
          >
            צור קשר
          </a>
        </div>
      </div>
    </header>
  );
};
