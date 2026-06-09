import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ phone: string; plan: string } | null>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) { navigate("/"); return; }
    setUser({
      phone: localStorage.getItem("userPhone") || "",
      plan: localStorage.getItem("userPlan") || "basic",
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userPhone");
    localStorage.removeItem("userPlan");
    localStorage.removeItem("joinDate");
    navigate("/");
  };

  if (!user) return null;

  const isPremium = user.plan === "premium";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 max-w-lg mx-auto">
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
          <h1 className="text-2xl font-black text-white mb-1">Dashboard</h1>
          <p className="text-primary text-sm font-bold mb-6">Subscriber</p>

          <p className="text-white/50 text-sm mb-8">Welcome to your account dashboard.</p>

          <div className="space-y-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Mobile</p>
              <p className="text-white font-bold">+91 {user.phone}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Active Plan</p>
              <p className="text-white font-bold">{isPremium ? "Monthly Plan — ₹179/mo" : "Weekly Plan — ₹79/week"}</p>
              <p className="text-white/40 text-xs mt-1">Your subscription is active. Enjoy unlimited thriller content.</p>
            </div>
          </div>

          <p className="text-white/50 text-sm mb-6">Explore our thriller, crime and mystery content.</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/")}
              className="w-full bg-primary text-black py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Browse Content
            </button>
            <button
              onClick={handleLogout}
              className="w-full border border-white/10 text-white/60 py-3 rounded-xl font-bold text-sm hover:bg-white/5 hover:text-white transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
