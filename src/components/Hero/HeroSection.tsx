"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin, Linkedin, CheckCircle2, ShieldCheck, Zap, Download, Server, Cpu, Database, Layers } from "lucide-react";
import { RESUME_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const { personal } = RESUME_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const corePillars = [
    { label: "PHP 8.4 (Laravel 10+)", desc: "Microservices & JIT" },
    { label: "Python & OpenCV", desc: "ANPR Computer Vision" },
    { label: "Redis & WebSockets", desc: "Sub-4ms Caching & PubSub" },
    { label: "MySQL & MongoDB", desc: "Dual-Database Runtime" },
    { label: "Docker & AWS", desc: "Multi-Stage Slim Builds" },
    { label: "Figma REST API", desc: "Design-to-Code Sync" },
  ];

  return (
    <section id="overview" className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>SENIOR ENGINEERING LEAD &bull; ENTERPRISE SYSTEMS ARCHITECT</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Engineering High-Concurrency{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                Microservices, Real-Time QA
              </span>{" "}
              &amp; Cloud Platforms.
            </h1>

            {/* Summary */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Hi, I’m <strong className="text-slate-900 font-semibold">{personal.name}</strong>. Over the past <strong className="text-slate-900">6+ years</strong>, I have architected, deployed, and scaled 35+ end-to-end commercial applications from scratch to cloud production environments—delivering 29ms API latencies, automated database self-healing, and resilient microservices for international clients across Dubai, the US, and India.
            </p>

            {/* Interactive Tech Architecture Quick-Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {corePillars.map((p, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-800">{p.label}</span>
                  <span className="text-[10px] text-slate-500 font-light">&bull; {p.desc}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact & Location Strip */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href={`tel:${personal.phone1}`} className="hover:text-blue-600 transition-colors font-semibold text-slate-800">
                  {personal.phone1}
                </a>
              </div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 px-3 py-1.5 rounded-lg transition-colors font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <span>View Enterprise Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#system-flow"
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>Live System Flow</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-medium text-xs transition-colors flex items-center gap-1.5"
                title="Copy email to clipboard"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{copied ? "✓ Copied!" : personal.email}</span>
              </button>
            </div>

            {/* Key Resume Stats Grid */}
            <div className="pt-5 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personal.stats.map((st, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                    {st.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">{st.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Clean Professional Photo Card with Tech Stack Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                
                {/* Clean Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 text-white">
                  <div className="font-bold text-lg">{personal.name}</div>
                  <div className="text-xs text-slate-200 font-medium">
                    Automated Testing Manager &amp; Senior Architect
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Serving Enterprise Clients Across Dubai, US &amp; India</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Top Right */}
              <div className="absolute -top-3 -right-3 bg-white border border-slate-200 shadow-md rounded-xl p-3 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Fast Execution</span>
                  <span className="text-xs font-extrabold text-slate-900">29ms Avg Latency</span>
                </div>
              </div>

              {/* Floating Badge: Bottom Left */}
              <div className="absolute -bottom-4 -left-3 bg-white border border-slate-200 shadow-md rounded-xl p-3 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Server className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Architecture</span>
                  <span className="text-xs font-extrabold text-slate-900">35+ Commercial Apps</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
