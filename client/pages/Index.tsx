import React, { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { VideoThumbnail } from "@/components/VideoThumbnail";
import { AuthModal } from "@/components/AuthModal";
import { VideoModal } from "@/components/VideoModal";
import { Footer } from "@/components/Footer";
import { VIDEOS, getAllCategories, getVideosByCategory } from "@/data/videos";
import { useNavigate, useLocation } from "react-router-dom";
import { Play, Flame, Crosshair, Eye, Skull, Lock, TrendingUp, Star, ChevronLeft, ChevronRight, Shield, Zap } from "lucide-react";

const HERO_IDS = ["1","43","96","67","16","7"];
const heroVideos = HERO_IDS.map(id => VIDEOS.find(v => v.id === id)!).filter(Boolean);
const TRENDING_IDS = ["1","7","43","16","96","67","55","73","78","82","65","85"];
const POPULAR_IDS  = ["3","9","12","15","20","19","29","28","30","40","47","48"];
const trendingVideos = TRENDING_IDS.map(id => VIDEOS.find(v => v.id === id)!).filter(Boolean);
const popularVideos  = POPULAR_IDS.map(id => VIDEOS.find(v => v.id === id)!).filter(Boolean);

interface SectionTheme {
  sectionClass: string;
  titleClass: string;
  badgeClass: string;
  icon: React.ReactNode;
  tagline: string;
}

const THEMES: Record<string, SectionTheme> = {
  "Featured Originals": {
    sectionClass: "relative overflow-hidden bg-gradient-to-br from-yellow-950 via-zinc-950 to-red-950 py-16 px-4 sm:px-6 lg:px-8",
    titleClass: "text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 bg-clip-text text-transparent",
    badgeClass: "inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg",
    icon: <Flame className="w-5 h-5" />,
    tagline: "Handpicked blockbusters you can't miss",
  },
  "Crime & Mafia": {
    sectionClass: "relative overflow-hidden bg-gradient-to-b from-[#120000] via-[#0c0000] to-[#080000] border-t-2 border-red-900 py-16 px-4 sm:px-6 lg:px-8",
    titleClass: "text-3xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-500 uppercase",
    badgeClass: "inline-flex items-center gap-1.5 bg-red-950 border border-red-600 text-red-400 text-xs font-bold px-4 py-1.5 rounded-sm uppercase tracking-widest",
    icon: <Skull className="w-5 h-5" />,
    tagline: "Underworld. Power. Revenge.",
  },
  "Action & Mission": {
    sectionClass: "relative overflow-hidden bg-gradient-to-r from-[#001a00] via-[#000d00] to-[#001a00] py-16 px-4 sm:px-6 lg:px-8",
    titleClass: "text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 tracking-wider",
    badgeClass: "inline-flex items-center gap-1.5 bg-green-500/10 border border-green-400 text-green-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider",
    icon: <Crosshair className="w-5 h-5" />,
    tagline: "High-stakes ops. Zero room for error.",
  },
  "Mystery & Suspense": {
    sectionClass: "relative overflow-hidden bg-gradient-to-b from-[#06061a] via-[#0a0a1f] to-[#06061a] py-16 px-4 sm:px-6 lg:px-8",
    titleClass: "text-3xl sm:text-5xl lg:text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 tracking-tight",
    badgeClass: "inline-flex items-center gap-1.5 bg-indigo-900/50 border border-indigo-400/50 text-indigo-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide",
    icon: <Eye className="w-5 h-5" />,
    tagline: "Nothing is what it seems",
  },
  "Dark Thrillers": {
    sectionClass: "relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-16 px-4 sm:px-6 lg:px-8",
    titleClass: "text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-[0.1em] sm:tracking-[0.2em]",
    badgeClass: "inline-flex items-center gap-1.5 bg-white text-black text-xs font-black px-4 py-1.5 rounded-sm uppercase tracking-widest shadow-lg",
    icon: <Skull className="w-5 h-5" />,
    tagline: "Enter the darkness",
  },
  "Secrets & Betrayal": {
    sectionClass: "relative overflow-hidden bg-gradient-to-br from-purple-950/40 via-zinc-950 to-fuchsia-950/30 py-16 px-4 sm:px-6 lg:px-8",
    titleClass: "text-3xl sm:text-5xl lg:text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 tracking-wide",
    badgeClass: "inline-flex items-center gap-1.5 bg-purple-900/50 border border-purple-400/60 text-purple-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide",
    icon: <Lock className="w-5 h-5" />,
    tagline: "Trust no one. Every secret has a price.",
  },
};

function AnimatedSection({ children, sectionClass }: { children: React.ReactNode; sectionClass: string }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} className={sectionClass} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
      {children}
    </section>
  );
}

