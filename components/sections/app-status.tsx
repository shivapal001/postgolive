"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GooglePlayBadge } from "@/components/ui/google-play-badge";

export function AppStatus() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14"
        >
          <div className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-20 blur-[100px]" />

          <div className="relative mx-auto h-16 w-16 animate-pulse-glow">
            <Image
              src="/app-icon.png"
              alt="PostHire app icon"
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl shadow-[0_8px_30px_-8px_rgba(124,92,255,0.6)]"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
            The PostHire app is currently in <span className="text-gradient-brand">Beta</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-muted">
            We're testing with a small group of brands and creators ahead of
            a public launch. The founding team you join today will help take
            it there.
          </p>

          <div className="mt-8 flex justify-center">
            <GooglePlayBadge />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
