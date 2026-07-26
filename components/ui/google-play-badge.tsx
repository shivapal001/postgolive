import { cn } from "@/lib/utils";

export function GooglePlayBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "glass relative flex items-center gap-3 rounded-xl px-4 py-2.5 opacity-90",
        className
      )}
      role="img"
      aria-label="PostHire on Google Play — coming soon"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true">
        <path d="M3.6 2.6c-.3.3-.5.8-.5 1.4v16c0 .6.2 1.1.5 1.4l.1.1L13 12.3v-.2L3.7 2.5l-.1.1Z" fill="#5FA0FF" />
        <path d="M16.1 15.4 13 12.3v-.2l3.1-3.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2Z" fill="#9B7DFF" />
        <path d="M16.1 15.4 13 12.2 3.6 21.6c.4.4 1 .4 1.7 0l10.8-6.2Z" fill="#C9B8FF" />
        <path d="M16.1 9 5.3 2.8c-.7-.4-1.3-.4-1.7 0L13 12.2 16.1 9Z" fill="#7C5CFF" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-muted-2">Get it on</span>
        <span className="text-sm font-semibold text-foreground">Google Play</span>
      </div>
      <span className="ml-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-violet-300">
        Soon
      </span>
    </div>
  );
}
