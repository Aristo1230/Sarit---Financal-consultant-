import React, { useState, useRef } from 'react';
import { ShieldCheck, MessageCircle, Camera } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/972542477207?text=" + encodeURIComponent("היי שרית, הגעתי מהאתר ואשמח לשיחת ייעוץ בנוגע לניהול פיננסי.");
  
  // Image Upload State
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
    <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0F5156] text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right -z-10 hidden lg:block"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-400 rounded-full blur-[120px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-20 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-10 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10 mb-6 backdrop-blur-sm">
              <ShieldCheck size={18} className="text-teal-300" />
              <span className="text-sm font-bold text-teal-50 tracking-wide">חשבת שכר בכירה & מנהלת חשבונות</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              להפוך את הכאוס הפיננסי<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-200 to-white">למנוע צמיחה שקט</span>
            </h1>
            
            <p className="text-lg text-teal-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light opacity-90">
              נעים מאוד, אני <strong>שרית אלטלף ארובס</strong>. 
              אחרי למעלה מ-20 שנה בתפקידי מפתח בארגונים הגדולים במשק (אל-על, iDigital), 
              אני מביאה את הסדר, הדיוק והביטחון הפיננסי לעסק שלך.
              גבייה, תזרים, שכר וניהול אדמיניסטרטיבי – משאירים את הדאגות לי, ואת הראש פנוי לצמיחה.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-teal-50 px-8 py-4 rounded-xl font-bold shadow-xl shadow-black/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                לשיחת ייעוץ בוואטסאפ
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div 
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border-4 border-white/10 max-w-md mx-auto lg:mr-auto lg:ml-0 bg-[#0F5156] cursor-pointer group"
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
                  e.currentTarget.src = "https://placehold.co/800x1000/0F5156/ffffff?text=Sarit+Photo";
                }}
                alt="שרית אלטלף" 
                className="w-full h-auto object-cover transform transition-transform duration-700 min-h-[400px]"
              />
              
              {/* Overlay for upload hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                 <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                   <Camera size={24} />
                   <span>להחלפת תמונה</span>
                 </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F5156]/90 via-transparent to-transparent flex items-end p-8 pointer-events-none">
                <div className="text-white">
                  <p className="font-bold text-xl">דיוק. אחריות. מסירות.</p>
                  <p className="text-teal-200 text-sm">הערכים שמובילים אותי בכל יום.</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl shadow-black/20 border border-gray-100 hidden md:block pointer-events-none">
              <div className="text-3xl font-black text-accent mb-1">20+</div>
              <div className="text-sm font-bold text-slate-600">שנות ניסיון<br/>בניהול כספים</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};