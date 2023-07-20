import React from "react";
import { MessageSquare } from "lucide-react";

import Heading from "@/components/heading";

export default function ConversationPage() {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our Most Advanced Conversation Model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
}
