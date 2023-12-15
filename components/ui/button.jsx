"use client"
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";


const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-indigo600 text-white text-sm hover:bg-indigo50 hover:text-indigo600 font-semibold",
      soft: "hover:bg-indigo600 hover:text-white text-sm bg-indigo50 text-indigo600 font-semibold",
      outline: "bg-transparent border-solid border-2 border-indigo600 text-indigo600 hover:bg-indigo50 hover:text-indigo600 font-semibold text-sm ",
      disabled: " bg-grey200 text-grey-600 font-semibold text-sm   ",

    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, onClick, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
