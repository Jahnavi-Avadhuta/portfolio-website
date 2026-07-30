import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span
      className="cursor-default rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-md"
      style={{
        border: "1px solid color-mix(in srgb, var(--primary) 25%, var(--border))",
        background: "color-mix(in srgb, var(--primary) 10%, var(--surface))",
        color: "var(--primary)",
      }}
    >
      {children}
    </span>
  );
};

export default Badge;