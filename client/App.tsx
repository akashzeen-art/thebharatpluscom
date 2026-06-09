import "./global.css";

import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Watch from "./pages/Watch";
import Account from "./pages/Account";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("out"), 4200);
    const t3 = setTimeout(onDone, 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999, overflow: "hidden",
      background: "#0a0a0f",
      clipPath: phase === "out" ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
      transition: phase === "out" ? "clip-path 0.8s cubic-bezier(0.7,0,0.84,0)" : "none",
      pointerEvents: phase === "out" ? "none" : "all",
    }}>

      {/* Ambient radial background */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(220,38,38,0.12) 0%, rgba(10,10,20,1) 70%)" }} />

      {/* Large pulsing background circles */}
      {[380, 500, 620].map((size, i) => (
        <div key={i} style={{
          position: "absolute", top: "50%", left: "50%",
          width: size, height: size, borderRadius: "50%",
          border: `1px solid rgba(220,38,38,${0.06 - i * 0.015})`,
          marginTop: -size / 2, marginLeft: -size / 2,
          animation: `pulse-ring ${3 + i}s ease-in-out infinite`,
          animationDelay: `${i * 0.6}s`,
        }} />
      ))}

      {/* Spinning arcs */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
        {/* Outer arc */}
        <svg width="320" height="320" style={{ position: "absolute", top: -160, left: -160, animation: "spin 6s linear infinite" }}>
          <circle cx="160" cy="160" r="155" fill="none" stroke="rgba(220,38,38,0.5)" strokeWidth="1.5"
            strokeDasharray="60 420" strokeLinecap="round" />
        </svg>
        {/* Middle arc reverse */}
        <svg width="240" height="240" style={{ position: "absolute", top: -120, left: -120, animation: "spin 4s linear infinite reverse" }}>
          <circle cx="120" cy="120" r="115" fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="1"
            strokeDasharray="40 280" strokeLinecap="round" />
        </svg>
        {/* Inner arc */}
        <svg width="160" height="160" style={{ position: "absolute", top: -80, left: -80, animation: "spin 3s linear infinite" }}>
          <circle cx="80" cy="80" r="75" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"
            strokeDasharray="25 175" strokeLinecap="round" />
        </svg>
      </div>

      {/* Orbiting dots */}
      {[0,1,2,3,4,5].map((i) => (
        <div key={i} style={{
          position: "absolute", top: "50%", left: "50%",
          width: 0, height: 0,
          animation: `orbit-${i} ${3 + (i % 3)}s linear infinite`,
        }}>
          <div style={{
            position: "absolute",
            width: i % 2 === 0 ? 5 : 3, height: i % 2 === 0 ? 5 : 3,
            borderRadius: "50%",
            background: i % 2 === 0 ? "#dc2626" : "rgba(255,255,255,0.6)",
            boxShadow: i % 2 === 0 ? "0 0 8px rgba(220,38,38,0.8)" : "none",
            marginTop: -(160 + i * 20), marginLeft: -2,
          }} />
        </div>
      ))}

      {/* Center content */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        opacity: phase === "in" ? 0 : 1,
        transform: phase === "in" ? "scale(0.7) translateY(20px)" : "scale(1) translateY(0)",
        transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      }}>

        {/* Round emblem with progress ring */}
        <div style={{ position: "relative", width: 100, height: 100 }}>
          <svg width="100" height="100" style={{ position: "absolute", inset: 0 }}>
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="46" fill="none" stroke="#dc2626" strokeWidth="2.5"
              strokeLinecap="round" strokeDasharray="289" strokeDashoffset="289"
              transform="rotate(-90 50 50)"
              style={{ animation: "progress-ring 4.2s ease forwards" }}
            />
            <circle cx="50" cy="4" r="3" fill="#dc2626" opacity="0.85" />
          </svg>
          <div style={{
            position: "absolute", inset: 8,
            width: 84, height: 84, borderRadius: "50%",
            background: "radial-gradient(circle at 40% 35%, rgba(220,38,38,0.22) 0%, rgba(10,10,20,0.95) 70%)",
            border: "1.5px solid rgba(220,38,38,0.3)",
            boxShadow: "0 0 20px rgba(220,38,38,0.35), inset 0 0 14px rgba(220,38,38,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
          }}>
            <img
              src="/logo/Gemini_Generated_Image_phk392phk392phk3.png"
              alt="The Bharat Plus"
              style={{ width: 56, height: 56, objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Title */}
        <p style={{
          marginTop: 16, color: "#fff", fontSize: 17, fontWeight: 900,
          letterSpacing: "0.3em", textTransform: "uppercase",
          textShadow: "0 0 20px rgba(220,38,38,0.8)",
          opacity: phase === "in" ? 0 : 1,
          transform: phase === "in" ? "translateY(15px)" : "translateY(0)",
          transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
        }}>The Bharat Plus</p>

        {/* Tagline */}
        <p style={{
          marginTop: 8, color: "rgba(255,255,255,0.45)", fontSize: 11,
          letterSpacing: "0.35em", textTransform: "uppercase",
          opacity: phase === "in" ? 0 : 1,
          transition: "opacity 0.7s ease 0.45s",
        }}>Premium Desi Thriller &amp; Drama</p>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes progress-ring {
          from { stroke-dashoffset: 289; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes orbit-0 { from { transform: rotate(0deg);   } to { transform: rotate(360deg);   } }
        @keyframes orbit-1 { from { transform: rotate(60deg);  } to { transform: rotate(420deg);  } }
        @keyframes orbit-2 { from { transform: rotate(120deg); } to { transform: rotate(480deg); } }
        @keyframes orbit-3 { from { transform: rotate(180deg); } to { transform: rotate(540deg); } }
        @keyframes orbit-4 { from { transform: rotate(240deg); } to { transform: rotate(600deg); } }
        @keyframes orbit-5 { from { transform: rotate(300deg); } to { transform: rotate(660deg); } }
      `}</style>
    </div>
  );
}

const App = () => {
  const [ready, setReady] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!ready && <Preloader onDone={() => setReady(true)} />}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
