"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Search,
  MessagesSquare,
  ClipboardCheck,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  { icon: FileText, title: "Apply", description: "Send your application through the form below — takes about five minutes." },
  { icon: Search, title: "Application Review", description: "We read every application. If it's a fit, you'll hear back within a few days." },
  { icon: MessagesSquare, title: "Interview", description: "A relaxed conversation with a founder about your experience and what you'd own." },
  { icon: ClipboardCheck, title: "Trial Task", description: "A small, real piece of work so we can see how we collaborate in practice." },
  { icon: PartyPopper, title: "Welcome to PostHire", description: "You're in. Time to start shaping the product from the ground up." },
];

export function HiringProcess() {
  return (
    <section id="process" className="section-pad relative">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">How it works</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A straightforward hiring process
          </h2>
          <p className="mt-4 text-[15px] text-muted">
            Five steps, no unnecessary rounds. Most applicants hear back
            within a week of applying.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* connecting line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-transparent sm:left-8" />

          <ol className="space-y-3">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-5 sm:gap-6"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-brand shadow-[0_0_0_4px_rgba(8,6,14,1)] sm:h-16 sm:w-16">
                  <step.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <div className="glass glass-hover flex-1 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-muted-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[16px] font-semibold tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
