import { useEffect } from "react";
import { X } from "lucide-react";
import type { Video } from "@/data/videos";

interface VideoModalProps {
  video: Video;
  onClose: () => void;
}

export const VideoModal = ({ video, onClose }: VideoModalProps) => {
  const phone = localStorage.getItem("userPhone") || "";
  const plan = localStorage.getItem("userPlan") || "basic";

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl modal-animate modal-animate">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white/10 transition-all"
        >
          <X width={18} height={18} />
        </button>

        {/* Video */}
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <video
            src={video.videoPath}
            autoPlay
            controls
            playsInline
            poster={video.thumbnail}
            className="w-full h-full object-cover"
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
          />
        </div>

        {/* Info bar */}
        <div className="px-4 py-3 bg-black/90">
          <p className="text-white font-bold text-lg sm:text-xl">{video.name}</p>
          <p className="text-gray-400 text-xs mt-0.5">
            {phone ? `+91 ${phone}` : "Guest"} · {plan === "premium" ? "Premium Plan" : "Monthly Plan"}
          </p>
        </div>
      </div>
    </div>
  );
};
