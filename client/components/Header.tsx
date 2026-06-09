import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Home, User, Info, FileText, RotateCcw, Shield, PhoneCall } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleAccount = () => {
    setOpen(false);
    if (isAuthenticated) navigate("/account");
    else window.dispatchEvent(new CustomEvent("openAuthModal"));
  };

  return (
    <header className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${scrolled ? "bg-background/60 backdrop-blur-md border-border/10" : "bg-gradient-to-b from-background via-background to-transparent border-border/20"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo/Gemini_Generated_Image_phk392phk392phk3.png" alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Hamburger */}
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-white/5 transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-full right-0 mt-2 w-52 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden dropdown-animate">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4 text-primary" />
                Home
              </Link>
              <div className="h-px bg-white/10 mx-4" />
              <button
                onClick={handleAccount}
                className="w-full flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors text-left"
              >
                <User className="w-4 h-4 text-primary" />
                My Account
              </button>
              <div className="h-px bg-white/10 mx-4" />
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Info className="w-4 h-4 text-primary" />
                About Us
              </Link>
              <div className="h-px bg-white/10 mx-4" />
              <Link
                to="/terms"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-primary" />
                Terms &amp; Conditions
              </Link>
              <div className="h-px bg-white/10 mx-4" />
              <Link
                to="/refund"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-primary" />
                Refund Policy
              </Link>
              <div className="h-px bg-white/10 mx-4" />
              <Link
                to="/privacy"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Shield className="w-4 h-4 text-primary" />
                Privacy Policy
              </Link>
              <div className="h-px bg-white/10 mx-4" />
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
