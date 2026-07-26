"use client";

import { motion } from "framer-motion";
import { Users2, Rocket, ShieldCheck } from "lucide-react";
import { GooglePlayBadge } from "@/components/ui/google-play-badge";

const stats = [
  { icon: Users2, label: "Brands & creators", value: "Two-sided marketplace" },
  { icon: Rocket, label: "Product stage", value: "Live in Beta" },
  { icon: ShieldCheck, label: "Team stage", value: "Pre-launch, founder-led" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow mb-4">What we're building</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A marketplace where brands find creators —
              <span className="text-gradient-brand"> not the other way around.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              PostHire is an influencer marketing platform that connects
              brands with content creators for campaigns, collaborations, and
              long-term partnerships. Instead of cold DMs and spreadsheets,
              brands post what they need and creators apply directly — think
              of it as a job board, built for the creator economy.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              The app is currently live in <strong className="text-foreground">Beta</strong>,
              with a small group of early brands and creators using it daily.
              We're now building the founding team that will take PostHire
              from beta to public launch.
            </p>

            <div className="mt-8">
              <GooglePlayBadge />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative flex flex-col gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass glass-hover flex items-center gap-4 rounded-2xl p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted-2">
                      {stat.label}
                    </p>
                    <p className="text-[15px] font-medium text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
