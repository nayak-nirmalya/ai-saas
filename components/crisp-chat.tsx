"use client";

import { Crisp } from "crisp-sdk-web";
import React, { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("1f439c42-5ee8-40bf-a9d0-0e0672e7a247");
  }, []);

  return null;
}
