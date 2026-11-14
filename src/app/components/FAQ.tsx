import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { LightHero } from "./Brand";
import { Link } from "react-router";

const faqCategories = [
  { label: "All", value: "all" },
  { label: "General", value: "general" },
  { label: "Product", value: "product" },
  { label: "Implementation", value: "implementation" },
  { label: "Security", value: "security" },
];

const faqs = [
  {
    category: "general",
    question: "What is Schedule Beacon?",
    answer:
      "Schedule Beacon is a master scheduling software platform built specifically for K-12 school districts. We give counselors and administrators the tools to build, optimize, and publish master schedules faster and more accurately, replacing spreadsheets and legacy systems with purpose-built technology.",
  },
  {
    category: "general",
    question: "Who is Schedule Beacon designed for?",
    answer:
      "Schedule Beacon is designed for K-12 school districts of all sizes, from single-school districts to large multi-school systems. Our primary users are school counselors, principals, and central office administrators responsible for building and maintaining master schedules.",
  },
  {
    category: "general",
    question: "How is Schedule Beacon different from other scheduling tools?",
    answer:
      "Most scheduling tools were built decades ago and require significant manual effort. Schedule Beacon was purpose-built for modern districts with an intelligent optimization engine that automates the heavy lifting and constraint-aware configuration, so you spend days, not months, building your schedule.",
  },
  {
    category: "product",
    question: "What student information systems (SIS) does Schedule Beacon integrate with?",
    answer:
      "SIS integration is a feature we are actively working on and plan to support in a future release. We will provide updates as this becomes available. In the meantime, our team is happy to discuss your district's data workflow and how we can accommodate it during implementation.",
  },
  {
    category: "product",
    question: "Can Schedule Beacon handle complex scheduling constraints?",
    answer:
      "Absolutely. Our Constraint Optimization module lets districts configure scheduling logic that reflects their unique needs, including room capacity limits, course sequencing rules, special education accommodation requirements, and period or block structure preferences.",
  },
  {
    category: "product",
    question: "Does Schedule Beacon support block scheduling and other non-traditional structures?",
    answer:
      "Schedule Beacon supports traditional period-based schedules, A/B block schedules, semester-based structures, and hybrid models. Support for unique bell schedules is a feature we are currently working to implement and is not yet available. During onboarding, our team works with you to configure the platform to match your district's existing schedule structure.",
  },
  {
    category: "implementation",
    question: "How long does it take to get up and running?",
    answer:
      "From the start of your training period through go-live, districts are typically up and running in less than two weeks. Our dedicated implementation specialist guides you through every step, including configuration of your district's scheduling constraints and hands-on training for your scheduling team.",
  },
  {
    category: "implementation",
    question: "What kind of support does Schedule Beacon provide?",
    answer:
      "We provide hands-on support throughout implementation and ongoing support once you're live. Whenever your team needs help, a member of the Schedule Beacon team will personally follow up within one business day, so no issue is left waiting. We also expand our support coverage during peak scheduling periods, when your team needs it most.",
  },
  {
    category: "implementation",
    question: "Do you offer training for our scheduling team?",
    answer:
      "Yes. Every implementation includes in-person training sessions for your scheduling team, covering everything from initial data setup to building your first schedule. We also provide recorded walkthroughs your team can reference at any time.",
  },
  {
    category: "security",
    question: "Is Schedule Beacon FERPA compliant?",
    answer:
      "Yes. Schedule Beacon is built around FERPA requirements. We treat student scheduling data as education records subject to FERPA protections, and our data handling practices reflect that obligation.",
  },
  {
    category: "security",
    question: "Does Schedule Beacon comply with New York Education Law §2-d?",
    answer:
      "Yes. Schedule Beacon's data practices align with New York Education Law §2-d. We are glad to provide a Data Processing Agreement to any district that requires one as part of their vendor approval process.",
  },
  {
    category: "security",
    question: "Does Schedule Beacon have a Written Information Security Program (WISP)?",
    answer:
      "Yes. Schedule Beacon maintains a WISP in accordance with Massachusetts 201 CMR 17.00, which establishes our documented policies and procedures for protecting personal information.",
  },
  {
    category: "security",
    question: "How is student data protected within Schedule Beacon?",
    answer:
      "Student and district data is encrypted both in transit and at rest. Access to scheduling data is governed by role-based access controls, ensuring only authorized district personnel can view or modify records. Our infrastructure is hosted on reputable cloud providers configured around the principle of least privilege.",
  },
  {
    category: "security",
    question: "Who can we contact with security or compliance questions?",
    answer:
      "Reach out to our team directly at info@schedulebeacon.com or by calling 518-419-5335. We are glad to work directly with your district's IT or compliance staff to answer any questions.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`border-b border-[var(--midnight-blue)]/10 transition-colors duration-200 ${open ? "bg-[#FFF3CC]/70" : "hover:bg-[#E2E8F1]"}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <button onClick={() => setOpen(!open)} className="group w-full flex items-start gap-5 py-6 pl-3 pr-4 text-left">
        <span
          className={`text-sm w-8 shrink-0 pt-0.5 transition-colors ${open ? "text-[#B8860B]" : "text-[var(--midnight-blue)]/30"}`}
          style={{ fontWeight: 800 }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="flex-1 text-[var(--midnight-blue)] group-hover:text-[var(--midnight-blue)]/80"
          style={{ fontWeight: 700, lineHeight: 1.5, fontSize: "1.05rem" }}
        >
          {question}
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 pt-0.5">
          <Plus className={`w-5 h-5 ${open ? "text-[var(--midnight-blue)]" : "text-[var(--midnight-blue)]/40"}`} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pl-[4rem] pr-12 pb-7 text-[var(--midnight-blue)]/70" style={{ lineHeight: 1.8 }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <LightHero
        eyebrow="FAQ"
        title={
          <>
            Frequently asked <span className="text-[#B8860B]">questions</span>
          </>
        }
      >
        <p className="text-lg text-[var(--midnight-blue)]/65" style={{ lineHeight: 1.7 }}>
          Everything you need to know about Schedule Beacon. Can't find the answer you're looking for?{" "}
          <Link to="/contact" className="text-[var(--midnight-blue)] underline decoration-[var(--university-gold)] decoration-2 underline-offset-4 hover:text-[#B8860B] transition-colors" style={{ fontWeight: 700 }}>
            Reach out to our team.
          </Link>
        </p>
      </LightHero>

      {/* ── FAQ Body ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
          {/* Category nav */}
          <nav className="lg:sticky lg:top-28 self-start flex lg:flex-col gap-1 overflow-x-auto">
            <div
              className="hidden lg:block text-xs text-[var(--midnight-blue)]/40 uppercase mb-3"
              style={{ fontWeight: 700, letterSpacing: "0.2em" }}
            >
              Topics
            </div>
            {faqCategories.map((cat) => {
              const active = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-left whitespace-nowrap px-4 py-2.5 border-b-2 lg:border-b-0 lg:border-l-4 transition-all ${
                    active
                      ? "border-[var(--university-gold)] text-[var(--midnight-blue)] bg-[#FFF8E5]"
                      : "border-transparent text-[var(--midnight-blue)]/50 hover:text-[var(--midnight-blue)] hover:border-[var(--midnight-blue)]/15"
                  }`}
                  style={{ fontWeight: active ? 800 : 600 }}
                >
                  {cat.label}
                </button>
              );
            })}
          </nav>

          {/* FAQ List */}
          <div className="border-t-2 border-[var(--midnight-blue)]">
            {filtered.map((faq, i) => (
              <FAQItem key={`${activeCategory}-${i}`} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}