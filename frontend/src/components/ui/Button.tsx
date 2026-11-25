import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[var(--radius-button)] border-[var(--border-ink-base)] border-[var(--color-ink-black)] bg-clip-padding font-[var(--font-display)] text-sm font-black whitespace-nowrap uppercase transition-all duration-100 ease-out outline-none select-none focus-visible:ring-3 focus-visible:ring-[var(--color-accent-energy)]/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-[var(--color-accent-danger)] aria-invalid:ring-3 aria-invalid:ring-[var(--color-accent-danger)]/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-accent-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-primary)]/80",
        outline:
          "bg-[var(--color-surface-paper-card)] text-[var(--color-text-on-paper)] hover:bg-[var(--color-surface-tint-cream)]",
        secondary:
          "bg-[var(--color-accent-magic)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-magic)]/80",
        ghost:
          "bg-transparent text-[var(--color-text-on-paper)] hover:bg-[var(--color-surface-tint-cream)]",
        destructive:
          "bg-[var(--color-accent-danger)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-crimson)]/90 focus-visible:border-[var(--color-accent-danger)] focus-visible:ring-[var(--color-accent-danger)]/30",
        link: "text-accent-energy underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="comic-ui-button__content">{children}</span>
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
