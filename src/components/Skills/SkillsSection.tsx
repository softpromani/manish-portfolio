"use client";

import React, { useState } from "react";
import { Server, Database, CheckCircle2, Cloud, Code, Bot, Cpu, Layers } from "lucide-react";
import { RESUME_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { skillsMatrix } = RESUME_DATA;

  const categoryIcons: Record<string, any> = {
    "Core Backend & Languages": Server,
    "Databases & Data Integrity": Database,
    "Automated Testing & QA Orchestration": CheckCircle2,
    "Cloud, DevOps & Microservices": Cloud,
    "Frontend & Reactive Frameworks": Code,
    "AI & Agentic Systems": Bot,
  };

  const filteredCategories = activeTab === "all"
    ? skillsMatrix
    : skillsMatrix.filter((c) => c.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY &amp; ARCHITECTURE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Technical Architecture
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hands-on technical mastery across high-concurrency microservices, automated testing frameworks, distributed databases, and modern cloud deployment pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { key: "all", label: "All Architectural Domains" },
            { key: "backend", label: "Core Backend & APIs" },
            { key: "databases", label: "Databases & Integrity" },
            { key: "testing", label: "QA & Automation" },
            { key: "cloud", label: "Cloud & DevOps" },
            { key: "frontend", label: "Frontend & UI" },
            { key: "ai", label: "Agentic AI & LLMs" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.title] || Cpu;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base leading-snug">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-xs sm:text-sm text-slate-900">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                            {skill.level}
                          </span>
                        </div>
                        {skill.desc && (
                          <p className="text-xs text-slate-500 leading-relaxed font-light">
                            {skill.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Production Verified</span>
                  <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Active in 35+ Apps
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

