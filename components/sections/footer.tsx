import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/vybee-ai", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8">
      <div className="container flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="PostHire logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
          />
          <span className="text-[15px] font-semibold tracking-tight">PostHire</span>
        </a>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="text-muted transition-colors hover:text-violet-300"
            >
              <s.icon className="h-[18px] w-[18px]" />
            </a>
          ))}
          <a
            href="mailto:info.posthire@gmail.com"
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-violet-300"
          >
            <Mail className="h-4 w-4" />
            info.posthire@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-white/8 py-6">
        <div className="container flex flex-col items-center gap-3 text-center text-xs text-muted-2 sm:flex-row sm:justify-between sm:text-left">
          <span>© {new Date().getFullYear()} PostHire. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-violet-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-violet-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
