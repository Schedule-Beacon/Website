import type { ReactNode } from "react";
import { motion } from "motion/react";
import logoIcon from "../../assets/logo-watermark-hires.png";

/** Small spaced-caps label with a thin rule — replaces pill "bubble" labels sitewide. */
export function Eyebrow({
  children,
  align = "center",
  tone = "gold",
  className = "",
}: {
  children: ReactNode;
  align?: "center" | "left";
  tone?: "gold" | "navy" | "white" | "ink";
  className?: string;
}) {
  const color =
    tone === "gold" ? "var(--university-gold)" : tone === "white" ? "rgba(255,255,255,0.7)" : "var(--midnight-blue)"; // navy + ink share text color
  const rule = tone === "navy" ? "var(--university-gold)" : color; // ink = navy text with navy rules
  return (
    <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""} ${className}`}>
      <span className="h-px w-10" style={{ background: rule }} />
      <span className="text-xs uppercase" style={{ color, fontWeight: 700, letterSpacing: "0.25em" }}>
        {children}
      </span>
      {align === "center" && <span className="h-px w-10" style={{ background: rule }} />}
    </div>
  );
}

/** Navy page hero used on About, Careers, Products, and Request a Demo. */
export function NavyHero({
  eyebrow,
  title,
  children,
  bottomPadding = "pb-28",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  bottomPadding?: string;
}) {
  return (
    <section className={`relative pt-24 ${bottomPadding} overflow-hidden bg-[var(--midnight-blue)]`}>
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
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-5xl lg:text-6xl text-white mb-6" style={{ lineHeight: 1.1 }}>
            {title}
          </h1>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Warm light hero for pages that don't use the navy header: cream base, navy dot texture,
 * oversized logo mark, left-aligned headline, and a gold base stripe.
 */
export function LightHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#FFF8E5]">
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--midnight-blue) 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(90deg, transparent 0%, black 55%, black 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 55%, black 100%)",
        }}
      />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-[var(--university-gold)] opacity-[0.18] blur-3xl translate-x-1/3 -translate-y-1/3" />
      <img
        src={logoIcon}
        alt=""
        aria-hidden="true"
        className="absolute right-[4%] top-1/2 -translate-y-1/2 w-[340px] pointer-events-none select-none hidden md:block"
        style={{ opacity: 0.09, mixBlendMode: "multiply" }}
      />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10">
        <motion.div
          className="max-w-2xl border-l-4 border-[var(--midnight-blue)] pl-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Eyebrow align="left" tone="navy">
            {eyebrow}
          </Eyebrow>
          <h1 className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6" style={{ lineHeight: 1.08, fontWeight: 800 }}>
            {title}
          </h1>
          {children}
        </motion.div>
      </div>
      <div className="relative h-2 bg-[var(--university-gold)]" />
    </section>
  );
}
