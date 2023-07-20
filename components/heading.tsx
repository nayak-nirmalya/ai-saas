import React from "react";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export default function Heading({
  description,
  icon,
  title,
  bgColor,
  iconColor
}: HeadingProps) {
  return <div>Heading</div>;
}
