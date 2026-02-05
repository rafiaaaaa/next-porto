"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  return (
    <header className="border-b sticky top-0 left-0 w-full z-99 bg-background shadow-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        <Link href="/" className="font-semibold">
          <b>&lt;Rafia /&gt;</b>
        </Link>

        {/* Desktop Menu View */}
        <nav className="md:flex items-center gap-6 hidden">
          {links.map((link) => {
            return (
              <Link href={link.href} key={link.title}>
                {link.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu VIew*/}
        <Button
          className="flex items-center gap-4 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="cursor-pointer" />
        </Button>

        {/* Mobile Drawer */}
        {open && (
          <>
            <nav
              ref={drawerRef}
              className="fixed md:hidden inset-y-0 right-0 w-full  sm:w-1/2 bg-slate-100 shadow-2xl z-50 flex flex-col gap-2"
            >
              <div className="flex flex-col space-y-2">
                <div className="bg-slate-200 w-full">
                  <div className="flex justify-between items-center px-6 py-2">
                    <Link href={""} className="font-bold">
                      <b>&lt;Rafia /&gt;</b>
                    </Link>

                    <Button
                      className="ml-auto cursor-pointer"
                      onClick={() => setOpen(false)}
                      variant={"link"}
                    >
                      <X />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-1 tracking-wider font-thin text-xl sm:text-lg upper p-2 space-y-5">
                  {links.map((link) => {
                    return (
                      <Link
                        className="mx-auto w-full text-center rounded-md text-md"
                        href={link.href}
                        key={link.title}
                      >
                        <span className="border-b-2">{link.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
