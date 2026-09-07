import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/10 text-primary border-primary/20",
        secondary:
          "border-transparent bg-slate-100 text-slate-700",
        accent:
          "border-transparent bg-cyan-500/15 text-cyan-700 border-cyan-500/30",
        outline:
          "text-slate-700 border-slate-200",
        success:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-700",
        warning:
          "border-amber-500/20 bg-amber-500/10 text-amber-700",
        hero:
          "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
