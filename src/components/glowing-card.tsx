import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

interface FlatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const FlatCard: React.FC<FlatCardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "border border-violet-500/20 bg-black/40 rounded-lg p-6 h-full flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};
