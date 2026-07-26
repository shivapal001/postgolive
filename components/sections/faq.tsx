"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this paid?",
    a: "Not yet. Founding team roles are unpaid at this early stage. As PostHire grows past launch, founding members get first priority for paid roles and expanded responsibility.",
  },
  {
    q: "Who can apply?",
    a: "Anyone who's excited about building something from scratch and can commit real, consistent time each week — regardless of where you are in your career.",
  },
  {
    q: "Can students join?",
    a: "Yes. Several roles are well suited to students looking for real, hands-on startup experience alongside their studies.",
  },
  {
    q: "Is it remote?",
    a: "Fully remote. Work from wherever you're based — what matters is the work you ship, not where you sit while shipping it.",
  },
  {
    q: "How long is the process?",
    a: "Most applicants hear back within a few days of applying, and the full process — application to offer — typically takes one to two weeks.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-pad relative">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
