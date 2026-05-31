import React from "react";
import {ArrowRight ,
  ArrowUpRight,
  Sparkles,
  Target,
  Users,
  Rocket,
  BriefcaseBusiness,
  Trophy,
} from "lucide-react";
import imgApropos from "../../src/assets/imgApropos.png";
import { Link } from "react-router-dom";
function Apropos() {

 return (
    <section className="py-24 bg-white text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-16">
           À PROPOS DE NOUS
          </span>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
       
        {/* Left Content */}
        <div>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-sky-500">
            Une équipe passionnée
            <br />
            {" "}
            <span className="text-violet-600">au service de vos projets</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
            Chez Triova Media, nous croyons en la puissance de la créativité,
            de l’innovation et de la collaboration. Notre équipe réunit des
            experts dévoués qui travaillent chaque jour pour transformer vos
            idées en résultats concrets.
          </p>

          {/* Stats */}
          <div className="mt-10 grid sm:grid-cols-3 gap-5">

            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-violet-50 text-violet-600">
                  <Users size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-violet-600">
                    4+
                  </h3>
                  <p className="text-sm text-slate-500">
                    Experts
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-50 text-sky-600">
                  <BriefcaseBusiness size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-sky-600">
                    5+
                  </h3>
                  <p className="text-sm text-slate-500">
                    Projets réalisés
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-violet-50 text-violet-600">
                  <Trophy size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-violet-600">
                    98%
                  </h3>
                  <p className="text-sm text-slate-500">
                    Clients satisfaits
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <img
              src={imgApropos}
              alt="Triova Media Team"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          
          
        </div>
        
        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/Notre-agence"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Découvrir Plus
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
</div>

        

      </div>





    </section>
  );
}

export default Apropos;