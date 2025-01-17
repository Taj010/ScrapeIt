
import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from 'lucide-react';
import Link from "next/link"; // Changed from lucide-react Link to Next.js Link
import React from "react";

interface LogoProps {
  fontSize?: string;
  IconSize?: number;
}

function Logo({ fontSize = "2x1", IconSize = 20 }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-2x1 font-extrabold flex items-center gap-2",
        fontSize
      )}
    >
      <span className="rounded-xl bg-gradient-to-r from-[#E11D48] to-[#D61E44] p-2">
        <SquareDashedMousePointer size={IconSize} className="stroke-white" />
      </span>
      <div>
        <span className="bg-gradient-to-r from-[#E11D48] to-[#D61E44] bg-clip-text text-transparent">
          Scrape
        </span>
        <span className="text-stone-700 dark:text-stone-300">
          IT
        </span>
      </div>
    </Link>
  );
}

export default Logo;