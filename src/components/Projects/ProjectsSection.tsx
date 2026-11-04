"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle, ArrowUpRight, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { RESUME_DATA } from "@/data/portfolioData";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");
  const { projects } = RESUME_DATA;

  const categories = [
    { key: "all", label: "All Deployments" },
    { key: "featured", label: "Featured Systems" },
    { key: "Enterprise QA & Testing", label: "Automated QA & Testing" },
    { key: "AI & Computer Vision", label: "AI & Computer Vision" },
    { key: "High-Concurrency SaaS", label: "High-Concurrency SaaS" },
    { key: "Gov & Public Sector", label: "Gov & Public Sector" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.featured;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>SELECTED ENTERPRISE PRODUCTION DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Commercial Systems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real-world enterprise systems architected and scaled by Manish Kumar, serving thousands of concurrent users across international markets.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  filter === c.key
                    ? "bg-slate-900 text-white font-semibold shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-slate-900 shadow-sm border border-slate-200/80">
                      {project.client}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-600 text-white shadow-sm">
                        ★ Highlight
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Key Impact Callout Box */}
                  <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 text-xs text-blue-900 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Key Architectural Impact:</span>
                      <span className="font-normal text-slate-700">{project.keyImpact}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Technical Highlights
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Production Deployed</span>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-all shadow-xs"
                  >
                    <span>Visit Live Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-medium">Enterprise Private Deployment</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
