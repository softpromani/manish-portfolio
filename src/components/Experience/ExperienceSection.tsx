"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ShieldCheck } from "lucide-react";
import { RESUME_DATA } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experiences } = RESUME_DATA;

  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD &amp; LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Over 6 years of progressive engineering leadership spanning international remote teams and on-site mission-critical delivery.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-slate-200">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start group"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-blue-600 shadow-sm z-10 flex items-center justify-center" />

              {/* Card Container */}
              <div className="ml-10 md:ml-0 md:w-full">
                <div
                  className={`bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Header info */}
                  <div className="space-y-2 pb-4 border-b border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                      <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
                        <Building className="w-3.5 h-3.5 text-blue-600" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Key Accomplishments
                      </span>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Tag list */}
                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

