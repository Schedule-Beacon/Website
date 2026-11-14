import { motion } from "motion/react";
import { Eyebrow, LightHero } from "./Brand";
import { useState } from "react";

const resourceCategories = [
  { label: "All", value: "all" },
  { label: "Guides", value: "guide" },
  { label: "Videos", value: "video" },
  { label: "Case Studies", value: "case-study" },
  { label: "Webinars", value: "webinar" },
  { label: "Security", value: "security" },
];

export function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <LightHero
        eyebrow="Learning Center"
        title={
          <>
            Resources &amp; <span className="text-[#B8860B]">Support</span>
          </>
        }
      >
        <p className="text-xl text-[var(--midnight-blue)]/65" style={{ lineHeight: 1.7 }}>
          Guides, videos, case studies, and live webinars to help you get the most out of Schedule Beacon.
        </p>
      </LightHero>

      {/* ── Resource Library ────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-12 border-b border-[var(--midnight-blue)]/10">
            {resourceCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`pb-3 -mb-px border-b-[3px] text-sm transition-all ${
                  activeCategory === cat.value
                    ? "border-[var(--university-gold)] text-[var(--midnight-blue)]"
                    : "border-transparent text-[var(--midnight-blue)]/50 hover:text-[var(--midnight-blue)]"
                }`}
                style={{ fontWeight: activeCategory === cat.value ? 800 : 600 }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Coming soon state */}
          <motion.div
            className="relative overflow-hidden bg-[var(--midnight-blue)] px-10 py-16 md:py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute -right-6 -bottom-10 text-[11rem] leading-none text-white/[0.04] select-none pointer-events-none"
              style={{ fontWeight: 900 }}
              aria-hidden="true"
            >
              SOON
            </div>
            <Eyebrow align="left">In Progress</Eyebrow>
            <h3 className="relative text-white text-3xl mb-3" style={{ fontWeight: 800 }}>
              Resources coming soon
            </h3>
            <p className="relative text-white/60 max-w-lg" style={{ lineHeight: 1.7 }}>
              We are actively developing guides, video tutorials, case studies, and documentation. Check back here as we build out our resource library.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Upcoming Webinars ───────────────────────────────── */}
      <section className="py-24 bg-[#FFF8E5]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow tone="navy">Live Events</Eyebrow>
            <h2 className="text-4xl text-[var(--midnight-blue)] mb-4">Upcoming Webinars</h2>
            <p className="text-[var(--midnight-blue)]/55 max-w-2xl mx-auto">
              Join live sessions to deepen your scheduling expertise and discover new platform features.
            </p>
          </motion.div>

          {/* Coming soon state */}
          <motion.div
            className="max-w-2xl mx-auto bg-white border-t-4 border-[var(--university-gold)] shadow-sm px-10 py-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[var(--midnight-blue)] text-2xl mb-3" style={{ fontWeight: 800 }}>
              Webinars coming soon
            </h3>
            <p className="text-[var(--midnight-blue)]/60 max-w-md mx-auto" style={{ lineHeight: 1.7 }}>
              We are planning live sessions covering scheduling best practices, platform walkthroughs, and more. Dates will be announced here.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}