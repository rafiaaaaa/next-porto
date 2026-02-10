"use client";

import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { themeColors } from "@/lib/theme-colors";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const techStacks = [
  {
    name: "HTML",
    color: "orange",
    icon: "html.png",
  },
  {
    name: "CSS",
    color: "violet",
    icon: "css.png",
  },
  {
    name: "JavaScript",
    color: "yellow",
    icon: "js.png",
  },
  {
    name: "PHP",
    color: "indigo",
    icon: "php.png",
  },
  {
    name: "Laravel",
    color: "red",
    icon: "laravel.png",
  },
  {
    name: "MySQL",
    color: "sky",
    icon: "mysql.png",
  },
  {
    name: "Tailwind CSS",
    color: "cyan",
    icon: "tailwind.png",
  },
  {
    name: "Node.js",
    color: "green",
    icon: "nodejs.png",
  },
  {
    name: "Express",
    color: "zinc",
    icon: "express.png",
  },
  {
    name: "React",
    color: "cyan",
    icon: "react.png",
  },
  {
    name: "Next.js",
    color: "zincDark",
    icon: "nextjs.png",
  },
  {
    name: "MongoDB",
    color: "emerald",
    icon: "mongodb.png",
  },
  {
    name: "PostgreSQL",
    color: "blue",
    icon: "postgresql.png",
  },
];

const ringStyles = [
  {
    name: "violet",
    outer: "border-purple-300 border-l-0 border-r-0 bg-slate-950",
    middle: "border-purple-600 border-t-2 border-b-2",
    inner: "border-white border-t-0 border-b-0",
    shadow:
      "shadow-[0_0_10px_#000000,0_0_80px_#650192,0_0_40px_#000000] dark:shadow-[0_0_20px_#ffffff,0_0_90px_#8f2cff]",
  },

  {
    name: "blue",
    outer: "border-sky-300 border-l-0 border-r-0 bg-slate-950",
    middle: "border-sky-600 border-t-2 border-b-2",
    inner: "border-white border-t-0 border-b-0",
    shadow:
      "shadow-[0_0_80px_rgba(14,165,233,0.6),0_0_40px_#000000] dark:shadow-[0_0_18px_#ffffff,0_0_90px_#0ea5e9]",
  },
  {
    name: "orange",
    outer: "border-orange-300 border-l-0 border-r-0 bg-slate-950",
    middle: "border-orange-600 border-t-2 border-b-2",
    inner: "border-white border-t-0 border-b-0",
    shadow:
      "shadow-[0_0_80px_rgba(249,115,22,0.6),0_0_40px_#000000] dark:shadow-[0_0_18px_#ffffff,0_0_90px_#f3ebdd]",
  },
  {
    name: "emerald",
    outer: "border-emerald-300 border-l-0 border-r-0 bg-slate-950",
    middle: "border-emerald-600 border-t-2 border-b-2",
    inner: "border-white border-t-0 border-b-0",
    shadow:
      "shadow-[0_0_80px_rgba(16,185,129,0.6),0_0_40px_#000000] dark:shadow-[0_0_18px_#ffffff,0_0_90px_#10b981]",
  },
  {
    name: "red",
    outer: "border-red-300 border-l-0 border-r-0 bg-slate-950",
    middle: "border-red-600 border-t-2 border-b-2",
    inner: "border-white border-t-0 border-b-0",
    shadow:
      "shadow-[0_0_80px_rgba(239,68,68,0.6),0_0_40px_#000000] dark:shadow-[0_0_18px_#ffffff,0_0_90px_#efbebf]",
  },
  {
    name: "cyan",
    outer: "border-cyan-300 border-l-0 border-r-0 bg-slate-950",
    middle: "border-cyan-600 border-t-2 border-b-2",
    inner: "border-white border-t-0 border-b-0",
    shadow:
      "shadow-[0_0_80px_rgba(34,211,238,0.6),0_0_40px_#000000] dark:shadow-[0_0_18px_#ffffff,0_0_90px_#22d3ee]",
  },

  {
    name: "pink",
    outer: "border-pink-300 border-l-0 border-r-0 bg-slate-950",
    middle: "border-pink-600 border-t-2 border-b-2",
    inner: "border-white border-t-0 border-b-0",
    shadow:
      "shadow-[0_0_80px_rgba(236,72,153,0.6),0_0_40px_#000000] dark:shadow-[0_0_18px_#ffffff,0_0_90px_#ec4899]",
  },

  {
    name: "amber",
    outer: "border-amber-300 border-l-0 border-r-0 bg-slate-950",
    middle: "border-amber-600 border-t-2 border-b-2",
    inner: "border-white border-t-0 border-b-0",
    shadow:
      "shadow-[0_0_80px_rgba(251,191,36,0.6),0_0_40px_#000000] dark:shadow-[0_0_18px_#ffffff,0_0_90px_#f8f2d3]",
  },
];

