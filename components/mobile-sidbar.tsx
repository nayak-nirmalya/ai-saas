"use client";

import React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function MobileSidebar() {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu />
    </Button>
  );
}
