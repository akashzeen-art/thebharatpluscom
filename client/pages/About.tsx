import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Check, MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-3xl mx-auto">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">About Us</h1>
          <p className="text-primary font-bold text-lg">Zeen Digital Solutions LLP</p>
        </div>

        {/* About */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 mb-5">
          <p className="text-white/70 leading-relaxed mb-4">
            Zeen Digital Solutions LLP is a premium OTT streaming platform delivering movies, web series, TV shows, live channels, documentaries, and exclusive entertainment across multiple devices with a secure subscription experience.
          </p>
          <p className="text-white/70 leading-relaxed">
            Our library features blockbuster movies, binge-worthy web series, TV shows, live channels, documentaries, and exclusive originals with fresh content added regularly.
          </p>
        </div>

        {/* What We Offer */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 mb-5">
          <h2 className="text-lg font-black text-white mb-4">What We Offer</h2>
          <ul className="space-y-3">
            {[
              "Premium movies, web series, TV shows & live channels",
              "HD & 4K streaming with multi-device access",
              "Personalized recommendations & regular content updates",
              "Flexible subscription plans",
              "New content added regularly",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-white/40 text-xs mt-4 leading-relaxed">
            Disclaimer: Content is provided for entertainment purposes only. Availability may vary by region, licensing, and subscription plan. Unauthorized reproduction or redistribution is prohibited.
          </p>
        </div>

        {/* Company Details */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
          <h2 className="text-lg font-black text-white mb-5">Company Details</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Registered Name</p>
                <p className="text-white text-sm font-bold">Zeen Digital Solutions LLP</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Address</p>
                <p className="text-white text-sm">418, 4th Floor SPAZE I Tech Park, Sohna Road Sector 49, Gurugram, Haryana, 122018</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                <a href="tel:+918929836907" className="text-white text-sm hover:text-primary transition-colors">+91 8929836907</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Email</p>
                <a href="mailto:reetesh.kumar@zeendigital.com" className="text-white text-sm hover:text-primary transition-colors">reetesh.kumar@zeendigital.com</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
