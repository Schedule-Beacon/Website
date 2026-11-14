import { motion } from "motion/react";
import { ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Eyebrow, NavyHero } from "./Brand";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, isEmailJSConfigured } from "../lib/emailjs";
import { US_STATES } from "../lib/usStates";

const demoPerks = [
  {
    title: "60-Minute Session",
    description: "A focused walkthrough of Schedule Beacon's key features.",
  },
  {
    title: "Built for Your District's Needs",
    description: "We take your district's unique circumstances and scheduling challenges into account throughout every conversation.",
  },
  {
    title: "Direct Founder Access",
    description: "Speak directly with the team behind Schedule Beacon.",
  },
];

export function RequestDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    state: "",
    role: "",
    studentCount: "",
    timeline: "",
    hasSchedulingProvider: false,
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
        EMAILJS_CONFIG.DEMO_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          district: formData.district,
          state: formData.state,
          role: formData.role,
          student_count: formData.studentCount,
          timeline: formData.timeline || "Not specified",
          has_scheduling_provider: formData.hasSchedulingProvider ? "Yes" : "No",
          message: formData.message || "Not provided",
          to_email: "info@schedulebeacon.com",
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong submitting your request. Please try emailing us directly at info@schedulebeacon.com.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  };

  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <NavyHero
        eyebrow="Free · No Commitment"
        bottomPadding="pb-20"
        title={
          <>
            See Schedule Beacon
            <br />
            <span className="text-[var(--university-gold)]">in action</span>
          </>
        }
      >
        <p className="text-xl text-white/70" style={{ lineHeight: 1.7 }}>
          Schedule a personalized 60-minute demo with a scheduling expert — tailored to your district's needs.
        </p>
      </NavyHero>

      {/* ── Digital Twin Callout ────────────────────────────── */}
      <section className="bg-[var(--university-gold)]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-10 items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-[var(--midnight-blue)] text-xl md:border-r-2 md:border-[var(--midnight-blue)]/20 md:pr-10" style={{ fontWeight: 800, lineHeight: 1.25 }}>
              Your demo is a<br className="hidden md:block" /> digital twin of your district.
            </div>
            <p className="text-[var(--midnight-blue)]/80" style={{ lineHeight: 1.65 }}>
              We build the walkthrough around data that resembles your schools, so you see a realistic picture of how Schedule Beacon will actually work for you — not a generic demo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What to Expect ──────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoPerks.map((perk, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-[var(--university-gold)] text-3xl leading-none shrink-0" style={{ fontWeight: 900, WebkitTextStroke: "1px #B8860B" }}>
                  0{i + 1}
                </span>
                <div>
                  <div className="text-[var(--midnight-blue)] text-sm mb-1" style={{ fontWeight: 700 }}>
                    {perk.title}
                  </div>
                  <div className="text-[var(--midnight-blue)]/55 text-sm">{perk.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ────────────────────────────────────── */}
      <section
        className="py-16 bg-[var(--soft-grey)]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,33,71,0.07) 1.2px, transparent 1.2px)", backgroundSize: "22px 22px" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="bg-white p-12 border-t-4 border-[var(--university-gold)] shadow-sm text-center">
                <Eyebrow tone="navy">Request Received</Eyebrow>
                <h3 className="text-2xl text-[var(--midnight-blue)] mb-3">You're on the list!</h3>
                <p className="text-[var(--midnight-blue)]/55 mb-6">
                  A scheduling expert will reach out within one business day to confirm your demo time.
                </p>
                <div className="bg-[var(--soft-grey)] rounded-xl p-4 text-sm text-[var(--midnight-blue)]/60">
                  While you wait, explore our{" "}
                  <a href="/resources" className="text-[var(--midnight-blue)] underline underline-offset-2">
                    resources library
                  </a>{" "}
                  to see case studies and guides.
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 md:p-10 border-t-4 border-[var(--university-gold)] shadow-lg shadow-[var(--midnight-blue)]/5">
                <h2 className="text-2xl text-[var(--midnight-blue)] mb-1">
                  Tell us about your district
                </h2>
                <p className="text-[var(--midnight-blue)]/50 text-sm mb-8">
                  Share a few details and we will ensure our conversation addresses the needs and priorities of your district.
                </p>

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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all placeholder:text-gray-300 text-[var(--midnight-blue)]"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all placeholder:text-gray-300 text-[var(--midnight-blue)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        School District *
                      </label>
                      <input
                        type="text"
                        name="district"
                        required
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="Lincoln Unified School District"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all placeholder:text-gray-300 text-[var(--midnight-blue)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        State *
                      </label>
                      <select
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all text-[var(--midnight-blue)]"
                      >
                        <option value="">Select state</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all placeholder:text-gray-300 text-[var(--midnight-blue)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        Your Role *
                      </label>
                      <select
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all text-[var(--midnight-blue)]"
                      >
                        <option value="">Select your role</option>
                        <option value="superintendent">Superintendent</option>
                        <option value="administrator">Administrator / Principal</option>
                        <option value="counselor">Counselor</option>
                        <option value="it">IT Staff</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        Number of Students *
                      </label>
                      <select
                        name="studentCount"
                        required
                        value={formData.studentCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all text-[var(--midnight-blue)]"
                      >
                        <option value="">Select range</option>
                        <option value="0-500">Under 500</option>
                        <option value="501-1000">501–1,000</option>
                        <option value="1001-5000">1,001–5,000</option>
                        <option value="5001+">5,001+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                        Implementation Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all text-[var(--midnight-blue)]"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediately (within 30 days)</option>
                        <option value="1-3months">1–3 months</option>
                        <option value="3-6months">3–6 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  <label className="flex items-center gap-3 px-4 py-3.5 border border-gray-200 rounded-xl cursor-pointer hover:border-[var(--university-gold)]/50 transition-colors">
                    <input
                      type="checkbox"
                      name="hasSchedulingProvider"
                      checked={formData.hasSchedulingProvider}
                      onChange={handleChange}
                      className="w-4 h-4 rounded accent-[var(--university-gold)] shrink-0"
                    />
                    <span className="text-sm text-[var(--midnight-blue)]" style={{ fontWeight: 500 }}>
                      Do you have a dedicated scheduling provider?
                    </span>
                  </label>

                  <div>
                    <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                      Your biggest scheduling challenge (optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Too many conflicts, student course requests not getting met, scheduling takes too long..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all resize-none placeholder:text-gray-300 text-[var(--midnight-blue)]"
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
                    className="w-full bg-[var(--university-gold)] text-[var(--midnight-blue)] py-4 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontWeight: 700 }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Request My Demo
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-[var(--midnight-blue)]/40">
                    No commitment required · We'll reach out within 1 business day
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}