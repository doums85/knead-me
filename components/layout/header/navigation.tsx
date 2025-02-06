"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import menu from "./menu";
import { cn } from "@/lib";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col mt-16 md:mt-0 md:flex-row gap-8">
      {menu?.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "text-2xl md:text-base uppercase md:capitalize font-semibold md:font-normal",
                "hover:text-primary hover:line-through hover:italic",
                isActive && "text-primary md:font-semibold line-through italic"
              )}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
