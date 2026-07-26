"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  Users,
  GraduationCap,
  PieChart,
  TrendingUp,
  Globe2,
  type LucideIcon,
} from "lucide-react";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Hammer,
    title: "Build from Day One",
    description:
      "No legacy code, no bureaucracy. Every feature you ship, every decision you make, shapes the product from its earliest form.",
  },
  {
    icon: Users,
    title: "Work with Founders",
    description:
      "Direct access to the people building PostHire. No layers of management between your ideas and the roadmap.",
  },
  {
    icon: GraduationCap,
    title: "Real Startup Experience",
    description:
      "Learn what building a company actually looks like — the messy, fast-moving reality, not a case study of one.",
  },
  {
    icon: PieChart,
    title: "Ownership",
    description:
      "Meaningful ownership over the surface area you work on, with the autonomy to make calls and see them through.",
  },
  {
    icon: TrendingUp,
    title: "Future Paid Opportunities",
    description:
      "As PostHire grows past launch, founding team members get first priority for paid roles and expanded responsibility.",
  },
  {
    icon: Globe2,
    title: "Flexible Remote Work",
    description:
      "Work from anywhere, on a schedule that fits your life. What matters is the work you ship, not the hours you clock.",
  },
];

export function WhyJoin() {
  return (
    <section id="why-join" className="section-pad relative">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">Why join us</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What you get for getting in early
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <reason.icon className="h-5 w-5 text-violet-300" />
              </div>
              <h3 className="relative mt-5 text-[17px] font-semibold tracking-tight">
                {reason.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
