import { cn } from "@/lib/utils";
import React from "react";

interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function NeonGradientCard({
  className,
  children,
  ...props
}: NeonGradientCardProps) {
  return (
    <div className="relative group">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse transition duration-500",
          className
        )}
      />
      <div
        className={cn(
          "relative bg-black px-8 py-6 rounded-3xl border border-gray-800",
          "transform transition duration-500 group-hover:scale-[1.02]",
          "bg-gradient-to-r from-gray-900 to-gray-950",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}