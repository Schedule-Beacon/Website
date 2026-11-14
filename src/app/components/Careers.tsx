import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";
import { NavyHero } from "./Brand";
import {
  openRoles,
  DEPARTMENTS,
  COMMITMENTS,
  LOCATION_TYPES,
  type Department,
  type Commitment,
  type LocationType,
} from "../data/openRoles";

const ALL = "All" as const;

function FilterDropdown<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T | typeof ALL;
  onChange: (value: T | typeof ALL) => void;
}) {
  return (
    <div>
      <label
        className="block text-[var(--midnight-blue)]/50 text-xs mb-2 uppercase"
        style={{ fontWeight: 700, letterSpacing: "0.12em" }}
      >
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as T | typeof ALL)}
          className="w-full appearance-none px-4 py-3 pr-9 border border-gray-200 rounded-xl bg-[var(--soft-grey)]/60 text-[var(--midnight-blue)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all cursor-pointer"
          style={{ fontWeight: 600 }}
        >
          <option value={ALL}>All</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-[var(--midnight-blue)]/40 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}

function RoleRow({ role }: { role: (typeof openRoles)[number] }) {
  return (
    <Link
      to={role.postingPath}
      className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 border-b border-gray-100 last:border-b-0"
    >
      <div>
        <div
          className="text-xs text-[var(--midnight-blue)]/50 uppercase mb-2"
          style={{ fontWeight: 700, letterSpacing: "0.12em" }}
        >
          {role.department} · {role.commitment} · {role.locationType}
        </div>
        <h3 className="text-xl text-[var(--midnight-blue)]" style={{ fontWeight: 700 }}>
          {role.title}
        </h3>
        <p className="text-sm text-[var(--midnight-blue)]/60 mt-1">
          {role.location} — {role.hours} — {role.compensation}
        </p>
      </div>
      <span className="flex items-center gap-2 text-[var(--midnight-blue)] text-sm shrink-0" style={{ fontWeight: 700 }}>
        View Posting
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

export function Careers() {
  const [department, setDepartment] = useState<Department | typeof ALL>(ALL);
  const [commitment, setCommitment] = useState<Commitment | typeof ALL>(ALL);
  const [locationType, setLocationType] = useState<LocationType | typeof ALL>(ALL);

  const filteredRoles = useMemo(
    () =>
      openRoles.filter(
        (role) =>
          (department === ALL || role.department === department) &&
          (commitment === ALL || role.commitment === commitment) &&
          (locationType === ALL || role.locationType === locationType),
      ),
    [department, commitment, locationType],
  );

  const count = filteredRoles.length;

  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <NavyHero
        eyebrow="Careers"
        bottomPadding="pb-44"
        title={
          <>
            Help us build the <span className="text-[var(--university-gold)]">future of scheduling</span>
          </>
        }
      >
        <p className="text-xl text-white/70 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
          We're a small team on a mission to put student success at the center of every schedule. If that excites
          you, we want to hear from you — whether or not there's an open role that fits today.
        </p>
      </NavyHero>

      {/* ── Open Positions panel ────────────────────────────── */}
      <section className="relative bg-[var(--soft-grey)] pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative -mt-28 z-10 bg-white rounded-3xl shadow-2xl shadow-[var(--midnight-blue)]/15 overflow-hidden"
          >
            <div className="h-1.5 bg-[var(--university-gold)]" />

            <div className="p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
                <h2 className="text-3xl text-[var(--midnight-blue)]" style={{ fontWeight: 800 }}>
                  Open Positions
                </h2>
                <span className="text-sm text-[var(--midnight-blue)]/50" style={{ fontWeight: 600 }}>
                  {count === 0 ? "No openings at this time" : `${count} ${count === 1 ? "opening" : "openings"}`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <FilterDropdown label="Department" options={DEPARTMENTS} value={department} onChange={setDepartment} />
                <FilterDropdown label="Time Commitment" options={COMMITMENTS} value={commitment} onChange={setCommitment} />
                <FilterDropdown label="Location" options={LOCATION_TYPES} value={locationType} onChange={setLocationType} />
              </div>

              {count > 0 && (
                <div className="mt-6">
                  {filteredRoles.map((role) => (
                    <RoleRow key={role.slug} role={role} />
                  ))}
                </div>
              )}
            </div>

            {/* Always-on note */}
            <div className="relative bg-[var(--midnight-blue)] px-8 md:px-12 py-12 overflow-hidden">
              <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[var(--university-gold)] opacity-[0.10] blur-3xl" />
              <div className="relative max-w-2xl mx-auto text-center">
                <p className="text-lg md:text-xl text-white" style={{ lineHeight: 1.75, fontWeight: 500 }}>
                  We are always looking for self-starters who are looking to make a difference in education. If
                  interested, please feel free to introduce yourself and share your resume by emailing us at{" "}
                  <a
                    href="mailto:info@schedulebeacon.com"
                    className="text-[var(--university-gold)] underline decoration-2 underline-offset-4 hover:text-white transition-colors"
                    style={{ fontWeight: 700 }}
                  >
                    info@schedulebeacon.com
                  </a>
                  , or by submitting your information through our general interest form.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    to="/careers/apply/general-interest"
                    className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-7 py-3.5 rounded-xl hover:bg-[var(--university-gold)]/90 hover:shadow-lg transition-all text-sm"
                    style={{ fontWeight: 700 }}
                  >
                    Submit General Interest
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:info@schedulebeacon.com"
                    className="inline-block border-2 border-white/30 text-white px-7 py-3 rounded-xl hover:border-white hover:bg-white/5 transition-all text-sm"
                    style={{ fontWeight: 700 }}
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