const GRID = "max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3";

function dispatch(type: string, id: string) {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";
  if (isAuth) window.dispatchEvent(new CustomEvent("openVideoModal", { detail: { videoId: id } }));
  else window.dispatchEvent(new CustomEvent("openAuthModal", { detail: { videoId: id } }));
}

function SliderBtn({ id, dir, color }: { id: string; dir: "left" | "right"; color: string }) {
  return (
    <button
      onClick={() => { const el = document.getElementById(id); if (el) el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" }); }}
      className={`absolute ${dir}-1 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/60 border ${color} hover:opacity-100 opacity-70 transition-all`}
    >
      {dir === "left" ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
    </button>
  );
}

function SectionHeader({ titleClass, badgeClass, icon, title, tagline }: { titleClass: string; badgeClass: string; icon: React.ReactNode; title: string; tagline: string }) {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h2 className={titleClass}>{title}</h2>
        <span className={badgeClass}>{icon}</span>
      </div>
      <p className="text-sm font-medium tracking-widest text-white/50 uppercase mt-1">{tagline}</p>
    </div>
  );
}

function HeroSection({ heroVideos, onWatch, onBrowse }: { heroVideos: typeof VIDEOS; onWatch: () => void; onBrowse: () => void }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimer = () => { timerRef.current = setInterval(() => setActive(p => (p + 1) % heroVideos.length), 4000); };
  useEffect(() => { startTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, [heroVideos.length]);
  const current = heroVideos[active];
  if (!current) return null;

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-3 grid-rows-2 w-full h-full opacity-50">
          {["/landscape/1.png","/landscape/43.png","/landscape/96.png","/landscape/7.png","/landscape/16.png","/landscape/67.png"].map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-full object-cover" />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50" />
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen pt-24 pb-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto gap-12">
        <div className="max-w-xl w-full">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5 fill-current" /> Now Streaming
          </div>
          <h1 key={active} className="text-5xl sm:text-6xl font-black text-white leading-none mb-4 uppercase tracking-tight" style={{ animation: "fadeSlideUp 0.6s ease both" }}>
            {current.name}
          </h1>
          <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> Thriller</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 9.8</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>HD Quality</span>
          </div>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8">
            Stream exclusive mystery and thriller titles. Suspense, crime, dark drama — all in one place.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={onWatch} className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30">
              <Play className="w-5 h-5 fill-current" /> Watch Now
            </button>
            <button onClick={onBrowse} className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Browse Catalog
            </button>
          </div>
          <div className="flex gap-2 mt-8">
            {heroVideos.map((_, i) => (
              <button key={i} onClick={() => { setActive(i); if (timerRef.current) clearInterval(timerRef.current); startTimer(); }}
                className={`h-1 rounded-full transition-all duration-300 p-0 border-none ${i === active ? "bg-primary w-8" : "bg-white/30 w-4"}`}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-auto flex flex-col items-center gap-4">
          <div className="hero-image relative w-full max-w-sm lg:w-80 xl:w-96 aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
            {heroVideos.map((v, i) => v && (
              <img key={v.id} src={v.thumbnail} alt={v.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: i === active ? 1 : 0 }} />
            ))}
            <button onClick={onWatch} className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group p-0 border-none cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-6 h-6 fill-white text-white ml-0.5" />
              </div>
            </button>
          </div>
          <div className="flex gap-2">
            {heroVideos.map((v, i) => v && (
              <button key={v.id} onClick={() => { setActive(i); if (timerRef.current) clearInterval(timerRef.current); startTimer(); }}
                className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 p-0 flex-none ${i === active ? "border-primary shadow-md shadow-primary/40" : "border-white/10 opacity-50 hover:opacity-80"}`}
              >
                <img src={v.thumbnail} alt={v.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [pendingVideoId, setPendingVideoId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    setCategories(getAllCategories());
    if ((location.state as any)?.openAuth) {
      setAuthModalOpen(true);
      window.history.replaceState({}, "");
    }
  }, []);

  useEffect(() => {
    const handleAuth = (e: CustomEvent) => { setAuthModalOpen(true); setPendingVideoId(e.detail?.videoId); };
    const handleVideo = (e: CustomEvent) => { const v = VIDEOS.find(v => v.id === e.detail?.videoId); if (v) setActiveVideo(v); };
    window.addEventListener("openAuthModal", handleAuth as EventListener);
    window.addEventListener("openVideoModal", handleVideo as EventListener);
    return () => { window.removeEventListener("openAuthModal", handleAuth as EventListener); window.removeEventListener("openVideoModal", handleVideo as EventListener); };
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    if (pendingVideoId) window.dispatchEvent(new CustomEvent("openVideoModal", { detail: { videoId: pendingVideoId } }));
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthModal isOpen={authModalOpen} onClose={() => { setAuthModalOpen(false); setPendingVideoId(null); }} onSuccess={handleAuthSuccess} />
      <Header />
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}

      {/* Hero */}
      <HeroSection
        heroVideos={heroVideos}
        onWatch={() => { const v = heroVideos[0]; if (isAuthenticated) window.dispatchEvent(new CustomEvent("openVideoModal", { detail: { videoId: v?.id } })); else setAuthModalOpen(true); }}
        onBrowse={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      />

      {/* Trending Now */}
      <AnimatedSection sectionClass="relative overflow-hidden bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <TrendingUp className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 uppercase tracking-widest mb-3">Trending Now</h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto font-medium tracking-wide">What everyone is watching right now</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {trendingVideos.map((video, i) => (
            <button key={video.id} onClick={() => dispatch("", video.id)}
              className={["group relative rounded-2xl overflow-hidden border-2 border-slate-800 hover:border-cyan-500 transition-colors cursor-pointer text-left p-0", i === 0 ? "md:col-span-2 md:row-span-2" : ""].join(" ")}
            >
              <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className={`text-white font-bold leading-tight drop-shadow-md line-clamp-2 ${i === 0 ? "text-2xl mb-2" : "text-sm mb-1.5"}`}>{video.name}</h3>
                <div className="h-0.5 w-10 bg-cyan-400 rounded-full group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* All Time Popular */}
      <AnimatedSection sectionClass="relative overflow-hidden bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <div className="inline-flex p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
            <Star className="w-10 h-10 text-amber-400 fill-amber-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 uppercase tracking-widest mb-3">All Time Popular</h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto font-medium tracking-wide">Fan favourites watched again and again</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {popularVideos.map((video) => (
            <div key={video.id} className="w-full aspect-[2/3] overflow-hidden rounded-xl block">
              <VideoThumbnail video={video} />
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Category Sections */}
      {categories.map((category) => {
        const theme = THEMES[category];
        const videos = getVideosByCategory(category);
        if (!theme) return null;

        if (category === "Featured Originals") {
          return (
            <React.Fragment key={category}>
              <AnimatedSection key={category + "fo"} sectionClass={theme.sectionClass}>
                <SectionHeader titleClass={theme.titleClass} badgeClass={theme.badgeClass} icon={theme.icon} title={category} tagline={theme.tagline} />
                <div className={GRID}>
                  {videos.map((video) => <VideoThumbnail key={video.id} video={video} />)}
                </div>
              </AnimatedSection>

              {/* Spotlight */}
              <section className="relative w-full bg-black overflow-hidden py-16 sm:py-24">
                <div className="absolute inset-0">
                  <img src="/portrait/69.png" alt="" className="w-full h-full object-cover" style={{ opacity: 0.25 }} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,_rgba(34,197,94,0.08)_0%,_transparent_100%)]" />
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                    <div className="relative w-full spotlight-left">
                      <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 bg-black/90 border border-green-500/50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-md">
                        <p className="text-green-400 text-[9px] uppercase tracking-widest">Action</p>
                        <p className="text-white text-lg sm:text-2xl font-black leading-none">1 Film</p>
                      </div>
                      <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 z-20 bg-black/90 border border-emerald-500/50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-md">
                        <p className="text-emerald-400 text-[9px] uppercase tracking-widest">Rating</p>
                        <p className="text-white text-lg sm:text-2xl font-black leading-none">9.5 ★</p>
                      </div>
                      <button onClick={() => dispatch("", "69")} className="relative rounded-2xl overflow-hidden group cursor-pointer mt-3 ml-2 sm:mt-0 sm:ml-0 w-full p-0 border-none">
                        <img src="/portrait/69.png" alt="Escape Rout 21" className="w-full h-40 sm:h-56 md:h-[320px] object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
                        <div className="absolute inset-0 rounded-2xl border border-green-500/20 group-hover:border-green-500/60 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all duration-300 bg-black/50 border-white/20 group-hover:bg-green-500/30 group-hover:border-green-400/70">
                            <Play className="text-white fill-white w-5 h-5 ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                          <div className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-400">
                            <span className="flex items-center gap-1"><Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" /> 9.5</span>
                            <span>43 min</span>
                            <span>156K views</span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="space-y-5 sm:space-y-7 spotlight-right">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30 flex-shrink-0">
                          <Eye className="text-white w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.4em] text-green-400">Spotlight · Action</p>
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">Chase · Mission</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm uppercase tracking-widest text-green-400/60 mb-2">High Octane Chase</p>
                        <h2 className="font-black text-white leading-none" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
                          ESCAPE<br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">ROUT 21</span>
                        </h2>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-xs sm:text-sm max-w-md">
                        A pulse-pounding action thriller where one man races against time on a deadly route. No backup. No mercy. No way out.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Action","Chase","Survival","Mission"].map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase bg-green-500/10 text-green-300 border border-green-500/30">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-1">
                        <button onClick={() => dispatch("", "69")} className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold uppercase text-xs sm:text-sm rounded-lg shadow-xl shadow-green-500/25">
                          <Play className="w-4 h-4 fill-white" /> Watch Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </React.Fragment>
          );
        }

        if (category === "Secrets & Betrayal") {
          const s1 = videos.slice(0, 4);
          const s2 = videos.slice(4, 8);
          const s3 = videos.slice(8, 12);
          const subTitles = ["Hidden Alliances", "Secret Nights", "Dangerous Destinations"];
          return (
            <AnimatedSection key={category} sectionClass={theme.sectionClass}>
              <SectionHeader titleClass={theme.titleClass} badgeClass={theme.badgeClass} icon={theme.icon} title={category} tagline={theme.tagline} />
              <div className="max-w-7xl mx-auto space-y-10">
                {[s1, s2, s3].map((row, ri) => (
                  <div key={ri}>
                    <p className="text-xs text-purple-400/50 uppercase tracking-widest font-bold mb-4">{subTitles[ri]}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {row.map((video) => (
                        <div key={video.id} className="aspect-video">
                          <VideoThumbnail video={video} />
                        </div>
                      ))}
                    </div>
                    {ri < 2 && <div className="mt-10 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          );
        }

        if (category === "Dark Thrillers") {
          const rows = [videos.slice(0, 9), videos.slice(9, 18), videos.slice(18, 27)];
          const labels = ["Shadow Files", "Black Ops", "Dark Empire"];
          return (
            <AnimatedSection key={category} sectionClass={theme.sectionClass}>
              <div className="absolute inset-0 pointer-events-none">
                <img src="/portrait/45.png" alt="" className="w-full h-full object-cover opacity-[0.18]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
              </div>
              <SectionHeader titleClass={theme.titleClass} badgeClass={theme.badgeClass} icon={theme.icon} title={category} tagline={theme.tagline} />
              <div className="space-y-8">
                {rows.map((row, ri) => (
                  <div key={ri} className="max-w-7xl mx-auto">
                    <p className="text-xs text-white/30 uppercase tracking-widest font-bold mb-3">{labels[ri]}</p>
                    <div className="relative">
                      <SliderBtn id={`dark-slider-${ri}`} dir="left" color="border-white/20 text-white/50" />
                      <div id={`dark-slider-${ri}`} className="flex gap-3 overflow-x-auto scroll-smooth pb-2 px-6" style={{ scrollbarWidth: "none" }}>
                        {row.map((video) => (
                          <div key={video.id} className="flex-none w-36 sm:w-44 aspect-[2/3]">
                            <VideoThumbnail video={video} />
                          </div>
                        ))}
                      </div>
                      <SliderBtn id={`dark-slider-${ri}`} dir="right" color="border-white/20 text-white/50" />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          );
        }

        if (category === "Mystery & Suspense") {
          const half1 = videos.slice(0, 10);
          const half2 = videos.slice(10, 20);
          return (
            <React.Fragment key={category + "ms"}>
              <AnimatedSection key={category + "1"} sectionClass={theme.sectionClass}>
                <SectionHeader titleClass={theme.titleClass} badgeClass={theme.badgeClass} icon={theme.icon} title={category} tagline={theme.tagline} />
                <div className="relative max-w-7xl mx-auto">
                  <SliderBtn id="mystery-slider-1" dir="left" color="border-indigo-700 text-indigo-400" />
                  <div id="mystery-slider-1" className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-6" style={{ scrollbarWidth: "none" }}>
                    {half1.map((video) => (
                      <div key={video.id} className="flex-none w-64 sm:w-72 aspect-video">
                        <VideoThumbnail video={video} />
                      </div>
                    ))}
                  </div>
                  <SliderBtn id="mystery-slider-1" dir="right" color="border-indigo-700 text-indigo-400" />
                </div>
              </AnimatedSection>

              <AnimatedSection key={category + "2"} sectionClass="relative overflow-hidden bg-gradient-to-b from-[#05050f] to-[#0a0a1f] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto mb-10">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-violet-300 tracking-tight italic">{category} <span className="text-xl text-violet-400/60">Vol. 2</span></h2>
                    <span className="inline-flex items-center gap-1.5 bg-violet-900/60 border border-violet-400/40 text-violet-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">{theme.icon}</span>
                  </div>
                  <p className="text-sm font-medium tracking-widest text-white/50 uppercase mt-1">More mysteries await — deeper, darker, stranger</p>
                </div>
                <div className="relative max-w-7xl mx-auto">
                  <SliderBtn id="mystery-slider-2" dir="left" color="border-violet-700 text-violet-400" />
                  <div id="mystery-slider-2" className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-6" style={{ scrollbarWidth: "none" }}>
                    {half2.map((video) => (
                      <div key={video.id} className="flex-none w-64 sm:w-72 aspect-video">
                        <VideoThumbnail video={video} />
                      </div>
                    ))}
                  </div>
                  <SliderBtn id="mystery-slider-2" dir="right" color="border-violet-700 text-violet-400" />
                </div>
              </AnimatedSection>
            </React.Fragment>
          );
        }

        if (category === "Action & Mission") {
          const half1 = videos.slice(0, 9);
          const half2 = videos.slice(9, 18);
          return (
            <AnimatedSection key={category} sectionClass={theme.sectionClass}>
              <div className="absolute inset-0 pointer-events-none">
                <img src="/landscape/69.png" alt="" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#001a00]/60 via-transparent to-[#001a00]/60" />
              </div>
              <SectionHeader titleClass={theme.titleClass} badgeClass={theme.badgeClass} icon={theme.icon} title={category} tagline={theme.tagline} />
              <div className="max-w-7xl mx-auto mb-3">
                <p className="text-xs text-green-500/60 uppercase tracking-widest mb-4 font-bold">Missions &amp; Ops — Part 1</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
                  {half1.map((video) => (
                    <div key={video.id} className="aspect-[2/3]">
                      <VideoThumbnail video={video} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="max-w-7xl mx-auto my-8 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
              <div className="max-w-7xl mx-auto">
                <p className="text-xs text-green-500/60 uppercase tracking-widest mb-4 font-bold">Escape &amp; Chase — Part 2</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
                  {half2.map((video) => (
                    <div key={video.id} className="aspect-[2/3]">
                      <VideoThumbnail video={video} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        }

        if (category === "Crime & Mafia") {
          return (
            <AnimatedSection key={category} sectionClass={theme.sectionClass}>
              <SectionHeader titleClass={theme.titleClass} badgeClass={theme.badgeClass} icon={theme.icon} title={category} tagline={theme.tagline} />
              <div className="relative max-w-7xl mx-auto">
                <SliderBtn id="crime-slider" dir="left" color="border-red-700 text-red-400" />
                <div id="crime-slider" className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-6" style={{ scrollbarWidth: "none" }}>
                  {videos.map((video) => (
                    <div key={video.id} className="flex-none w-40 sm:w-48 aspect-[2/3]">
                      <VideoThumbnail video={video} />
                    </div>
                  ))}
                </div>
                <SliderBtn id="crime-slider" dir="right" color="border-red-700 text-red-400" />
              </div>
            </AnimatedSection>
          );
        }

        return (
          <AnimatedSection key={category} sectionClass={theme.sectionClass}>
            <SectionHeader titleClass={theme.titleClass} badgeClass={theme.badgeClass} icon={theme.icon} title={category} tagline={theme.tagline} />
            <div className={GRID}>
              {videos.map((video) => <VideoThumbnail key={video.id} video={video} />)}
            </div>
          </AnimatedSection>
        );
      })}
      <Footer />
    </div>
  );
}
