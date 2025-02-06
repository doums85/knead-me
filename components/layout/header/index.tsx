import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Briefcase, Menu, User } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared";
import { assertValue } from "@/lib";
import Navigation from "./navigation";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";

const appName = assertValue(
  process.env.NEXT_PUBLIC_APP_NAME,
  "NEXT_PUBLIC_APP_NAME is not defined"
);

const socialsLinks = [
  {
    name: "Instagram",
    href: "/",
  },
  {
    name: "Facebook",
    href: "/",
  },
  {
    name: "X",
    href: "/",
  },
  {
    name: "Tiktok",
    href: "/",
  },
];

export default function Header() {
  return (
    <header className="relative isolate z-10 bg-white py-4 shadow">
      <Container as="nav" className="flex justify-between items-center">
        <Link href="/" className="-m-1.5 p-1.5 flex">
          <span className="sr-only">Your Company</span>
          <span className="text-2xl font-lobster font-bold bg-gradient-to-r from-emerald-200 to-emerald-600 bg-clip-text text-transparent">
            {appName}
          </span>
          {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
        </Link>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="flex gap-4">
          <Link href={"/devenir-pro"} className="flex flex-col justify-center items-center gap-0.5">
            <Briefcase fill="black" size={24} />
            <span className="hidden md:block text-xs font-semibold">Devenir pro</span>
          </Link>

          <SignedOut>
            <Link href={"/sign-in"} className="flex flex-col justify-center items-center gap-0.5">
              <User fill="black" size={24} />
              <span className="hidden md:block text-xs font-semibold">Connexion</span>
            </Link>
          </SignedOut>

          <SignedIn>
            <div className="flex flex-col justify-center items-center gap-0.5">
              <UserButton userProfileMode="modal" />
              <span className="hidden md:block text-xs font-semibold">Compte</span>
            </div>
          </SignedIn>

          <Sheet >
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-screen">
              <SheetHeader>
                <SheetTitle className="text-left text-4xl  font-lobster font-bold bg-gradient-to-r from-emerald-200 to-emerald-600 bg-clip-text text-transparent">
                  {appName}
                </SheetTitle>
              </SheetHeader>
              <Navigation />

              <SheetFooter className="absolute bottom-4">
                <ul className="flex flex-wrap gap-1.5">
                  {socialsLinks.map((link) => (
                    <li
                      key={link.name}
                      className="after:content-['•'] after:ml-2 last:after:content-['']"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
