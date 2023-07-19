import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
    </div>
  );
}

export default Navbar;
