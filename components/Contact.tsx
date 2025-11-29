
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, ArrowLeft, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const whatsappLink = "https://wa.me/972542477207?text=" + encodeURIComponent("היי שרית, אשמח לפרטים נוספים.");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Optional: Redirect to WhatsApp after form submission
    window.open(whatsappLink, '_blank');
  };

  return (
    <footer id="contact" className="bg-[#0F5156] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration matching hero */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0F5156] to-[#093538] -z-10"></div>
      
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="lg:w-5/12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">בואי נעשה סדר במספרים</h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              העסק שלך צריך ניהול פיננסי מדויק, אחראי ומנוסה.
              אני מזמינה אותך לשיחת היכרות בה נבין מה תוקע את הצמיחה שלך ואיך אני יכולה להיכנס לתמונה ולייצר שקט תעשייתי.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <a href="tel:0542477207" className="flex items-center gap-4 text-teal-100 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="block text-sm text-teal-200">נייד</span>
                    <span className="font-bold text-xl tracking-wider">054-2477207</span>
                  </div>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mr-16 text-[#25D366] font-bold text-sm hover:underline flex items-center gap-1">
                  <MessageCircle size={14} />
                  לחצי כאן לשליחת ווצאפ מהיר
                </a>
              </div>
              
              <a href="mailto:sarit.altalef@gmail.com" className="flex items-center gap-4 text-teal-100 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-sm text-teal-200">דואר אלקטרוני</span>
                  <span className="font-bold text-lg">sarit.altalef@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-teal-100">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="block text-sm text-teal-200">אזור פעילות</span>
                  <span className="font-bold text-lg">כל הארץ (זום) / מרכז</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/20 text-slate-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 min-h-[400px]">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">תודה שפנית!</h3>
                <p className="text-slate-600 text-lg">ההודעה נשלחה בהצלחה.<br/>מועבר לוואטסאפ להמשך שיחה...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">השאירי פרטים לחזרה</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">שם מלא</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1">טלפון</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-1">נושא הפנייה</label>
                  <select id="service" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-600">
                    <option>ניהול גבייה ותזרים</option>
                    <option>הנהלת חשבונות ושכר</option>
                    <option>ארגון אדמיניסטרטיבי</option>
                    <option>אחר</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">במה אפשר לעזור?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
                </div>
                <button type="submit" className="bg-primary hover:bg-teal-900 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 mt-2 flex items-center justify-center gap-2 group">
                  שלחי הודעה בווצאפ
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-teal-200/60 text-sm border-t border-white/10 pt-8 gap-4">
          <p>© {new Date().getFullYear()} שרית אלטלף ארובס | ניהול פיננסי וחשבונאות</p>
          <div className="flex gap-6">
             <span className="opacity-70 hover:opacity-100 transition-opacity">מקצועיות</span>
             <span className="opacity-70 hover:opacity-100 transition-opacity">אמינות</span>
             <span className="opacity-70 hover:opacity-100 transition-opacity">דיוק</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
