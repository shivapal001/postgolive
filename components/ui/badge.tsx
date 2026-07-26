import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-violet-500/30 bg-violet-500/10 text-violet-300",
        blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
        neutral: "border-white/10 bg-white/5 text-muted",
        outline: "border-white/15 text-muted-2",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
