import { motion } from "motion/react";
import { ArrowRight, School, Camera } from "lucide-react";
import { Link } from "react-router";
import robertPhoto from "figma:asset/687e62d638bda0455a39e822668ff18ba3807236.png";
import christopherPhoto from "figma:asset/3989bab4005258e45f6295f771dfe502dd481560.png";
import logoIcon from "figma:asset/5671362e46764389b665ff1fad478cea5f46eaa8.png";
import foundersPanel from "../../assets/founders-panel.png";
import foundersIncubator from "../../assets/founders-incubator.png";


const founders = [
  {
    name: "Robert Hicks",
    role: "Co-Founder & CEO",
    photo: robertPhoto,
    bio: "Robert Hicks is a Co-Founder of Schedule Beacon, leading product design, business development, and public sector strategy. Robert earned his Business Administration degree from Alfred University, graduating summa cum laude while competing for four years as a member of the Men's Basketball team. Experience at Google Public Sector and in financial services, paired with the demands of collegiate athletics, shaped the focused, all-in approach he brings to modernizing K-12 operations.",
  },
  {
    name: "Christopher Coyle",
    role: "Co-Founder & COO",
    photo: christopherPhoto,
    bio: "Christopher Coyle is a Co-Founder of Schedule Beacon, leading business development strategy, procurement, relationship management, and operations. Christopher earned his Finance degree from Alfred University on an accelerated three-year track while competing as a member of the Men's Basketball team. Balancing rigorous coursework with the demands of collegiate athletics shaped the disciplined, results-driven approach he brings to building and scaling the company.",
  },
];

const values = [
  { label: "We put people first", principle: "Technology is a tool; people are the purpose." },
  { label: "We act with integrity", principle: "Transparency, honesty, and ethical responsibility are non-negotiable." },
  { label: "We are driving change", principle: "We bridge the gap between the private and public sectors." },
  { label: "We are all in", principle: "Owner-level passion for our mission and our clients' goals." },
];

function FounderCard({ founder, index }: { founder: typeof founders[0]; index: number }) {
  return (
    <motion.div
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative bg-[var(--soft-grey)] aspect-[4/3] flex flex-col items-center justify-center gap-3 border-b border-gray-100 overflow-hidden">
        {founder.photo ? (
          <img
            src={founder.photo}
            alt={founder.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-[var(--midnight-blue)]/10 border-2 border-dashed border-[var(--midnight-blue)]/20 flex items-center justify-center">
              <Camera className="w-7 h-7 text-[var(--midnight-blue)]/30" />
            </div>
            <p className="text-[var(--midnight-blue)]/35 text-sm" style={{ fontWeight: 500 }}>
              Add your photo here
            </p>
          </>
        )}
      </div>

      <div className="p-7">
        <div className="mb-4">
          <h3 className="text-[var(--midnight-blue)]" style={{ fontSize: "1.15rem" }}>
            {founder.name}
          </h3>
          <span
            className="inline-block mt-1 text-xs bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-3 py-1 rounded-full"
            style={{ fontWeight: 600 }}
          >
            {founder.role}
          </span>
        </div>

        <p className="text-[var(--midnight-blue)]/60 text-sm" style={{ lineHeight: 1.8 }}>
          {founder.bio}
        </p>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
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
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[420px] pointer-events-none select-none"
          style={{ mixBlendMode: "multiply", opacity: 0.06 }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block text-sm bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-6"
              style={{ fontWeight: 600 }}
            >
              Our Story
            </span>
            <h1
              className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Built by students,{" "}
              <span className="text-[var(--university-gold)]">for students</span>
            </h1>
            <p className="text-xl text-[var(--midnight-blue)]/55 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              We're a student-founded team on a mission to close the gap between the private and public sectors,
              starting with a tool that shapes every student's academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-start">
                  <img
                    src={foundersIncubator}
                    alt="Schedule Beacon founders at Incubator Works"
                    className="rounded-2xl object-cover object-center shadow-lg"
                    style={{ width: "78%", aspectRatio: "4/3" }}
                  />
                </div>
                <div className="flex justify-end">
                  <img
                    src={foundersPanel}
                    alt="Schedule Beacon founders at panel"
                    className="rounded-2xl object-cover object-center shadow-lg"
                    style={{ width: "78%", aspectRatio: "4/3" }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100" style={{ zIndex: 3 }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--university-gold)] rounded-xl flex items-center justify-center">
                    <School className="w-6 h-6 text-[var(--midnight-blue)]" />
                  </div>
                  <div>
                    <div className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 700 }}>
                      Student-Built
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-[var(--soft-grey)] px-4 py-1.5 rounded-full mb-6"
                style={{ fontWeight: 600 }}
              >
                OUR MISSION
              </span>
              <h2 className="text-4xl text-[var(--midnight-blue)] mb-6">
                Equipping schools with the insights to put student success first
              </h2>
              <div className="space-y-4 text-[var(--midnight-blue)]/60" style={{ lineHeight: 1.8 }}>
                <p>
                  Our mission is to help schools operate with the insights necessary to put student success
                  at the center of every decision. Too often, the tools available to public education lag far
                  behind what's standard in the private sector, and students pay the price.
                </p>
                <p>
                  We built Schedule Beacon because we saw firsthand how a broken scheduling process can limit
                  a student's entire academic trajectory. We believe smarter software, built with genuine care
                  for equity and outcomes, can change that.
                </p>
              </div>
              <Link
                to="/demo"
                className="mt-8 inline-flex items-center gap-2 bg-[var(--midnight-blue)] text-white px-6 py-3 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all"
                style={{ fontWeight: 600 }}
              >
                See It In Action
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Founders ────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--soft-grey)]/40">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-white px-4 py-1.5 rounded-full mb-4"
              style={{ fontWeight: 600 }}
            >
              THE TEAM
            </span>
            <h2 className="text-4xl text-[var(--midnight-blue)]">Meet the founders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, i) => (
              <FounderCard key={i} founder={founder} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="py-14 bg-[var(--midnight-blue)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <span
              className="inline-block text-xs text-[var(--university-gold)] tracking-widest"
              style={{ fontWeight: 700 }}
            >
              OUR VALUES
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border-l-2 border-[var(--university-gold)] pl-4"
              >
                <div className="text-white text-base mb-1" style={{ fontWeight: 700 }}>
                  {v.label}
                </div>
                <p className="text-white/55 text-sm" style={{ lineHeight: 1.6 }}>
                  {v.principle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--soft-grey)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-[var(--midnight-blue)] mb-6">
              Ready to see the difference?
            </h2>
            <p className="text-[var(--midnight-blue)]/60 mb-8">
              See how Schedule Beacon helps districts put student success at the center of every scheduling decision.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-8 py-4 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg"
              style={{ fontWeight: 700 }}
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

