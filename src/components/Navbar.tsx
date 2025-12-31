import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold">
          Rafi Akmal
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Button asChild size="sm">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
