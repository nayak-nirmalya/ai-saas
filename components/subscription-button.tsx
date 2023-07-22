"use client";

import React, { useState } from "react";
import { Zap } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";

export default function SubscriptionButton({
  isPro = false
}: {
  isPro: boolean;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.error("BILLING_ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      value={isPro ? "default" : "premium"}
      onClick={onClick}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
}
