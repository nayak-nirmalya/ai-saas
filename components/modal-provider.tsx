"use client";

import React, { useEffect, useState } from "react";

import PorModal from "@/components/pro-modal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PorModal />
    </>
  );
}
