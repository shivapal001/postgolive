import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LegalHeader() {
  return (
    <header className="border-b border-white/8">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2">
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
        </Link>

        <Link
          href="/"
          className="flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to site
        </Link>
      </div>
    </header>
  );
}
