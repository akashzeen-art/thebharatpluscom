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
    const t2 = setTimeout(() => setPhase("out"), 3200);
    const t3 = setTimeout(onDone, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const bgImages = ["/landscape/1.png","/landscape/43.png","/landscape/96.png","/landscape/67.png","/landscape/16.png","/landscape/7.png"];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, overflow: "hidden", opacity: phase === "out" ? 0 : 1, transition: phase === "out" ? "opacity 0.8s ease" : "none", pointerEvents: phase === "out" ? "none" : "all" }}>

      {/* Collage background with Ken Burns */}
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(2,1fr)" }}>
        {bgImages.map((src, i) => (
          <div key={i} style={{ overflow: "hidden", position: "relative" }}>
            <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35, animation: `kenburns-${i % 3} 4s ease-out forwards` }} />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 100%)" }} />

      {/* Red radial glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(220,38,38,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Particle dots */}
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: i % 3 === 0 ? 4 : 2, height: i % 3 === 0 ? 4 : 2,
          borderRadius: "50%",
          background: i % 2 === 0 ? "rgba(220,38,38,0.7)" : "rgba(255,255,255,0.4)",
          left: `${8 + (i * 7.5) % 84}%`,
          top: `${10 + (i * 13) % 80}%`,
          animation: `float-dot ${2 + (i % 3)}s ease-in-out infinite alternate`,
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}

      {/* Spinning rings */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
        <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(220,38,38,0.5)", top: "50%", left: "50%", marginTop: -100, marginLeft: -100, animation: "spin 2.5s linear infinite" }} />
        <div style={{ position: "absolute", width: 250, height: 250, borderRadius: "50%", border: "1px dashed rgba(220,38,38,0.25)", top: "50%", left: "50%", marginTop: -125, marginLeft: -125, animation: "spin 4s linear infinite reverse" }} />
        <div style={{ position: "absolute", width: 155, height: 155, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", top: "50%", left: "50%", marginTop: -77.5, marginLeft: -77.5, animation: "spin 3s linear infinite" }} />
      </div>

      {/* Center content */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {/* Logo */}
        <img
          src="/logo/Gemini_Generated_Image_phk392phk392phk3.png"
          alt="The Bharat Plus"
          style={{
            width: 120,
            filter: "drop-shadow(0 0 24px rgba(220,38,38,0.6))",
            opacity: phase === "in" ? 0 : 1,
            transform: phase === "in" ? "scale(0.5) translateY(30px)" : "scale(1) translateY(0)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />

        {/* Title */}
        <p style={{
          marginTop: 18,
          color: "#fff",
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          textShadow: "0 0 20px rgba(220,38,38,0.8)",
          opacity: phase === "in" ? 0 : 1,
          transform: phase === "in" ? "translateY(15px)" : "translateY(0)",
          transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
        }}>The Bharat Plus</p>

        {/* Tagline */}
        <p style={{
          marginTop: 8,
          color: "rgba(255,255,255,0.45)",
          fontSize: 11,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          opacity: phase === "in" ? 0 : 1,
          transition: "opacity 0.7s ease 0.45s",
        }}>Premium Desi Thriller &amp; Drama</p>

        {/* Loading bar */}
        <div style={{ marginTop: 36, width: 140, height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", background: "linear-gradient(90deg,#dc2626,#f97316,#dc2626)", backgroundSize: "200%", borderRadius: 4, animation: "preloader-bar 3.2s ease forwards, shimmer 1s linear infinite" }} />
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes preloader-bar { from { width: 0%; } to { width: 100%; } }
        @keyframes shimmer { from { background-position: 200% center; } to { background-position: -200% center; } }
        @keyframes float-dot { from { transform: translateY(0px); } to { transform: translateY(-12px); } }
        @keyframes kenburns-0 { from { transform: scale(1) translate(0,0); } to { transform: scale(1.12) translate(-2%,-2%); } }
        @keyframes kenburns-1 { from { transform: scale(1) translate(0,0); } to { transform: scale(1.1) translate(2%,-1%); } }
        @keyframes kenburns-2 { from { transform: scale(1) translate(0,0); } to { transform: scale(1.08) translate(-1%,2%); } }
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
