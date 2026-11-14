import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
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
    title: "Always a Human",
    description:
      "Every support interaction connects you with a real scheduling expert. No chatbots, no automated ticket queues.",
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

const accordionMeta: Record<string, string> = {
  "Security and Compliance": "FERPA · NY §2-d · MA WISP · Encryption · Access Controls",
  "Dedicated Implementation Team": "Discovery · Build · Training · Go-live",
  "Ongoing Support": "1-day response · Human support · Seasonal coverage",
  "Regular Platform Updates": "Client feedback · Surveys · Feature testing",
};

const accordionPillars: Record<string, typeof securityPillars> = {
  "Security and Compliance": securityPillars,
  "Dedicated Implementation Team": implementationPillars,
  "Ongoing Support": supportPillars,
  "Regular Platform Updates": updatesPillars,
};

const accordionIntro: Record<string, string> = {
  "Security and Compliance": "In a FERPA-regulated environment, security is a foundation. Here is how we approach it.",
  "Dedicated Implementation Team": "Every district gets a dedicated scheduling expert who guides you through each phase, from initial discovery to go-live.",
  "Ongoing Support": "After go-live, your district has direct access to our team — not a helpdesk queue.",
  "Regular Platform Updates": "Schedule Beacon improves continuously, driven by direct input from the districts we work with.",
};

function PlatformAccordion({ feature, index }: { feature: typeof platformFeatures[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const meta = accordionMeta[feature.title] ?? "";
  const pillars = accordionPillars[feature.title] ?? [];
  const intro = accordionIntro[feature.title] ?? "";
  return (
    <motion.div
      className="border overflow-hidden transition-colors duration-200 bg-white"
      style={{ borderColor: open ? "var(--midnight-blue)" : "rgb(243 244 246)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 px-6 py-5 text-left transition-colors duration-200"
        style={{ background: open ? "rgba(0,33,71,0.03)" : "white" }}
      >
        {/* Left accent bar */}
        <div
          className="w-1 self-stretch shrink-0 transition-colors duration-200"
          style={{ background: open ? "var(--university-gold)" : "rgb(229 231 235)", minHeight: "2.5rem" }}
        />
        <span className="text-[var(--midnight-blue)]/30 text-xl w-8 shrink-0" style={{ fontWeight: 900 }}>
          0{index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[var(--midnight-blue)]" style={{ fontSize: "1rem", fontWeight: 600 }}>
            {feature.title}
          </div>
          {meta && (
            <div className="text-[var(--midnight-blue)]/40 text-xs mt-0.5 truncate" style={{ fontWeight: 500, letterSpacing: "0.01em" }}>
              {meta}
            </div>
          )}
        </div>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: open ? "var(--midnight-blue)" : "rgb(156 163 175)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-7 pt-2">
              {intro && (
                <p className="text-[var(--midnight-blue)]/75 mb-6" style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.6 }}>
                  {intro}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillars.map((pillar, i) => {
                  const isOddTotal = pillars.length % 2 !== 0;
                  const isLastOdd = isOddTotal && i === pillars.length - 1;
                  return (
                    <div
                      key={i}
                      className="p-5 border-l-2 border-[var(--university-gold)] bg-[var(--soft-grey)]/60"
                      style={isLastOdd ? { gridColumn: "1 / -1", maxWidth: "calc(50% - 8px)", margin: "0 auto", width: "100%" } : {}}
                    >
                      <h4 className="text-[var(--midnight-blue)] mb-1.5 text-sm" style={{ fontWeight: 700 }}>
                        {pillar.title}
                      </h4>
                      <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.65 }}>
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              {feature.title === "Security and Compliance" && (
                <p className="text-[var(--midnight-blue)]/75 mt-6" style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.6 }}>
                  Security and compliance are not a one-time checklist — they are an ongoing responsibility that evolves alongside our platform and the regulatory landscape districts operate within. We are glad to walk any district's IT or compliance team through our infrastructure, data handling, and privacy practices in detail.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


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
  ["Achieve higher student course placement rates", "Eliminate scheduling conflicts across all buildings", "Balance teacher workloads across departments"],
  ["Support equity and compliance requirements", "Reduce time spent on manual scheduling tasks", "Give administrators clear visibility into the full schedule"],
];

const platformFeatures = [
  { title: "Security and Compliance" },
  { title: "Dedicated Implementation Team" },
  { title: "Ongoing Support" },
  { title: "Regular Platform Updates" },
];

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
        <p className="text-lg text-white/70 mb-9 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
          Purpose-built for K-12 school districts. Build master schedules in days, while ensuring every student gets the courses they need.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-7 py-3.5 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg"
            style={{ fontWeight: 700 }}
          >
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3 rounded-xl hover:border-white transition-all"
            style={{ fontWeight: 600 }}
          >
            View Resources
          </Link>
        </div>
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

      {/* ── Benefits Strip ──────────────────────────────────── */}
      <section id="difference" className="py-24 bg-[var(--midnight-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--university-gold)] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>The Difference</Eyebrow>
            <h2 className="text-4xl text-white">
              Real results for real districts
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 max-w-4xl mx-auto">
            {benefits.map((col, ci) => (
              <div key={ci} className="space-y-6">
                {col.map((benefit, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (ci * 3 + i) * 0.08 }}
                  >
                    <span className="h-0.5 w-6 bg-[var(--university-gold)] shrink-0 mt-[0.9rem]" />
                    <span className="text-white/80 text-xl" style={{ lineHeight: 1.5 }}>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Features ───────────────────────────────── */}
      <section id="platform" className="py-24 bg-[#FFF8E5]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow tone="navy">Enterprise Platform</Eyebrow>
            <h2 className="text-4xl text-[var(--midnight-blue)]">
              Built for how districts actually work
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {platformFeatures.map((feature, i) => (
              <PlatformAccordion key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-[#FFF8E5] pt-0">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="bg-[var(--midnight-blue)] border-l-4 border-[var(--university-gold)] px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="text-white mb-1" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                Ready to get a quote for your district?
              </p>
              <p className="text-white/55 text-sm">
                Contact us or request a demo and we'll provide full pricing details tailored to your enrollment and district structure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm"
                style={{ fontWeight: 600 }}
              >
                Contact Us
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-6 py-3 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all text-sm"
                style={{ fontWeight: 700 }}
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}