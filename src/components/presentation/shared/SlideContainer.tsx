"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SlideContainer({ children, className }: SlideContainerProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden relative",
        className
      )}
    >
      <div className="w-full max-w-7xl relative mx-auto h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
