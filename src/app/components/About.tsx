import { motion } from "motion/react";
import { ArrowRight, School, Camera, HeartHandshake, ShieldCheck, Zap, Flame } from "lucide-react";
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
    bio: "Robert Hicks co-founded Schedule Beacon after seeing firsthand how much a single schedule can shape what a student gets to learn. As CEO, he leads product design, business development, and public sector strategy. Robert graduated summa cum laude from Alfred University with a degree in Business Administration while playing four seasons of Men's Basketball, and later sharpened his view of how technology reaches government at Google Public Sector. He brings a competitor's work ethic and a builder's curiosity to every district partnership.",
  },
  {
    name: "Christopher Coyle",
    role: "Co-Founder & COO",
    photo: christopherPhoto,
    bio: "Christopher Coyle is a Co-Founder of Schedule Beacon, leading business development strategy, procurement, relationship management, and operations. Christopher earned his Finance degree from Alfred University on an accelerated three-year track while competing as a member of the Men's Basketball team. Balancing rigorous coursework with the demands of collegiate athletics shaped the disciplined, results-driven approach he brings to building and scaling the company.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    label: "We put people first",
    principle: "Technology is a tool; people are the purpose. Our team, partners, and communities come first.",
  },
  {
    icon: ShieldCheck,
    label: "We act with integrity",
    principle: "Transparency, honesty, and ethical responsibility are non-negotiable, even when no one is watching.",
  },
  {
    icon: Zap,
    label: "We are driving change",
    principle: "We bridge the gap between the private and public sectors and advocate for the better way.",
  },
  {
    icon: Flame,
    label: "We are all in",
    principle: "Owner-level passion for our mission, our company, and the goals of every client we serve.",
  },
];

function FounderCard({ founder, index }: { founder: typeof founders[0]; index: number }) {
  return (
    <motion.div
      className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/20 flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative bg-[var(--soft-grey)] aspect-[4/3] overflow-hidden">
        {founder.photo ? (
          <img
            src={founder.photo}
            alt={founder.name}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Camera className="w-7 h-7 text-[var(--midnight-blue)]/30" />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[var(--university-gold)]" />
      </div>

      <div className="p-8 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h3 className="text-[var(--midnight-blue)]" style={{ fontSize: "1.5rem", fontWeight: 800 }}>
            {founder.name}
          </h3>
          <span
            className="inline-block text-xs bg-[var(--midnight-blue)] text-[var(--university-gold)] px-3 py-1.5 rounded-full"
            style={{ fontWeight: 700, letterSpacing: "0.03em" }}
          >
            {founder.role}
          </span>
        </div>
        <p className="text-[var(--midnight-blue)]/70 text-[0.95rem]" style={{ lineHeight: 1.8 }}>
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
      <section className="relative pt-24 pb-28 overflow-hidden bg-[var(--midnight-blue)]">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[var(--university-gold)] opacity-[0.12] blur-3xl" />
        <img
          src={logoIcon}
          alt=""
          aria-hidden="true"
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[420px] pointer-events-none select-none"
          style={{ opacity: 0.07, filter: "brightness(0) invert(1)" }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span
              className="inline-block text-sm bg-[var(--university-gold)] text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-6"
              style={{ fontWeight: 700 }}
            >
              Our Story
            </span>
            <h1 className="text-5xl lg:text-6xl text-white mb-6" style={{ lineHeight: 1.1 }}>
              Built by students,{" "}
              <span className="text-[var(--university-gold)]">for students</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
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
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[var(--midnight-blue)] to-[#00305f]">
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--university-gold)] opacity-[0.08] blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-blue-400 opacity-[0.10] blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm text-[var(--university-gold)] bg-[var(--university-gold)]/10 border border-[var(--university-gold)]/30 px-4 py-1.5 rounded-full mb-5"
              style={{ fontWeight: 700, letterSpacing: "0.04em" }}
            >
              THE TEAM
            </span>
            <h2 className="text-4xl lg:text-5xl text-white mb-5">Meet the founders</h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              Two Alfred University teammates who traded the basketball court for the classroom's toughest
              logistics problem, building the scheduling platform we wish our own schools had.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, i) => (
              <FounderCard key={i} founder={founder} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#FFF8E5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-xs text-[var(--midnight-blue)]/60 tracking-widest mb-3"
              style={{ fontWeight: 700 }}
            >
              OUR VALUES
            </span>
            <h2 className="text-3xl text-[var(--midnight-blue)]">What we stand for</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl p-6 border border-[var(--university-gold)]/25 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span
                  className="absolute -top-3 right-3 text-7xl text-[var(--university-gold)]/20 select-none pointer-events-none"
                  style={{ fontWeight: 800 }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div className="relative w-11 h-11 rounded-xl bg-[var(--midnight-blue)] flex items-center justify-center mb-4 group-hover:bg-[var(--university-gold)] transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-[var(--university-gold)] group-hover:text-[var(--midnight-blue)] transition-colors duration-300" />
                </div>
                <div className="relative text-[var(--midnight-blue)] text-lg mb-2" style={{ fontWeight: 700 }}>
                  {v.label}
                </div>
                <p className="relative text-[var(--midnight-blue)]/60 text-sm" style={{ lineHeight: 1.65 }}>
                  {v.principle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
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

