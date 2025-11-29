import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Lightbulb } from 'lucide-react';
import { getProductivityTip } from '../services/geminiService';

export const AiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse('');
    
    const tip = await getProductivityTip(input);
    
    setResponse(tip);
    setLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-20 bg-gradient-to-br from-primary to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-accent mb-4 font-bold tracking-wide uppercase text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Sparkles size={14} />
              <span>AI יועצת פיננסית</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">טיפ פיננסי מהיר משרית הדיגיטלית</h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed font-light">
              יש לך שאלה על תזרים? גבייה מלקוח בעייתי? או סתם איך לעשות סדר בניירת?
              תשאלי אותי וקבלי תשובה קצרה וממוקדת, מבוססת על הניסיון שלי.
            </p>
            
            <form onSubmit={handleAsk} className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="לדוגמה: איך לגרום ללקוח לשלם בזמן?"
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 pr-6 pl-14 rounded-xl focus:outline-none focus:bg-white/20 focus:border-accent transition-all placeholder-teal-200/50"
              />
              <button 
                type="submit"
                disabled={loading || !input}
                className="absolute left-2 top-2 bottom-2 bg-accent hover:bg-amber-600 text-white px-4 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {loading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} className="transform rotate-180" />}
              </button>
            </form>

             <div className="mt-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {['איך לשפר תזרים?', 'טיפ לגבייה אפקטיבית', 'סדר בחשבוניות'].map(suggestion => (
                  <button 
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="text-xs text-teal-200 bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap border border-white/5"
                  >
                    {suggestion}
                  </button>
                ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white text-slate-800 rounded-3xl p-8 border border-white/10 min-h-[240px] flex flex-col justify-center relative shadow-2xl">
              <div className="absolute -top-5 -right-5 bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-teal-800">
                <Lightbulb size={24} />
              </div>
              
              {response ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <h4 className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">התשובה שלי:</h4>
                  <p className="text-xl font-medium text-slate-900 leading-relaxed">
                    "{response}"
                  </p>
                </div>
              ) : (
                <div className="text-slate-400 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                    <Sparkles size={32} className="text-slate-300" />
                  </div>
                  <p className="font-medium">המקום לתשובות חכמות</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};