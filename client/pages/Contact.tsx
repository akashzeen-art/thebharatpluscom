import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Building2, MapPin, Phone, Mail, Zap } from "lucide-react";

export default function Contact() {
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
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Contact Us</h1>
          <p className="text-white/50 text-sm">We'd love to hear from you. Feel free to reach out.</p>
        </div>

        {/* Contact Details */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 mb-5">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Company</p>
                <p className="text-white text-sm font-bold">Zeen Digital Solutions LLP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Address</p>
                <p className="text-white text-sm">418, 4th Floor SPAZE I Tech Park, Sohna Road, Sector 49, Gurugram, Haryana, 122018</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                <a href="tel:+918929836907" className="text-white text-sm font-bold hover:text-primary transition-colors">+91 8929836907</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Email</p>
                <a href="mailto:reetesh.kumar@zeendigital.com" className="text-white text-sm font-bold hover:text-primary transition-colors">reetesh.kumar@zeendigital.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 mb-5">
          <a
            href="https://forms.gle/CJS6wXQis9hKe7Da8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary text-black py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" /> Send Us a Message
          </a>
        </div>

        {/* Quick Support */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 flex items-start gap-3">
          <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-white/70 text-sm">
            Need faster support? Email us at{" "}
            <a href="mailto:reetesh.kumar@zeendigital.com" className="text-primary hover:underline">
              reetesh.kumar@zeendigital.com
            </a>{" "}
            for the quickest response.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}