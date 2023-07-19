import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>Landing Page (Protected!)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
