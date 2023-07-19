import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genius | Dashboard",
  description: "AI SaaS Platform.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div>Hello Sidebar</div>
      </div>
    </div>
  );
}
