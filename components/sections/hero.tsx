"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import KineticGrid from "@/components/ui/kinetic-grid";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24">
      <KineticGrid className="-z-20" />
      <div className="noise-overlay pointer-events-none absolute inset-0 -z-10" />
      {/* fade to solid background at the bottom edge so content below sits on flat black */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-b from-transparent to-background" />

      <div className="container relative pointer-events-none">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Founding Team &middot; Applications Open
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Join the Founding Team
            <br />
            of <span className="text-gradient-brand">PostHire</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-lg text-muted md:text-xl"
          >
            We're building the platform that connects brands with the
            creators who move culture. Help us shape it from the ground up —
            before anyone else knows it exists.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 pointer-events-auto sm:flex-row"
          >
            <Button asChild size="lg">
              <a href="#apply">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#roles">
                <Compass className="h-4 w-4" />
                Explore Roles
              </a>
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-14 flex items-center gap-2 text-xs text-muted-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            Currently in beta &middot; 10 roles open across 4 teams
          </motion.div>
        </div>
      </div>
    </section>
  );
}
