import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Check, X } from "lucide-react";

const policies = [
  { num: "1", title: "Free Trial", content: "Zeen Digital Solutions LLP does not offer a free trial. Users can cancel their subscription at any time from their account page." },
  { num: "2", title: "Cancellation Policy", content: "Subscribers may cancel their recurring subscription at any time. Upon cancellation, access remains active until the end of the current billing cycle." },
  { num: "3", title: "Refund Eligibility", content: "To be eligible for a refund, you must submit a request within 2 days of your subscription start date. Refunds are granted on a case-by-case basis at the sole discretion of Zeen Digital Solutions LLP." },
  { num: "4", title: "Process for Requesting a Refund", content: "To request a refund, please contact our customer support team at reetesh.kumar@zeendigital.com. Include your account information, subscription details, and a brief explanation.", email: "reetesh.kumar@zeendigital.com" },
  { num: "5", title: "Refund Processing", content: "Once your refund request is received and reviewed, we will notify you of approval or rejection by email. If approved, your refund will be processed within 7 working days." },
  { num: "6", title: "Changes to Refund Policy", content: "Zeen Digital Solutions LLP reserves the right to modify this refund policy at any time. Changes take effect immediately upon posting on the website." },
  { num: "7", title: "Contact Us", content: "If you have any questions about our refund policy, please contact us at reetesh.kumar@zeendigital.com.", email: "reetesh.kumar@zeendigital.com" },
];

export default function Refund() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-3xl mx-auto">

        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="mb-8">
          <h1 className="legal-heading text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-400 mb-2">Refund Policy</h1>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Last Updated: 09-06-2026</p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 to-zinc-900/60 p-6 mb-5">
          <p className="legal-body">
            Thank you for subscribing to Zeen Digital Solutions LLP. We hope you are satisfied with our services, but if not, we're here to help.
          </p>
        </div>

        {policies.map((p) => (
          <div key={p.num} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 mb-5">
            <h2 className="legal-heading text-sm text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 mb-2">{p.num}. {p.title}</h2>
            {p.email ? (
              <p className="legal-body">
                {p.content.split(p.email).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<a href={`mailto:${p.email}`} className="text-emerald-400 hover:underline">{p.email}</a></span>
                  ) : <span key={i}>{part}</span>
                )}
              </p>
            ) : (
              <p className="legal-body">{p.content}</p>
            )}
          </div>
        ))}

        <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 to-zinc-900/60 p-6">
          <h2 className="legal-heading text-sm text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 mb-5">Refund Scenarios</h2>

          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-4 h-4 text-green-400" />
              <p className="legal-heading text-xs text-green-400">Refunds Would Typically Be Granted</p>
            </div>
            <div className="space-y-3 pl-6">
              <div>
                <p className="legal-heading text-xs text-white/80 mb-1">Technical Issues</p>
                <p className="legal-body">Persistent technical issues preventing use of the service.</p>
              </div>
              <div>
                <p className="legal-heading text-xs text-white/80 mb-1">Billing Error</p>
                <p className="legal-body">Incorrectly charged due to a billing error on our part.</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 mb-5" />

          <div>
            <div className="flex items-center gap-2 mb-3">
              <X className="w-4 h-4 text-red-400" />
              <p className="legal-heading text-xs text-red-400">Refunds Would Not Typically Be Granted</p>
            </div>
            <div className="pl-6">
              <p className="legal-heading text-xs text-white/80 mb-1">Change of Mind</p>
              <p className="legal-body">Customer decides they no longer want the service after the refund eligibility period.</p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