export default function Home() {
  const [ring, setRing] = useState(0);
  const handleImageProfileClick = () => {
    if (ring === ringStyles.length - 1) {
      setRing(0);
      return;
    }
    setRing((prev) => prev + 1);
  };

  return (
    <Section className="md:min-h-[90vh] md:flex items-center">
      <div className="space-y-6">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row-reverse">
          <div
            onClick={handleImageProfileClick}
            className="flex-1 flex justify-center items-center relative overflow-visible active:scale-110 cursor-pointer transition-all duration-50"
          >
            <div
              className={cn(
                "w-56 h-56 md:w-70 md:h-70 rounded-full border-8 bg-slate-950",
                "animate-spin rotate-12 transition-all duration-1000",
                ringStyles[ring].outer,
                ringStyles[ring].shadow,
              )}
            >
              <div
                className={cn(
                  "w-full h-full rounded-full border-8 rotate-45 transition-all duration-1000",
                  ringStyles[ring].middle,
                )}
              >
                <div
                  className={cn(
                    "w-full h-full rounded-full border-8 rotate-6 transition-all duration-1000",
                    ringStyles[ring].inner,
                  )}
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 overflow-hidden rounded-full w-52 h-52 md:w-64 md:h-64 mx-auto flex items-center justify-center">
              <Image
                className="h-40 md:h-60 object-cover scale-150 md:scale-125"
                src={"/assets/profile_far.jpg"}
                width={500}
                height={500}
                alt="profile_photos"
                loading="eager"
              />
            </div>
          </div>
          <div className="text-center mt-8 md:mt-0 md:text-left flex-1 flex flex-col justify-center relative space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Hi, I’m Rafi Akmal{" "}
              <div className="animate-bounce inline-block">👋</div>
            </h1>
            <p className="text-muted-foreground tracking-tighter">
              I’m a <span className="font-bold">Full Stack Developer</span>{" "}
              based in
              <span className="font-bold">
                {" "}
                Semarang, Central Java, Indonesia{" "}
              </span>
              . I have a passion for creating beautiful and functional web
              applications.
            </p>
            <div className="hidden md:flex flex-wrap gap-2 justify-center md:justify-start">
              {techStacks.map((stack, index) => {
                const style =
                  themeColors[stack.color as keyof typeof themeColors];
                return (
                  <Badge
                    key={index}
                    className={cn(
                      `px-3 shadow-xl text-white cursor-pointer transition-all duration-75 hover:scale-110 tracking-wide flex items-center justify-center gap-2 md:py-1`,
                      style.bg,
                      style.text,
                      style.shadow,
                    )}
                  >
                    <span className="flex items-center justify-center w-5 h-5 bg-white/80 rounded-full overflow-hidden">
                      <Image
                        className="block object-contain"
                        alt={stack.name}
                        src={`/assets/tech-stacks/${stack.icon}`}
                        width={16}
                        height={16}
                      />
                    </span>
                    <span className="font-semibold">{stack.name}</span>
                  </Badge>
                );
              })}
            </div>
            <div className="relative">
              <div className="carousel md:hidden">
                <div className="track w-max">
                  <div className="flex gap-4">
                    {[...techStacks, ...techStacks].map((stack, index) => {
                      return (
                        <div key={index} className="flex items-center">
                          <Image
                            className="block object-contain w-auto p-2 drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_1.5px_rgba(255,255,255,1)]"
                            alt={stack.name}
                            src={`/assets/tech-stacks/${stack.icon}`}
                            width={48}
                            height={48}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-center md:justify-start md:mt-5">
              <Link
                href={"https://www.linkedin.com/in/rafia24"}
                target="_blank"
              >
                <Button
                  variant={"default"}
                  className="bg-sky-600 text-white p-2 shadow-lg shadow-sky-400/30 font-bold md:font-semibold hover:shadow-sky-400/70 hover:scale-105 cursor-pointer text-xs md:text-sm"
                >
                  <Image
                    src={"/assets/linkedin-white.png"}
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                  Connect on LinkedIn
                </Button>
              </Link>
              <a href="/assets/cv/cv_rafi_english.pdf" download>
                <Button className="bg-emerald-500 text-xs md:text-sm font-bold md:font-semibold text-white shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/70 hover:scale-105 cursor-pointer">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex gap-2">
          <Badge>Next.js</Badge>
          <Badge variant="outline">SSG</Badge>
          <Badge variant="outline">SSR</Badge>
          <Badge variant="outline">ISR</Badge>
          <Badge variant="outline">CSR</Badge>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              Showcase of real-world Next.js applications.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rendering Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              Clear explanation of SSG, SSR, CSR, and ISR usage.
            </CardContent>
          </Card>
        </div> */}
      </div>
    </Section>
  );
}
