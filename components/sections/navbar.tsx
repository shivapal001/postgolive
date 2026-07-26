"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Join", href: "#why-join" },
  { label: "Open Roles", href: "#roles" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass" : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="PostHire logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
              priority
            />
            <span className="text-[15px] font-semibold tracking-tight">
              PostHire
            </span>
            <span className="ml-1 hidden rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-2 sm:inline">
              Careers
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#apply">Apply Now</a>
          </Button>
          <Button asChild size="sm" variant="outline" className="sm:hidden">
            <a href="#apply">Apply</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
