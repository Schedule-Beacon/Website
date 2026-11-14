import { motion } from "motion/react";
import { Send, Loader2, AlertCircle } from "lucide-react";
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

      {/* ── Contact Channels ────────────────────────────────── */}
      <section className="bg-[var(--midnight-blue)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
          {contactChannels.map((channel, i) => (
            <motion.a
              key={i}
              href={channel.href}
              className={`group block py-12 md:px-12 ${i === 0 ? "md:pl-0 border-b md:border-b-0 md:border-r border-white/10" : "md:pr-0"}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-[var(--university-gold)] text-xs uppercase mb-3" style={{ fontWeight: 700, letterSpacing: "0.25em" }}>
                {channel.title}
              </div>
              <div
                className="text-white text-2xl md:text-3xl group-hover:text-[var(--university-gold)] transition-colors"
                style={{ fontWeight: 800 }}
              >
                {channel.detail}
              </div>
              <div className="text-white/50 text-sm mt-2">{channel.sub}</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── Contact Form ────────────────────────────────────── */}
      <section
        className="py-24 bg-[var(--soft-grey)]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,33,71,0.07) 1.2px, transparent 1.2px)", backgroundSize: "22px 22px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <Eyebrow align="left" tone="navy">Send a Message</Eyebrow>
                <h2 className="text-3xl text-[var(--midnight-blue)] mb-4">Get in touch</h2>
                <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.8 }}>
                  Fill out the form and a member of our team will be in touch within one business day. For urgent
                  issues, please call us directly.
                </p>
              </div>

              <dl className="border-t-2 border-[var(--midnight-blue)] divide-y divide-[var(--midnight-blue)]/10">
                <div className="py-4 grid grid-cols-[130px_1fr] gap-4">
                  <dt className="text-[var(--midnight-blue)]/45 text-xs uppercase pt-0.5" style={{ fontWeight: 700, letterSpacing: "0.18em" }}>
                    Office
                  </dt>
                  <dd className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 600 }}>TBD</dd>
                </div>
                <div className="py-4 grid grid-cols-[130px_1fr] gap-4">
                  <dt className="text-[var(--midnight-blue)]/45 text-xs uppercase pt-0.5" style={{ fontWeight: 700, letterSpacing: "0.18em" }}>
                    Hours
                  </dt>
                  <dd className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 600 }}>
                    Monday – Friday<br />8:00 AM – 6:00 PM EST
                  </dd>
                </div>
              </dl>

              {/* FAQ nudge */}
              <div className="bg-[#FFF8E5] border-l-4 border-[var(--university-gold)] p-6">
                <div className="text-[var(--midnight-blue)] text-sm mb-2" style={{ fontWeight: 600 }}>
                  Looking for quick answers?
                </div>
                <p className="text-[var(--midnight-blue)]/55 text-xs mb-4">
                  Check our resources library for guides, FAQs, and video tutorials.
                </p>
                <a
                  href="/resources"
                  className="text-xs text-[var(--midnight-blue)] underline underline-offset-2"
                  style={{ fontWeight: 600 }}
                >
                  Browse resources →
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3 bg-white p-8 md:p-10 border-t-4 border-[var(--university-gold)] shadow-lg shadow-[var(--midnight-blue)]/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16">
                    <Eyebrow tone="navy">Received</Eyebrow>
                    <h3 className="text-2xl text-[var(--midnight-blue)] mb-3">Message sent!</h3>
                    <p className="text-[var(--midnight-blue)]/55">
                      Thanks for reaching out. We'll get back to you within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@district.edu"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        School District
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="Lincoln Unified School District"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                      State
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)]"
                    >
                      <option value="">Select state</option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)]"
                    >
                      <option value="">Select a topic</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing &amp; Packages</option>
                      <option value="support">Technical Support</option>
                      <option value="integration">SIS Integration</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your scheduling challenges or questions..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  {/* Error banner */}
                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[var(--midnight-blue)] text-white py-4 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-[var(--midnight-blue)]/40">
                    By submitting, you agree to be contacted by Schedule Beacon about our products and services.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}