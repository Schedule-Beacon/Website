import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Loader2, AlertCircle } from "lucide-react";
import { Link } from "react-router";
import { Eyebrow, LightHero } from "./Brand";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, isEmailJSConfigured } from "../lib/emailjs";
import { US_STATES } from "../lib/usStates";

const contactChannels = [
  {
    title: "Email Us",
    href: "mailto:info@schedulebeacon.com",
    detail: "info@schedulebeacon.com",
    sub: "We respond within 24 hours",
  },
  {
    title: "Call Us",
    href: "tel:+15184195335",
    detail: "(518) 419-5335",
    sub: "Mon–Fri, 8 AM–6 PM EST",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    state: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // If EmailJS hasn't been configured yet, warn in dev but still show success UI
    if (!isEmailJSConfigured()) {
      console.warn(
        "[Schedule Beacon] EmailJS is not configured. Open /src/app/lib/emailjs.ts and fill in your credentials."
      );
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          district: formData.district || "Not provided",
          state: formData.state || "Not provided",
          subject: formData.subject,
          message: formData.message,
          to_email: "info@schedulebeacon.com",
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong sending your message. Please try emailing us directly at info@schedulebeacon.com.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <LightHero
        eyebrow="Contact Us"
        title={
          <>
            We'd love to <span className="text-[#B8860B]">hear from you</span>
          </>
        }
      >
        <p className="text-xl text-[var(--midnight-blue)]/65" style={{ lineHeight: 1.7 }}>
          Whether you have a question, want a demo, or just want to chat about scheduling — we're here.
        </p>
      </LightHero>

      {/* ── Contact Panel + Form ─────────────────────────────── */}
      <section
        className="py-20 bg-[var(--soft-grey)]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,33,71,0.07) 1.2px, transparent 1.2px)", backgroundSize: "22px 22px" }}
      >
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] bg-white rounded-2xl overflow-hidden shadow-2xl shadow-[var(--midnight-blue)]/10 ring-1 ring-black/5">
            {/* Info panel */}
            <aside className="relative bg-[var(--midnight-blue)] text-white p-10 flex flex-col overflow-hidden">
              <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-[var(--university-gold)] opacity-[0.12] blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl mb-3" style={{ fontWeight: 800 }}>Contact information</h2>
                <p className="text-white/60 text-sm" style={{ lineHeight: 1.7 }}>
                  Fill out the form and a member of our team will be in touch within one business day. For urgent
                  issues, please call us directly.
                </p>
              </div>

              <dl className="relative mt-10 space-y-7">
                {contactChannels.map((channel) => (
                  <div key={channel.title}>
                    <dt className="text-[var(--university-gold)] text-[11px] uppercase mb-1.5" style={{ fontWeight: 700, letterSpacing: "0.22em" }}>
                      {channel.title}
                    </dt>
                    <dd>
                      <a href={channel.href} className="text-white text-lg hover:text-[var(--university-gold)] transition-colors" style={{ fontWeight: 700 }}>
                        {channel.detail}
                      </a>
                      <div className="text-white/45 text-xs mt-0.5">{channel.sub}</div>
                    </dd>
                  </div>
                ))}
                <div>
                  <dt className="text-[var(--university-gold)] text-[11px] uppercase mb-1.5" style={{ fontWeight: 700, letterSpacing: "0.22em" }}>
                    Office
                  </dt>
                  <dd className="text-white" style={{ fontWeight: 600 }}>TBD</dd>
                </div>
                <div>
                  <dt className="text-[var(--university-gold)] text-[11px] uppercase mb-1.5" style={{ fontWeight: 700, letterSpacing: "0.22em" }}>
                    Business Hours
                  </dt>
                  <dd className="text-white" style={{ fontWeight: 600 }}>
                    Monday – Friday
                    <div className="text-white/45 text-xs mt-0.5" style={{ fontWeight: 400 }}>8:00 AM – 6:00 PM EST</div>
                  </dd>
                </div>
              </dl>

              {/* Quick answers */}
              <div className="relative mt-auto pt-10">
                <div className="border-t border-white/15 pt-6">
                  <div className="text-white/50 text-sm mb-3">Looking for quick answers?</div>
                  <div className="flex flex-col gap-2">
                    <Link to="/faq" className="group inline-flex items-center gap-2 text-white hover:text-[var(--university-gold)] transition-colors text-sm" style={{ fontWeight: 700 }}>
                      Browse the FAQ
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/resources" className="group inline-flex items-center gap-2 text-white hover:text-[var(--university-gold)] transition-colors text-sm" style={{ fontWeight: 700 }}>
                      Visit resources
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16">
                    <Eyebrow tone="navy">Received</Eyebrow>
                    <h3 className="text-2xl text-[var(--midnight-blue)] mb-3" style={{ fontWeight: 800 }}>Message sent!</h3>
                    <p className="text-[var(--midnight-blue)]/55">
                      Thanks for reaching out. We'll get back to you within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl text-[var(--midnight-blue)]" style={{ fontWeight: 800 }}>Send us a message</h2>
                    <p className="text-[var(--midnight-blue)]/50 text-sm mt-1">Fields marked * are required.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] text-[var(--midnight-blue)]/80 mb-2" style={{ fontWeight: 600 }}>Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50/70 text-[var(--midnight-blue)] placeholder:text-slate-400 transition-all hover:border-slate-300 focus:outline-none focus:bg-white focus:border-[var(--midnight-blue)] focus:ring-4 focus:ring-[var(--midnight-blue)]/10" />
                      </div>
                      <div>
                        <label className="block text-[13px] text-[var(--midnight-blue)]/80 mb-2" style={{ fontWeight: 600 }}>Work Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@district.edu" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50/70 text-[var(--midnight-blue)] placeholder:text-slate-400 transition-all hover:border-slate-300 focus:outline-none focus:bg-white focus:border-[var(--midnight-blue)] focus:ring-4 focus:ring-[var(--midnight-blue)]/10" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] text-[var(--midnight-blue)]/80 mb-2" style={{ fontWeight: 600 }}>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50/70 text-[var(--midnight-blue)] placeholder:text-slate-400 transition-all hover:border-slate-300 focus:outline-none focus:bg-white focus:border-[var(--midnight-blue)] focus:ring-4 focus:ring-[var(--midnight-blue)]/10" />
                      </div>
                      <div>
                        <label className="block text-[13px] text-[var(--midnight-blue)]/80 mb-2" style={{ fontWeight: 600 }}>School District</label>
                        <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Lincoln Unified School District" className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50/70 text-[var(--midnight-blue)] placeholder:text-slate-400 transition-all hover:border-slate-300 focus:outline-none focus:bg-white focus:border-[var(--midnight-blue)] focus:ring-4 focus:ring-[var(--midnight-blue)]/10" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] text-[var(--midnight-blue)]/80 mb-2" style={{ fontWeight: 600 }}>State</label>
                        <div className="relative">
                          <select name="state" value={formData.state} onChange={handleChange} className="w-full h-12 pl-4 pr-10 appearance-none cursor-pointer rounded-lg border border-slate-200 bg-slate-50/70 text-[var(--midnight-blue)] transition-all hover:border-slate-300 focus:outline-none focus:bg-white focus:border-[var(--midnight-blue)] focus:ring-4 focus:ring-[var(--midnight-blue)]/10">
                            <option value="">Select state</option>
                            {US_STATES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[13px] text-[var(--midnight-blue)]/80 mb-2" style={{ fontWeight: 600 }}>Subject *</label>
                        <div className="relative">
                          <select name="subject" required value={formData.subject} onChange={handleChange} className="w-full h-12 pl-4 pr-10 appearance-none cursor-pointer rounded-lg border border-slate-200 bg-slate-50/70 text-[var(--midnight-blue)] transition-all hover:border-slate-300 focus:outline-none focus:bg-white focus:border-[var(--midnight-blue)] focus:ring-4 focus:ring-[var(--midnight-blue)]/10">
                            <option value="">Select a topic</option>
                            <option value="demo">Request a Demo</option>
                            <option value="pricing">Pricing &amp; Packages</option>
                            <option value="support">Technical Support</option>
                            <option value="integration">SIS Integration</option>
                            <option value="other">General Inquiry</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] text-[var(--midnight-blue)]/80 mb-2" style={{ fontWeight: 600 }}>Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your scheduling challenges or questions..."
                        className="w-full py-3 resize-none px-4 rounded-lg border border-slate-200 bg-slate-50/70 text-[var(--midnight-blue)] placeholder:text-slate-400 transition-all hover:border-slate-300 focus:outline-none focus:bg-white focus:border-[var(--midnight-blue)] focus:ring-4 focus:ring-[var(--midnight-blue)]/10"
                      />
                    </div>

                    {error && (
                      <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-xs text-[var(--midnight-blue)]/40 sm:max-w-xs">
                        By submitting, you agree to be contacted by Schedule Beacon about our products and services.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="shrink-0 inline-flex items-center justify-center gap-2 bg-[var(--midnight-blue)] text-white h-12 px-8 rounded-lg hover:bg-[#003366] hover:shadow-lg hover:shadow-[var(--midnight-blue)]/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ fontWeight: 700 }}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}