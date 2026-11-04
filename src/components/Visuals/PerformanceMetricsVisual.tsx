"use client";

import React, { useState } from "react";
import { TrendingUp, Activity, ShieldCheck, Zap, Server, BarChart3, Clock, CheckCircle2 } from "lucide-react";

export default function PerformanceMetricsVisual() {
  const [activeMetricTab, setActiveMetricTab] = useState<"latency" | "database" | "radar">("latency");

  // Radar competencies data
  const competencies = [
    { label: "Microservices", score: 96, x: 150, y: 35 },
    { label: "QA Automation", score: 98, x: 250, y: 95 },
    { label: "Database Sharding", score: 94, x: 235, y: 210 },
    { label: "Cloud & DevOps", score: 92, x: 150, y: 260 },
    { label: "Agentic AI", score: 90, x: 65, y: 210 },
    { label: "Tech Leadership", score: 95, x: 50, y: 95 },
  ];

  return (
    <section id="metrics" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
            <span>MEASURABLE ENGINEERING IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Performance &amp; Reliability Metrics
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Data-backed architectural outcomes from 6+ years of microservices optimization and high-concurrency systems delivery.
          </p>
        </div>

        {/* Metric Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveMetricTab("latency")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeMetricTab === "latency"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            API Latency Reduction (29ms SLA)
          </button>
          <button
            onClick={() => setActiveMetricTab("database")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeMetricTab === "database"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            Query Optimization &amp; Caching (45% Faster)
          </button>
          <button
            onClick={() => setActiveMetricTab("radar")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeMetricTab === "radar"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            Core Competency Radar
          </button>
        </div>

        {/* Display Visual Cards */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          
          {/* TAB 1: Latency Reduction Chart */}
          {activeMetricTab === "latency" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>API Response Latency Execution</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold font-mono">
                      -55% Latency Drop
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Benchmark comparison of high-traffic endpoints before vs. after OPcache, JIT compilation, and microservices decoupling.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-slate-300" />
                    <span className="text-slate-600">Legacy Architecture (65ms avg)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-blue-600" />
                    <span className="text-blue-700 font-bold">Manish's Microservices (29ms avg)</span>
                  </div>
                </div>
              </div>

              {/* Visual Latency Bar Chart */}
              <div className="space-y-4 pt-2">
                {[
                  { endpoint: "User Auth & JWT Session Handshake", legacy: 58, optimized: 24 },
                  { endpoint: "Dynamic Entity CRUD Generation (100+ entities)", legacy: 74, optimized: 29 },
                  { endpoint: "Figma Frame & Element Sync Verification", legacy: 68, optimized: 31 },
                  { endpoint: "Real-Time Telemetry & Redundancy Check", legacy: 62, optimized: 27 },
                  { endpoint: "Sharded Database Read & Composite Search", legacy: 82, optimized: 35 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-800">{item.endpoint}</span>
                      <span className="text-emerald-600 font-mono font-bold">
                        {item.optimized}ms{" "}
                        <span className="text-slate-400 font-normal line-through ml-1">{item.legacy}ms</span>
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {/* Legacy Bar */}
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-slate-300 h-full rounded-full"
                          style={{ width: `${(item.legacy / 90) * 100}%` }}
                        />
                      </div>
                      {/* Optimized Bar */}
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full transition-all duration-700"
                          style={{ width: `${(item.optimized / 90) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Database Query & Caching Optimization */}
          {activeMetricTab === "database" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>Database Query Optimization &amp; Redis Caching</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold font-mono">
                    45% Faster Response
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Blattner Tech &amp; Automated Pros production metrics: refactoring legacy ORM queries, composite indexing, and queue-centric pipelines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">High-Traffic Endpoints</span>
                  <div className="text-3xl font-extrabold text-blue-600 font-mono">45%</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Direct reduction in average query response time through composite database indexing and Redis key-value caching.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Entity Boilerplate</span>
                  <div className="text-3xl font-extrabold text-indigo-600 font-mono">100+</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Entity types served dynamically via metadata-driven runtime CRUD engine over MongoDB and MySQL.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Microservices Commits</span>
                  <div className="text-3xl font-extrabold text-emerald-600 font-mono">1,090+</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Production commits across 3 interconnected Laravel microservices with zero downtime deployments.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Core Competency Radar */}
          {activeMetricTab === "radar" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                  Architectural Competency Polygon
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Balanced engineering leadership matrix across distributed systems, automated testing, databases, and modern cloud deployment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* SVG Radar */}
                <div className="md:col-span-7 flex justify-center">
                  <div className="relative w-72 sm:w-80 aspect-square">
                    <svg viewBox="0 0 300 300" className="w-full h-full">
                      {/* Grid polygons */}
                      {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, i) => (
                        <polygon
                          key={i}
                          points="150,50 236,100 236,200 150,250 64,200 64,100"
                          fill="none"
                          stroke="rgba(203, 213, 225, 0.8)"
                          strokeWidth="1"
                          strokeDasharray={scale === 1 ? "none" : "2 2"}
                          transform={`scale(${scale})`}
                          transform-origin="150 150"
                        />
                      ))}

                      {/* Axes */}
                      {competencies.map((c, i) => (
                        <line
                          key={i}
                          x1="150"
                          y1="150"
                          x2={c.x}
                          y2={c.y}
                          stroke="rgba(203, 213, 225, 0.8)"
                          strokeWidth="1"
                        />
                      ))}

                      {/* Filled polygon for Manish's scores */}
                      <polygon
                        points="150,55 230,105 228,195 150,240 70,195 68,105"
                        fill="rgba(37, 99, 235, 0.15)"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                      />

                      {/* Vertex circles */}
                      {competencies.map((c, i) => (
                        <g key={i}>
                          <circle cx={c.x} cy={c.y} r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Legend list */}
                <div className="md:col-span-5 space-y-2.5">
                  {competencies.map((c, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                      <span className="text-xs font-semibold text-slate-800">{c.label}</span>
                      <span className="text-xs font-extrabold text-blue-600 font-mono">{c.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

