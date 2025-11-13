import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all duration-300 text-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105 active:scale-100",
    secondary:
      "bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 active:bg-primary-100",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600 active:bg-gray-100",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

