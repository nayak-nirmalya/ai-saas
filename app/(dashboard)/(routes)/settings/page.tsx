import React from "react";
import { Settings } from "lucide-react";

import Heading from "@/components/heading";

export default function SettingsPage() {
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage Account Settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
    </div>
  );
}
