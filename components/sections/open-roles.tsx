"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Globe, Sprout } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { roles } from "@/data/roles";

function selectRole(title: string) {
  window.dispatchEvent(new CustomEvent("posthire:select-role", { detail: title }));
  document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function OpenRoles() {
  return (
    <section id="roles" className="section-pad relative">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">Open roles</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            10 roles, 4 teams, one founding class
          </h2>
          <p className="mt-4 text-[15px] text-muted">
            Every role below is remote, flexible, and unpaid at this early
            stage — with founding-team ownership and priority for paid roles
            as we grow.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <motion.article
              key={role.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover flex flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2">
                    {role.department}
                  </p>
                  <h3 className="mt-1 text-[17px] font-semibold tracking-tight">
                    {role.title}
                  </h3>
                </div>
              </div>

              <ul className="mt-4 space-y-1.5">
                {role.responsibilities.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.skills.map((skill) => (
                  <Badge key={skill} variant="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/8 pt-4 text-[12px] text-muted-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {role.commitment}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5" /> Remote
                </span>
                <span className="flex items-center gap-1.5">
                  <Sprout className="h-3.5 w-3.5" /> Early stage &middot; Unpaid
                </span>
              </div>

              <button
                onClick={() => selectRole(role.title)}
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] py-2.5 text-[13px] font-medium text-foreground transition-colors hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-200"
              >
                Apply for this role
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
