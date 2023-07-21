"use client";

import React, { useEffect, useState } from "react";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div>ModalProvider</div>;
}
