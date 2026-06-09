import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MapPin, Mail } from "lucide-react";

const sections = [
  { num: "1", title: "Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support — including name, email, phone, payment info, usage data, and device information." },
  { num: "2", title: "How We Use Your Information", content: "We use the information to provide, maintain, and improve our Service; process transactions; send notices; respond to support requests; and personalise content." },
  { num: "3", title: "Sharing of Information", content: "We may share information with service providers, in response to legal requests, to protect rights and safety, or in connection with a merger or acquisition." },
  { num: "4", title: "Cookies", content: "We use cookies and similar tracking technologies. You can instruct your browser to refuse all cookies, though some portions of our Service may not function properly." },
  { num: "5", title: "User-Generated Content", content: "Our Service may allow you to post content. You are responsible for the content you post, including its legality, reliability, and appropriateness." },
  { num: "6", title: "Links to Other Sites", content: "Our Service may contain links to third-party sites. We have no control over and assume no responsibility for their content or privacy policies." },
  { num: "7", title: "Children's Privacy", content: "Our Services are not intended for users under the age of 16. We do not knowingly collect personal data from children. If you believe a child has submitted personal information through our platform, please contact us immediately at reetesh.kumar@zeendigital.com and we will take prompt steps to delete such information from our records.", email: "reetesh.kumar@zeendigital.com" },
  { num: "8", title: "Security and Data Retention", content: "We strive to use commercially acceptable means to protect your data. We retain your Personal Data only as long as necessary for the purposes set out in this policy." },
  { num: "9", title: "Your Rights", content: "You have the right to access, correct, update, or delete the personal information we hold about you. Contact us through the information below." },
  { num: "10", title: "Disclaimer", content: `The content provided on this platform, including all workout programs, exercise videos, training sessions, and related materials, is intended for general fitness and wellness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Users are advised to consult a qualified healthcare professional before starting any new fitness or exercise program, especially if they have any pre-existing medical conditions, injuries, or health concerns.\n\nBy participating in these workouts and activities, you acknowledge that you do so voluntarily and at your own risk. The platform, trainers, and instructors shall not be held responsible for any injuries, damages, or losses that may occur as a result of using this content. Individual results may vary based on body type, fitness level, consistency, and lifestyle.` },
  { num: "11", title: "Governing Law and Jurisdiction", content: "These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising out of or relating to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana." },
  { num: "12", title: "Updates to This Policy", content: "We may update our Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page." },
];

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-3xl mx-auto">

        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="mb-8">
          <h1 className="legal-heading text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-400 mb-2">Privacy Policy</h1>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Last Updated: 09-06-2026</p>
        </div>

        <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/30 to-zinc-900/60 p-6 mb-5">
          <p className="legal-body">
            This Privacy Policy describes how Zeen Digital Solutions LLP collects, uses, and shares information about you when you use our services.
          </p>
        </div>

        {sections.map((s) => (
          <div key={s.num} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 mb-5">
            <h2 className="legal-heading text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 mb-3">{s.num}. {s.title}</h2>
            {s.email ? (
              <p className="legal-body">
                {s.content.split(s.email).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<a href={`mailto:${s.email}`} className="text-indigo-400 hover:underline">{s.email}</a></span>
                  ) : <span key={i}>{part}</span>
                )}
              </p>
            ) : (
              <p className="legal-body whitespace-pre-line">{s.content}</p>
            )}
          </div>
        ))}

        <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/20 to-zinc-900/60 p-6">
          <h2 className="legal-heading text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 mb-4">Contact</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
              <p className="legal-body">418, 4th Floor SPAZE I Tech Park, Sohna Road Sector 49, Gurugram, Haryana, 122018</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <a href="mailto:reetesh.kumar@zeendigital.com" className="text-indigo-400 hover:underline legal-body">reetesh.kumar@zeendigital.com</a>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
