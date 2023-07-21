"use client";

import React, { useEffect, useState } from "react";

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

  return <div>FreeCounter</div>;
}
