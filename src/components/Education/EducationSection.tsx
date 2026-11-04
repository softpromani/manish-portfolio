"use client";

import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { RESUME_DATA } from "@/data/portfolioData";

export default function EducationSection() {
  const { education } = RESUME_DATA;

  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Formal technical degrees in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Award className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <span className="inline-block text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Graduation {item.year}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {item.degree}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {item.institution}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

