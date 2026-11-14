import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Eyebrow, NavyHero } from "./Brand";

const securityPillars = [
  {
    title: "FERPA",
    description:
      "Schedule Beacon is built around FERPA requirements from the ground up, ensuring student education records are handled with the protections federal law requires.",
  },
  {
    title: "Modern, Secure Infrastructure",
    description:
      "The platform runs on reputable cloud infrastructure providers, with environments configured around the principle of least privilege and continuous monitoring.",
  },
  {
    title: "Encryption in Transit and at Rest",
    description:
      "Student and district data is encrypted both in transit and at rest, ensuring information stays protected whether it is moving through our systems or stored within them.",
  },
  {
    title: "Access Controls",
    description:
      "Role-based access controls and authentication safeguards ensure only authorized district staff can view or modify scheduling data.",
  },
  {
    title: "NY Education Law §2-d",
    description:
      "Schedule Beacon's data practices align with New York Education Law §2-d, supporting districts in meeting their obligations under state student privacy law.",
  },
  {
    title: "WISP (MA 201 CMR 17.00)",
    description:
      "Schedule Beacon maintains a Written Information Security Program in accordance with Massachusetts 201 CMR 17.00, establishing documented policies and procedures for protecting personal information of Massachusetts residents.",
  },
];

const implementationPillars = [
  {
    title: "Discovery",
    description:
      "We begin by meeting with your district to understand your scheduling structure, constraints, staffing model, and goals before any configuration begins.",
  },
  {
    title: "Build",
    description:
      "Your dedicated scheduling expert configures the platform around your district's specific needs, course catalog, and requirements.",
  },
  {
    title: "Training",
    description:
      "We conduct in-person training with your scheduling staff to ensure your team is fully prepared to use the platform with confidence.",
  },
  {
    title: "Go-Live",
    description:
      "The platform is live and ready for your district to begin building your master schedule.",
  },
];

const supportPillars = [
  {
    title: "One Business Day Response",
    description:
      "All support requests receive a response within one business day, so your team is never left waiting on a critical issue.",
  },
  {
    title: "Personal Follow-Up",
    description:
      "Whenever your team needs help, a member of the Schedule Beacon team will personally follow up within one business day.",
  },
  {
    title: "Scheduling Season Coverage",
    description:
      "We provide increased support availability during peak scheduling periods, when your team needs it most.",
  },
];

const updatesPillars = [
  {
    title: "Client Feedback",
    description:
      "All clients are encouraged to share feedback on an ongoing basis. We actively solicit input and treat it as a core part of how the platform evolves.",
  },
  {
    title: "Regular Surveys",
    description:
      "We distribute structured surveys to gather district input and use those responses to inform our development priorities.",
  },
  {
    title: "Feature Testing",
    description:
      "New features are tested with districts before broad release, giving clients early access and ensuring changes are validated in real scheduling environments.",
  },
];

const coreFeatures = [
  {
    title: "Automated Scheduling Engine",
    description:
      "An intelligent algorithm that ingests school-specific data to generate high-performance master schedules, maximizing resources and balancing class loads across your district.",
  },
  {
    title: "Constraint Optimization",
    description:
      "A flexible configuration tool that lets each district customize their scheduling logic, accommodating faculty certifications, room capacity limits, and other unique district requirements.",
  },
  {
    title: "FTE Optimization",
    description:
      "Ensure every full-time staff member is utilized to their full capability. Schedule Beacon identifies gaps and inefficiencies before they become costly, saving districts thousands of dollars in staff hours each year.",
  },
  {
    title: "Conflict Viewing and Resolution",
    description:
      "A dedicated conflict management workspace that surfaces scheduling conflicts clearly and provides structured tools for resolution, allowing administrators to address issues with precision and confidence.",
  },
  {
    title: "Simple UI",
    description:
      "Purpose-built screens designed around how scheduling coordinators actually work. Each view surfaces the right information at the right time, reducing training overhead and minimizing the risk of user error.",
  },
];

const benefits = [
  {
    title: "Higher course placement rates",
    body: "More students get the courses they requested, the first time the schedule is built.",
  },
  {
    title: "Schedules aligned across buildings",
    body: "Organize schedules district-wide so shared staff, rooms, and programs line up across every school.",
  },
  {
    title: "Balanced teacher workloads",
    body: "Distribute sections evenly across departments so no team carries more than its share.",
  },
  {
    title: "Equity and compliance, built in",
    body: "Keep equity and compliance requirements in view throughout the scheduling process, not after it.",
  },
  {
    title: "Less manual scheduling work",
    body: "Automation takes on the repetitive tasks that consume weeks of staff time every year.",
  },
  {
    title: "Full-schedule visibility",
    body: "Administrators get a clear view of the entire master schedule in one place.",
  },
];


