"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roles } from "@/data/roles";

type Status = "idle" | "submitting" | "success" | "error";

export function ApplicationForm() {
  const [role, setRole] = useState<string>("");
  const [resumeName, setResumeName] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setRole(detail);
    };
    window.addEventListener("posthire:select-role", handler);
    return () => window.removeEventListener("posthire:select-role", handler);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    // Ensure the controlled Select value (role) is included, since it isn't
    // a native form field with a name/value pair on its own.
    formData.set("role", role);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="apply" className="section-pad relative">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">Apply</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tell us why you're a fit
          </h2>
          <p className="mt-4 text-[15px] text-muted">
            Takes about five minutes. We read every single application.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass mx-auto max-w-2xl rounded-3xl p-6 sm:p-10"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-violet-400" />
              <h3 className="mt-5 text-xl font-semibold">Application received</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Thanks for applying to PostHire. We review every application
                and will reach out within a few days if it's a fit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input id="fullName" name="fullName" placeholder="Jordan Rivera" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@email.com" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input id="linkedin" name="linkedin" placeholder="linkedin.com/in/you" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio / GitHub</Label>
                  <Input id="portfolio" name="portfolio" placeholder="yourwork.com" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="role">Role applying for</Label>
                  <Select value={role} onValueChange={setRole} name="role">
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((r) => (
                        <SelectItem key={r.slug} value={r.title}>
                          {r.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours">Hours per week available</Label>
                  <Select name="hours">
                    <SelectTrigger id="hours">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5–10 hrs/week</SelectItem>
                      <SelectItem value="10-15">10–15 hrs/week</SelectItem>
                      <SelectItem value="15-20">15–20 hrs/week</SelectItem>
                      <SelectItem value="20+">20+ hrs/week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume</Label>
                <label
                  htmlFor="resume"
                  className="flex h-24 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-white/15 bg-white/[0.02] text-center transition-colors hover:border-violet-400/50 hover:bg-white/[0.04]"
                >
                  <UploadCloud className="h-5 w-5 text-muted" />
                  <span className="text-sm text-muted">
                    {resumeName || "Click to upload PDF, DOC — max 10MB"}
                  </span>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? "")}
                  />
                </label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to join PostHire?</Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  placeholder="Tell us what draws you to this stage of building, and what you'd bring to the founding team."
                  required
                />
              </div>

              {status === "error" && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting
                  </>
                ) : (
                  "Submit application"
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
