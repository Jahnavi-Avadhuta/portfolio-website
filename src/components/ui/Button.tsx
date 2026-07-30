import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
}

const Button = ({ children, href }: ButtonProps) => {
  const classes =
    "inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1";

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
};

export default Button;