"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";

export default function PorModal() {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            Upgrade to Genius Pro
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
