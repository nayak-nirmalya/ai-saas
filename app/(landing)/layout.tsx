import React from "react";

export default function LandingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
}
