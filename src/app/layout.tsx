import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Rafi Akmal | Full Stack Developer",
  description: "Next.js Portfolio showcasing SSG, SSR, ISR, and CSR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen max-h-screen bg-background text-foreground antialiased max-w-[100vw] overflow-x-hidden overflow-y-hidden transition-all">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
