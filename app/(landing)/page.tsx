import React from "react";

import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import LandingContent from "@/components/landing-content";

export default function LandingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
