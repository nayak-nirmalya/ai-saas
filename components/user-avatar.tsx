import React from "react";
import { useUser } from "@clerk/nextjs";

export function UserAvatar() {
  const { user } = useUser();

  return <div>UserAvatar</div>;
}
