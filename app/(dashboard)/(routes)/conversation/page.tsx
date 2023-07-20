"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Heading from "@/components/heading";

export default function ConversationPage() {
  const form = useForm({
    defaultValues: {
      prompt: ""
    }
  });

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our Most Advanced Conversation Model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8"></div>
    </div>
  );
}
