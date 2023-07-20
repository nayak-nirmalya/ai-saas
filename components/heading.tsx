import React from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export default function Heading({
  description,
  icon: Icon,
  title,
  bgColor,
  iconColor
}: HeadingProps) {
  return (
    <div className="px-4 lg:px-8 items-center gap-x-3 mb-8 flex">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