function BenefitBar({ benefit, index }: { benefit: { title: string; body: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const right = index % 2 === 1;
  return (
    <motion.div
      className={`md:w-[78%] ${right ? "md:ml-auto" : ""}`}
      initial={{ opacity: 0, x: right ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`w-full flex items-stretch text-left bg-white rounded-xl overflow-hidden shadow-lg shadow-black/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ${
          right ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="bg-[var(--university-gold)] w-16 md:w-20 shrink-0 flex items-center justify-center">
          <span className="text-[var(--midnight-blue)] text-2xl" style={{ fontWeight: 900 }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex-1 px-6 py-5">
          <div className={`flex items-center gap-3 ${right ? "md:flex-row-reverse" : ""}`}>
            <h3 className={`flex-1 text-[var(--midnight-blue)] text-lg ${right ? "md:text-right" : ""}`} style={{ fontWeight: 800, lineHeight: 1.3 }}>
              {benefit.title}
            </h3>
            <ChevronDown
              className="w-5 h-5 text-[var(--midnight-blue)]/50 shrink-0 transition-transform duration-300"
              style={{ transform: open ? "rotate(180deg)" : "none" }}
            />
          </div>
          <AnimatePresence initial={false}>
            {open && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden text-[var(--midnight-blue)]/65 text-sm text-center"
                style={{ lineHeight: 1.65 }}
              >
                <span className="block pt-3 max-w-md mx-auto">{benefit.body}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  );
}

export function Products() {
  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <NavyHero
        eyebrow="The Platform"
        title={
          <>
            Master Scheduling, <span className="text-[var(--university-gold)]">Reimagined</span>
          </>
        }
      >
        <p className="text-lg text-white/70 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
          Purpose-built for K-12 school districts. Build master schedules in days, while ensuring every student gets the courses they need.
        </p>
      </NavyHero>

      {/* ── Core Features ───────────────────────────────────── */}
      <section id="features" className="py-28 bg-[var(--soft-grey)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow tone="navy">Core Features</Eyebrow>
            <h2 className="text-4xl text-[var(--midnight-blue)] mb-3">
              Everything districts need
            </h2>
            <p className="text-lg text-[var(--midnight-blue)]/50 max-w-xl mx-auto">
              From single high schools to large multi-site districts, Schedule Beacon adapts to your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.slice(0, 3).map((feature, i) => (
              <motion.div
                key={i}
                className="p-7 border-t-2 border-[var(--midnight-blue)] hover:border-[var(--university-gold)] hover:shadow-lg transition-all bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-[var(--university-gold)] text-3xl leading-none mb-5" style={{ fontWeight: 900, WebkitTextStroke: "1px #B8860B" }}>
                  {String(coreFeatures.indexOf(feature) + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[var(--midnight-blue)] mb-2.5" style={{ fontSize: "1rem", fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 mx-auto mt-6">
            {coreFeatures.slice(3).map((feature, i) => (
              <motion.div
                key={i}
                className="p-7 border-t-2 border-[var(--midnight-blue)] hover:border-[var(--university-gold)] hover:shadow-lg transition-all bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.08 }}
              >
                <div className="text-[var(--university-gold)] text-3xl leading-none mb-5" style={{ fontWeight: 900, WebkitTextStroke: "1px #B8860B" }}>
                  {String(coreFeatures.indexOf(feature) + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[var(--midnight-blue)] mb-2.5" style={{ fontSize: "1rem", fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section id="difference" className="py-24 bg-[var(--midnight-blue)] relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[var(--university-gold)] opacity-[0.07] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>The Difference</Eyebrow>
            <h2 className="text-4xl lg:text-5xl text-white mb-5" style={{ lineHeight: 1.1, fontWeight: 800 }}>
              Real results for <span className="text-[var(--university-gold)]">real districts</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              Better schedules show up everywhere: in the classes students get, the time staff win back, and how
              clearly leaders can see what's happening across the district.
            </p>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <BenefitBar key={b.title} benefit={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise Platform ─────────────────────────────── */}
      <section id="platform" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow tone="navy">Enterprise Platform</Eyebrow>
            <h2 className="text-4xl text-[var(--midnight-blue)]">Built for how districts actually work</h2>
          </motion.div>

          {/* Security & Compliance */}
          <motion.div
            className="bg-white rounded-2xl overflow-hidden border-2 border-[var(--university-gold)] shadow-xl shadow-[var(--midnight-blue)]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--midnight-blue)] px-10 py-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4 lg:gap-12 items-end">
              <div>
                <div className="text-[var(--university-gold)] text-[11px] uppercase mb-3" style={{ fontWeight: 700, letterSpacing: "0.22em" }}>
                  01 · Security &amp; Compliance
                </div>
                <h3 className="text-white text-2xl" style={{ fontWeight: 800 }}>Protecting every student record</h3>
              </div>
              <p className="text-white/65 text-sm" style={{ lineHeight: 1.75 }}>
                In a FERPA-regulated environment, security is a foundation. Here is how we approach it.
              </p>
            </div>
            <div className="p-10 pb-0 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
              {securityPillars.map((p) => (
                <div key={p.title} className="border-t-2 border-[var(--university-gold)] pt-4">
                  <div className="text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 800 }}>{p.title}</div>
                  <p className="text-[var(--midnight-blue)]/60 text-[13px]" style={{ lineHeight: 1.65 }}>{p.description}</p>
                </div>
              ))}
            </div>
            <p className="mx-10 mb-10 mt-10 pt-6 border-t border-[var(--midnight-blue)]/10 text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.75 }}>
              Security and compliance are an ongoing responsibility that evolves alongside our platform and the
              regulatory landscape. We're glad to walk any district's IT or compliance team through our
              infrastructure, data handling, and privacy practices in detail.
            </p>
          </motion.div>

          {/* Implementation — timeline */}
          <motion.div
            className="mt-8 bg-white rounded-2xl overflow-hidden border-2 border-[var(--university-gold)] shadow-xl shadow-[var(--midnight-blue)]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--midnight-blue)] px-10 py-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4 lg:gap-12 items-end">
              <div>
                <div className="text-[var(--university-gold)] text-[11px] uppercase mb-3" style={{ fontWeight: 700, letterSpacing: "0.22em" }}>
                  02 · Dedicated Implementation Team
                </div>
                <h3 className="text-white text-2xl" style={{ fontWeight: 800 }}>From discovery to go-live</h3>
              </div>
              <p className="text-white/65 text-sm" style={{ lineHeight: 1.75 }}>
                Every district gets a dedicated scheduling expert who guides you through each phase, from initial
                discovery to go-live.
              </p>
            </div>
            <ol className="relative p-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="hidden md:block absolute top-[47px] left-10 right-10 h-0.5 bg-[var(--university-gold)]/40" />
              {implementationPillars.map((p, i) => (
                <li key={p.title} className="relative">
                  <div className="relative w-4 h-4 bg-[var(--university-gold)] rotate-45 mb-6 ring-4 ring-white" />
                  <div className="text-[var(--midnight-blue)]/40 text-xs mb-1" style={{ fontWeight: 800, letterSpacing: "0.1em" }}>
                    STEP {i + 1}
                  </div>
                  <div className="text-[var(--midnight-blue)] text-lg mb-2" style={{ fontWeight: 800 }}>{p.title}</div>
                  <p className="text-[var(--midnight-blue)]/60 text-[13px]" style={{ lineHeight: 1.65 }}>{p.description}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Support + Updates */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                n: "03",
                label: "Ongoing Support",
                title: "A team that follows up",
                intro: "After go-live, your district has direct access to the Schedule Beacon team whenever you need it.",
                items: supportPillars,
              },
              {
                n: "04",
                label: "Regular Platform Updates",
                title: "Shaped by districts",
                intro: "Schedule Beacon improves continuously, driven by direct input from the districts we work with.",
                items: updatesPillars,
              },
            ].map((block, bi) => (
              <motion.div
                key={block.label}
                className="bg-white rounded-2xl overflow-hidden border-2 border-[var(--university-gold)] shadow-xl shadow-[var(--midnight-blue)]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: bi * 0.1 }}
              >
                <div className="bg-[var(--midnight-blue)] px-10 py-8">
                <div className="text-[var(--university-gold)] text-[11px] uppercase mb-3" style={{ fontWeight: 700, letterSpacing: "0.22em" }}>
                  {block.n} · {block.label}
                </div>
                <h3 className="text-white text-2xl mb-3" style={{ fontWeight: 800 }}>{block.title}</h3>
                <p className="text-white/65 text-sm" style={{ lineHeight: 1.75 }}>{block.intro}</p>
                </div>
                <dl className="px-10 py-4 divide-y divide-[var(--midnight-blue)]/10">
                  {block.items.map((p) => (
                    <div key={p.title} className="py-4 grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-6">
                      <dt className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 800 }}>{p.title}</dt>
                      <dd className="text-[var(--midnight-blue)]/60 text-[13px]" style={{ lineHeight: 1.65 }}>{p.description}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}