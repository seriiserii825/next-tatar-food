type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant; // основной пропс
  size?: "sm" | "md" | "lg";
  as?: "button" | "link"; // ← вот этот пропс ты спрашивал
  href?: string; // используется только если as="link"
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-xl py-2 px-4 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer";
  const variantClasses = {
    primary:
      "bg-warm-accent hover:bg-warm-accent-dark text-warm-text border border-transparent hover:border-transparent hover:bg-warm-accent-dark",
    secondary:
      "bg-[#2C2118] hover:bg-warm-card border border-warm-accent/30 hover:border-warm-accent-light text-warm-text",
    outline:
      "border border-warm-accent hover:border-warm-accent-light text-warm-text bg-transparent",
    ghost: "hover:bg-warm-card text-warm-text",
    danger: "bg-red-950/40 hover:bg-red-900/60 text-red-300",
  }[variant];

  if (as === "link" && href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
