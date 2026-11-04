"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Mail, Phone, Sparkles } from "lucide-react";
import { RESUME_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = RESUME_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "System Flow", href: "#system-flow" },
    { name: "Architecture", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Metrics", href: "#metrics" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Left: Brand Identity (Single neat row) */}
          <a href="#overview" className="flex items-center space-x-2.5 shrink-0 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-300 shadow-sm shrink-0 bg-slate-100">
              <img
                src="/manish-kumar.jpg"
                alt="Manish Kumar"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-900 text-sm whitespace-nowrap">
                {personal.name}
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                Available for Roles
              </span>
            </div>
          </a>

          {/* Center: Sleek In-A-Row Navigation Bar (No multiline wrapping) */}
          <nav className="hidden md:flex items-center space-x-0.5 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-white hover:shadow-xs transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Quick Action Buttons (In a single neat row) */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href={`mailto:${personal.email}`}
              className="text-xs font-medium text-slate-600 hover:text-blue-600 flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>{personal.email}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm hover:shadow whitespace-nowrap"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xl space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`mailto:${personal.email}`}
              className="text-xs text-slate-600 flex items-center gap-2 px-2 py-1"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone1}`}
              className="text-xs text-slate-600 flex items-center gap-2 px-2 py-1"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{personal.phone1}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
