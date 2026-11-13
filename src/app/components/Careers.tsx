import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Link } from "react-router";
import logoIcon from "../../assets/logo-watermark-hires.png";

export function Careers() {
  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--midnight-blue) 1px, transparent 1px), linear-gradient(90deg, var(--midnight-blue) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <img
          src={logoIcon}
          alt=""
          aria-hidden="true"
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[360px] pointer-events-none select-none"
          style={{ mixBlendMode: "multiply", opacity: 0.06 }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span
              className="inline-block text-sm bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-6"
              style={{ fontWeight: 600 }}
            >
              Careers
            </span>
            <h1 className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6" style={{ lineHeight: 1.1 }}>
              Help us build the{" "}
              <span className="text-[var(--university-gold)]">future of scheduling</span>
            </h1>
            <p className="text-xl text-[var(--midnight-blue)]/55">
              We're a small team on a mission to put student success at the center of every schedule. If that
              excites you, we want to hear from you — whether or not there's an open role that fits today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Open Positions ──────────────────────────────────── */}
      <section className="py-24 bg-[var(--soft-grey)]/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl text-[var(--midnight-blue)] mb-4">Open Positions</h2>
            <p className="text-[var(--midnight-blue)]/55 text-lg max-w-2xl mx-auto">
              There are no open positions at this time.
            </p>
          </motion.div>

          <div className="bg-white border border-gray-100 border-l-4 border-l-[var(--university-gold)] rounded-2xl p-8 md:p-10 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-[var(--university-gold)]/15 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[var(--midnight-blue)]" />
            </div>
            <p
              className="text-lg md:text-xl text-[var(--midnight-blue)] max-w-2xl mx-auto"
              style={{ lineHeight: 1.7, fontWeight: 500 }}
            >
              We are always looking for self-starters who are looking to make a difference in education. If
              interested, please feel free to introduce yourself and share your resume by emailing us at{" "}
              <a
                href="mailto:info@schedulebeacon.com"
                className="text-[var(--midnight-blue)] underline decoration-[var(--university-gold)] decoration-2 underline-offset-4 hover:text-[var(--university-gold)] transition-colors"
                style={{ fontWeight: 700 }}
              >
                info@schedulebeacon.com
              </a>
              .
            </p>
          </div>

          {/* Don't see a fit nudge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center bg-white border border-gray-100 rounded-2xl p-8"
          >
            <h3 className="text-[var(--midnight-blue)] mb-2" style={{ fontWeight: 700, fontSize: "1.15rem" }}>
              Prefer to apply online?
            </h3>
            <p className="text-[var(--midnight-blue)]/55 text-sm mb-5 max-w-xl mx-auto">
              Tell us about yourself through our general interest form and we'll keep you in mind for future
              opportunities.
            </p>
            <Link
              to="/careers/apply/general-interest"
              className="inline-block bg-[var(--midnight-blue)] text-white px-6 py-3 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-md text-sm"
              style={{ fontWeight: 700 }}
            >
              Submit General Interest
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
