import React from 'react';
import { Calculator, Wallet, FileCheck, Globe } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">הפתרונות שלי לעסק שלך</h2>
          <p className="text-slate-600 text-lg">
            אני לא רק "מסדרת ניירת", אני מייצרת מערכת פיננסית שעובדת עבורך.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="ניהול גבייה ותזרים"
            desc="בניית תהליך גבייה שיטתי מלקוחות, צמצום חובות אבודים וניהול תזרים מזומנים מדויק. שומרת על הכסף שלך בתוך הבית."
            icon={<Wallet size={28} />}
          />
          <ServiceCard 
            title="הנהלת חשבונות ושכר"
            desc="בדיקה ואישור חשבוניות, התאמות בנקים וכרטיסי אשראי, והכנת משכורות (חשבת שכר בכירה) בדיוק של שעון שוויצרי."
            icon={<Calculator size={28} />}
          />
          <ServiceCard 
            title="סחר בינלאומי ולוגיסטיקה"
            desc="מומחית בניירת ייצוא/ייבוא, עבודה מול עמילי מכס, בדיקת חיובים לוגיסטיים וניהול התחשבנות במט״ח."
            icon={<Globe size={28} />}
          />
          <ServiceCard 
            title="ארגון אדמיניסטרטיבי"
            desc="סידור משרד, הקמת נהלי עבודה, טיפול בדואר, ספקים ובירוקרטיה. הופכת את הבלגן לסיסטם מתקתק."
            icon={<FileCheck size={28} />}
          />
        </div>
      </div>
    </section>
  );
};