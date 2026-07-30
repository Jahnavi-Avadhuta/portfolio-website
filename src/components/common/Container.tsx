import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-[90%] max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;