"use client";

import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

export default function LandingNavbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      LandingNavbar
    </nav>
  );
}
