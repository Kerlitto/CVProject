import * as React from "react";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: number;
  label: string;
  className?: string;
  handleClick: (value: number) => void;
}

const Stepper = React.forwardRef<HTMLSpanElement, ButtonProps>(
  ({ className, label, handleClick, value, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 min-w-[190px] items-center justify-between gap-2 rounded-md border border-input bg-background py-2 text-sm",
          className
        )}
      >
        <Button
          disabled={value === 0}
          variant="link"
          onClick={() => handleClick(value - 1)}
        >
          -
        </Button>
        <span
          className={cn(!value && "truncate text-muted-foreground")}
          ref={ref}
          {...props}
        >
          {value} {label}
          {value > 1 || value === 0 ? "s" : ""}
        </span>
        <Button
          disabled={value === 100}
          variant="link"
          onClick={() => handleClick(value + 1)}
        >
          +
        </Button>
      </div>
    );
  }
);
Stepper.displayName = "Stepper";

export { Stepper };
