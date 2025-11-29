import React, { useState, useRef } from 'react';
import { Plane, Smartphone, Anchor, TrendingUp, Camera } from 'lucide-react';

const ExperienceItem: React.FC<{ company: string; role: string; icon: React.ReactNode; color: string }> = ({ company, role, icon, color }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color}`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{company}</h4>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  </div>
);

export const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("./sarit.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Bio + Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          
          {/* Left: Text */}
          <div className="lg:w-7/12 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">נעים מאוד, שרית</h2>
            <div className="prose prose-lg prose-slate leading-relaxed text-slate-600">
              <p className="mb-4">
                אני מאמינה שניהול פיננסי הוא הלב הפועם של כל עסק. כשהלב עובד בקצב נכון, כל הגוף צומח.
              </p>
              <p className="mb-4">
                הקריירה שלי נבנתה בארגונים המובילים במשק. התחלתי את דרכי <strong>באגף הגזברות של אל-על</strong>, שם למדתי על בשריי מה המשמעות של אחריות על תזרימי ענק.
                משם המשכתי לתפקידי מפתח בניהול כספים וגבייה בחברות שילוח בינלאומיות (אוריין, גל-אר), שם התמקצעתי בעבודה מול מכס וספקים גלובליים.
              </p>
              <p>
                בתפקידי האחרון <strong>באייקון גרופ (iDigital)</strong> ניהלתי את מערך גביית הלקוחות של החברה.
                היום, אני מביאה את כל הניסיון, הידע והסטנדרט הארגוני הגבוה הזה – ישירות לעסק שלך.
              </p>
            </div>
             <div className="mt-8 inline-block bg-white px-6 py-3 rounded-lg border-r-4 border-accent shadow-sm">
              <p className="font-bold text-slate-800">השכלה והסמכות</p>
              <p className="text-sm text-slate-500">תואר ראשון בחינוך וחברה • חשבת שכר בכירה • הנה"ח סוג 1+2</p>
            </div>
          </div>

          {/* Right: Image (Clickable) */}
          <div className="lg:w-5/12 order-1 lg:order-2 w-full">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group aspect-[4/5] max-w-sm mx-auto bg-gray-200"
              onClick={handleImageClick}
              title="לחץ להעלאת תמונה"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
              />
              <img 
                src={imageSrc} 
                onError={(e) => {
                   e.currentTarget.src = "https://placehold.co/600x750/e2e8f0/64748b?text=Sarit+Image"; 
                }}
                alt="שרית אלטלף" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 px-4 py-2 rounded-full flex items-center gap-2 text-slate-800 font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Camera size={20} />
                  <span>שני תמונה</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Experience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <ExperienceItem 
            company="אל-על (EL-AL)" 
            role="אגף גזברות ותזרים" 
            icon={<Plane size={24} />}
            color="bg-blue-800"
          />
          <ExperienceItem 
            company="iDigital (Icon Group)" 
            role="ניהול גבייה ולקוחות" 
            icon={<Smartphone size={24} />}
            color="bg-gray-900"
          />
          <ExperienceItem 
            company="שילוח בינלאומי (ICL/Orian)" 
            role="חשבונות ייצוא/ייבוא" 
            icon={<Anchor size={24} />}
            color="bg-teal-600"
          />
          <ExperienceItem 
            company="Jetonex" 
            role="הנהלת חשבונות גלובלית" 
            icon={<TrendingUp size={24} />}
            color="bg-purple-600"
          />
        </div>

      </div>
    </section>
  );
};