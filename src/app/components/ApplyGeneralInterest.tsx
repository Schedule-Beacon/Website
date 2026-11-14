import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { JobApplicationForm } from "./JobApplicationForm";
import { LightHero } from "./Brand";

export function ApplyGeneralInterest() {
  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <LightHero eyebrow="General Interest" title="Get on our radar">
        <p className="text-lg text-[var(--midnight-blue)]/65 mb-6" style={{ lineHeight: 1.7 }}>
          No open role fits perfectly yet? That's okay. We're a small, growing team, and we'd rather meet great
          people early than miss them later. Tell us about yourself below and we'll reach out when something
          opens up that matches what you're looking for.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--midnight-blue)] hover:text-[#B8860B] transition-colors"
          style={{ fontWeight: 700 }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to careers
        </Link>
      </LightHero>

      {/* ── Application Form ────────────────────────────────── */}
      <section
        className="py-20 bg-[var(--soft-grey)]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,33,71,0.07) 1.2px, transparent 1.2px)", backgroundSize: "22px 22px" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            className="bg-white p-8 md:p-10 border-t-4 border-[var(--university-gold)] shadow-lg shadow-[var(--midnight-blue)]/5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <JobApplicationForm
              position="General Interest"
              confirmationNote="Thanks for reaching out. We'll keep your information on file and get in touch when a fitting opportunity comes up."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
