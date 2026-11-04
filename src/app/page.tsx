"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import SystemArchitectureFlow from "@/components/Visuals/SystemArchitectureFlow";
import SkillsSection from "@/components/Skills/SkillsSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import PerformanceMetricsVisual from "@/components/Visuals/PerformanceMetricsVisual";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import EducationSection from "@/components/Education/EducationSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Streamlined In-A-Row Navbar */}
      <Navbar />

      {/* Executive Hero */}
      <HeroSection />

      {/* Interactive Visual System Flow Simulator */}
      <SystemArchitectureFlow />

      {/* Technical Skills & Architecture Matrix */}
      <SkillsSection />

      {/* Featured Production Deployments */}
      <ProjectsSection />

      {/* Visual Performance Metrics & Benchmark Charts */}
      <PerformanceMetricsVisual />

      {/* Professional Career Track Record */}
      <ExperienceSection />

      {/* Academic Credentials */}
      <EducationSection />

      {/* Direct Contact & Inquiry */}
      <ContactSection />

      {/* Minimal Clean Footer */}
      <Footer />
    </main>
  );
}
