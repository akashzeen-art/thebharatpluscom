import { Play } from "lucide-react";
import type { Video } from "@/data/videos";

interface VideoThumbnailProps {
  video: Video;
}

export const VideoThumbnail = ({ video }: VideoThumbnailProps) => {
  const handleClick = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      window.dispatchEvent(new CustomEvent("openVideoModal", { detail: { videoId: video.id } }));
    } else {
      window.dispatchEvent(new CustomEvent("openAuthModal", { detail: { videoId: video.id } }));
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group relative w-full h-full overflow-hidden rounded-xl border-none p-0 cursor-pointer hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
    >
      <img
        src={video.thumbnail}
        alt={video.name}
        className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
      />

      {/* Play overlay on hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-primary/90 text-primary-foreground p-3 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Play className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
        </div>
      </div>

      {/* Title at bottom on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-semibold text-xs line-clamp-2">{video.name}</p>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/60 transition-colors duration-300 pointer-events-none" />
    </button>
  );
};
