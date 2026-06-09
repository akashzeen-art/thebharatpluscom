import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-zinc-900 border-t border-white/10 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
        <Link to="/">
          <img src="/logo/Gemini_Generated_Image_phk392phk392phk3.png" alt="Logo" className="h-14 w-auto object-contain" />
        </Link>
        <p className="text-white/50 text-base">Your gateway to premium desi thriller, crime &amp; drama content</p>
        <p className="text-white/30 text-sm">Copyright © 2026, Zeen Digital Solutions LLP All Rights Reserved</p>
        <div className="flex items-center gap-3 text-white/40 text-sm">
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Services</Link>
          <span className="text-white/20">|</span>
          <Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
          <span className="text-white/20">|</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
