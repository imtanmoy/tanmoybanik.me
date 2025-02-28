import React, { type ReactNode } from "react";

interface FlatCardProps {
  children: ReactNode;
  className?: string;
}

export const FlatCard: React.FC<FlatCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`border border-violet-500/20 bg-black/40 rounded-lg p-6 h-full flex flex-col ${className}`}>
      {children}
    </div>
  );
};
