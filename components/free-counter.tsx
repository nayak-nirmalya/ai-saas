"use client";

import React, { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNT } from "@/constants";

export default function FreeCounter({
  apiLimitCount = 0
}: {
  apiLimitCount: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNT} Free Generations
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
