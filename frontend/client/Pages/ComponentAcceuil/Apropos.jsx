import React from 'react'

function Apropos() {
  return (
    <div>
     <section className="relative w-full py-32 md:py-40 flex items-center justify-center text-center overflow-hidden font-sans before:absolute before:inset-0 before:bg-[#1e1b86] before:-skew-y-2 before:origin-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          {/* الخط الصغير الفوقاني */}
          <div className="w-8 h-[2px] bg-white/60 mb-6 rounded-full" />
          
          {/* النص الأساسي (القولة) */}
          <p className="text-white text-lg md:text-xl font-normal leading-relaxed md:leading-loose tracking-wide mb-6">
            "Le travail occupe une place importante dans votre vie, et la véritable satisfaction vient de l’accomplissement d’un travail que vous considérez comme exceptionnel. Et la seule manière d’accomplir un travail exceptionnel, c’est de passionner pour ce que vous faites."
          </p>
          
          {/* اسم الكاتب أو الوكالة */}
          <span className="text-white/50 text-xs md:text-sm font-medium tracking-widest uppercase">
            Hooked Digital
          </span>
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default Apropos
