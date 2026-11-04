"use client";

import React, { useState } from "react";
import { Play, CheckCircle2, ShieldCheck, Zap, Server, Database, Activity, RefreshCw, Cpu, Layers } from "lucide-react";

export default function SystemArchitectureFlow() {
  const [activeScenario, setActiveScenario] = useState<"testingmill" | "anpr" | "university">("testingmill");
  const [isSimulating, setIsSimulating] = useState(false);
  const [stepIndex, setStepIndex] = useState(4);
  const [latency, setLatency] = useState(29);

  const scenarios = {
    testingmill: {
      title: "TestingMill QA & Data Integrity Engine",
      subtitle: "8-module automated QA suite with real-time Figma-to-code verification & self-healing DB monitors.",
      client: "Automated Pros (Dubai)",
      nodes: [
        { id: 1, name: "API Ingestion", type: "Gateway", desc: "REST & Webhook Payloads", icon: Server },
        { id: 2, name: "Microservices", type: "PHP 8.4 + JIT", desc: "No-Code CRUD Engine", icon: Cpu },
        { id: 3, name: "Redis Cache", type: "In-Memory", desc: "Sub-4ms Session & Queues", icon: Zap },
        { id: 4, name: "Dual DB Engine", type: "MySQL + MongoDB", desc: "100+ Dynamic Entity Types", icon: Database },
        { id: 5, name: "Redundancy Monitor", type: "Self-Healing", desc: "Auto-Corrects Contradictions", icon: ShieldCheck },
      ],
      metrics: {
        latency: "29ms avg",
        throughput: "14,500 req/s",
        reliability: "99.99%",
        selfHealing: "Automated",
      },
    },
    anpr: {
      title: "AI Smart Parking & ANPR Computer Vision Flow",
      subtitle: "High-speed optical character recognition license plate processing with instant wallet deductions.",
      client: "Nge Parking",
      nodes: [
        { id: 1, name: "Camera Streams", type: "ANPR Sensor", desc: "High-res Vehicle Feeds", icon: Activity },
        { id: 2, name: "Python Vision", type: "OpenCV Engine", desc: "Instant Plate Detection", icon: Cpu },
        { id: 3, name: "WebSocket Broker", type: "Low Latency", desc: "Real-time Barrier Trigger", icon: Zap },
        { id: 4, name: "Wallet Ledger", type: "MySQL Trx", desc: "Encrypted Auto-Deduction", icon: Database },
        { id: 5, name: "Guard/App Sync", type: "Flutter / Web", desc: "Multi-Platform Audit", icon: CheckCircle2 },
      ],
      metrics: {
        latency: "42ms scan",
        throughput: "Real-Time",
        reliability: "99.95%",
        selfHealing: "Active",
      },
    },
    university: {
      title: "LNMU 100K+ Student Examination Architecture",
      subtitle: "High-concurrency digital university network scaling online exams with AI live proctoring.",
      client: "L.N. Mithila University",
      nodes: [
        { id: 1, name: "100k+ Students", type: "Peak Influx", desc: "Concurrent Exam Submissions", icon: Server },
        { id: 2, name: "Nginx Load Balancers", type: "Traffic Routing", desc: "Zero Single Point Failure", icon: Layers },
        { id: 3, name: "AI Live Proctor", type: "Live Telemetry", desc: "Continuous Integrity Guard", icon: ShieldCheck },
        { id: 4, name: "Redis Sessions", type: "State Store", desc: "Instant Exam Recovery", icon: Zap },
        { id: 5, name: "Sharded Relational DB", type: "MySQL Replica", desc: "Partitioned Answer Sheets", icon: Database },
      ],
      metrics: {
        latency: "34ms query",
        throughput: "50,000+ conc.",
        reliability: "100% Exam Uptime",
        selfHealing: "Active",
      },
    },
  };

  const current = scenarios[activeScenario];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setStepIndex(0);

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          setIsSimulating(false);
          setLatency(Math.floor(Math.random() * 6) + 27); // 27-32ms
          return 4;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <section id="system-flow" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE SYSTEM ARCHITECTURE VISUALIZER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How My Distributed Systems Operate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Click through real-world enterprise architectures from my resume. Run a live simulation to trace payload velocity and self-healing data monitors.
          </p>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => { setActiveScenario("testingmill"); setStepIndex(4); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeScenario === "testingmill"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            01. TestingMill QA &amp; Data Integrity (Dubai)
          </button>
          <button
            onClick={() => { setActiveScenario("anpr"); setStepIndex(4); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeScenario === "anpr"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            02. AI Smart Parking &amp; ANPR Computer Vision
          </button>
          <button
            onClick={() => { setActiveScenario("university"); setStepIndex(4); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeScenario === "university"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
            }`}
          >
            03. LNMU 100K+ University Exam Scale
          </button>
        </div>

        {/* Visual Pipeline Display Board */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* Top Bar of the Board */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                <span>{current.client}</span>
                <span>•</span>
                <span className="text-slate-400">Live Architecture Trace</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5">
                {current.subtitle}
              </p>
            </div>

            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                isSimulating
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow"
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isSimulating ? "Transmitting Signal..." : "Simulate Live Payload"}</span>
            </button>
          </div>

          {/* Interactive Pipeline Nodes Flow (Horizontal connected chain) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {current.nodes.map((node, i) => {
              const Icon = node.icon;
              const isActive = stepIndex === i;
              const isPast = stepIndex >= i;

              return (
                <div
                  key={node.id}
                  className={`relative rounded-2xl p-4 transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? "bg-blue-50/90 border-blue-400 shadow-md ring-2 ring-blue-300 scale-102"
                      : isPast
                      ? "bg-white border-slate-200 shadow-xs"
                      : "bg-slate-50/60 border-slate-200/60 opacity-60"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        0{node.id}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-blue-600 text-white animate-pulse"
                            : isPast
                            ? "bg-blue-50 text-blue-600"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug">
                        {node.name}
                      </h4>
                      <span className="text-[10px] font-semibold text-blue-600 block mt-0.5">
                        {node.type}
                      </span>
                      <p className="text-[11px] text-slate-500 font-light mt-1 leading-snug">
                        {node.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Status</span>
                    <span
                      className={`font-semibold flex items-center gap-1 ${
                        isActive
                          ? "text-blue-600"
                          : isPast
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }`}
                    >
                      {isActive ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                          Processing
                        </>
                      ) : isPast ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          Verified
                        </>
                      ) : (
                        "Standby"
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Telemetry Readout Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium">Average Round-Trip</span>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-mono mt-0.5 text-blue-600">
                {isSimulating ? "..." : `${latency}ms`}
              </span>
              <span className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                ✓ Ultra Low Latency SLA
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium">Throughput Capacity</span>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-mono mt-0.5">
                {current.metrics.throughput}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5">Distributed Load</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium">Uptime Metric</span>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-mono mt-0.5 text-emerald-600">
                {current.metrics.reliability}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5">Zero Single Point Failure</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium">Data Integrity</span>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-mono mt-0.5 text-indigo-600">
                Auto-Healing
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5">Continuous Redundancy Watch</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

