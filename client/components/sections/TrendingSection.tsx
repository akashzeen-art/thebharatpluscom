import { TrendingUp } from "lucide-react";
import { VideoThumbnail } from "@/components/VideoThumbnail";
import { AnimatedSection } from "./AnimatedSection";

interface Props {
  videos: { id: string; name: string; thumbnail: string }[];
}

export function TrendingSection({ videos }: Props) {
  const handleClick = (id: string) => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";
    if (isAuth) window.dispatchEvent(new CustomEvent("openVideoModal", { detail: { videoId: id } }));
    else window.dispatchEvent(new CustomEvent("openAuthModal", { detail: { videoId: id } }));
  };

  return (
    <AnimatedSection sectionClass="relative overflow-hidden bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
          <TrendingUp className="w-10 h-10 text-cyan-400" />
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 uppercase tracking-widest mb-3">Trending Now</h2>
        <p className="text-slate-400 text-base max-w-2xl mx-auto font-medium tracking-wide">What everyone is watching right now</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
        {videos.map((video, i) => (
          <button
            key={video.id}
            onClick={() => handleClick(video.id)}
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
  );
}
