import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manish Kumar | Senior Engineering Lead & Distributed Systems Architect",
  description: "Official portfolio of Manish Kumar. Senior Engineering Lead with 6+ years of experience architecting microservices, automated QA engines, high-concurrency cloud systems, and scaling 35+ commercial applications.",
  keywords: [
    "Manish Kumar",
    "Senior Engineering Lead",
    "Microservices Architect",
    "Distributed Systems",
    "Laravel 10",
    "PHP 8.4",
    "Python",
    "Automated QA",
    "Docker",
    "Redis",
    "MySQL",
    "Vue.js",
  ],
  authors: [{ name: "Manish Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#f8fafc] text-slate-900">
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
