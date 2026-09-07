import { useState, FormEvent } from "react";
import { ArrowRight, Mail, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { StructuredData, getOrganizationSchema, getBreadcrumbSchema } from "../components/StructuredData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useSEO({
    title: "Contact Us — Limanex Studio",
    description:
      "Get in touch with Limanex Studio. Questions about our apps, partnership opportunities, or just want to say hello — we're ready to listen.",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("limanexsoftware@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main
      id="main-content"
      className="flex-grow flex flex-col justify-center max-w-[1100px] mx-auto w-full px-6 pt-36 pb-32"
    >
      <StructuredData
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://limanexstudio.com/" },
            { name: "Contact", url: "https://limanexstudio.com/contact" },
          ]),
        ]}
      />

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-brand-500/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Editorial Contact Card */}
      <div className="glass-card overflow-hidden border border-white/[0.08] p-8 sm:p-14 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Communication */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-300 mb-6">
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Direct Studio Channel</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                Get in touch.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-normal">
                Whether you have a question about our games, partnership opportunities, or just want to say hello, we're ready to listen.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Direct Email
              </p>
              
              <div className="flex items-center gap-2">
                <a
                  href="mailto:limanexsoftware@outlook.com"
                  className="flex-1 group inline-flex items-center gap-3 p-4 rounded-2xl glass hover:border-brand-400/40 transition-all duration-300 min-h-[56px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/30 to-accent-400/20 flex items-center justify-center shrink-0 border border-white/10 text-brand-300 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-white group-hover:text-brand-300 transition-colors break-all">
                    limanexsoftware@outlook.com
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="p-4 rounded-2xl glass hover:border-brand-400/40 text-gray-300 hover:text-white transition-all min-h-[56px] min-w-[56px] flex items-center justify-center"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-accent-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-accent-400 font-medium">Email address copied to clipboard!</p>
              )}
            </div>

            <div className="pt-2 text-xs text-gray-400 leading-relaxed">
              We aim to respond to all developer inquiries, studio collaborations, and support requests within 24–48 hours.
            </div>
          </div>

          {/* Right Column: Premium Digital Product Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-white/10 bg-[#0e0e15]/90 px-4 py-4 text-sm text-white placeholder:text-gray-500 outline-none transition-all focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#0e0e15]/90 px-4 py-4 text-sm text-white placeholder:text-gray-500 outline-none transition-all focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#0e0e15]/90 px-4 py-4 text-sm text-white placeholder:text-gray-500 outline-none transition-all focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:brightness-110 text-white font-semibold text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-brand-500/25 min-h-[52px]"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-white" aria-hidden="true" />
                      <span>Message Received</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl glass border border-brand-400/30 text-sm text-gray-300 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0" />
                  <span>Thank you! Your message has been noted. We will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
