import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { themeColors } from "@/lib/theme-colors";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const techStacks = [
  {
    name: "HTML",
    color: "orange",
    icon: "html.png",
  },
  {
    name: "CSS",
    color: "blue",
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
    name: "Supabase",
    color: "emerald",
    icon: "supabase.png",
  },
  {
    name: "Prisma",
    color: "violet",
    icon: "prisma.png",
  },
] as const;

export default function Home() {
  return (
    <Section>
      <div className="space-y-6">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row-reverse">
          <div className="flex-1 flex justify-center items-center relative overflow-visible">
            <div className="w-52 h-52 md:w-72 md:h-72 rounded-full border-8 border-double  border-purple-400 animate-spin bg-slate-950 border-l-0 border-r-0  rotate-12 p-1 shadow-[0_0_10px_#000000,0_0_80px_#650192,0_0_40px_#000000] ">
              <div className="w-full h-full rounded-full border-8 border-double p-2 border-purple-600 border-t-2 border-b-2 rotate-45">
                <div className="w-full h-full rounded-full border-8 border-white border-t-0 border-b-0 rotate-6" />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 overflow-hidden rounded-full w-40 h-40 md:w-60 md:h-60 mx-auto">
              <Image
                className="h-40 md:h-60 object-cover"
                src={"/assets/4.png"}
                width={500}
                height={200}
                alt="profile_photos"
              />
            </div>
          </div>
          <div className="text-center mt-10 md:mt-0 md:text-left flex-1 flex flex-col justify-center relative overflow-visible">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Hi, I’m Rafi Akmal{" "}
              <div className="animate-bounce inline-block">👋</div>
            </h1>
            <p className="mt-2 text-muted-foreground tracking-tighter">
              I’m a <span className="font-bold">Full Stack Developer</span>{" "}
              based in
              <span className="font-bold">
                {" "}
                Semarang, Central Java, Indonesia{" "}
              </span>
              . I have a passion for creating beautiful and functional web
              applications.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              {techStacks.map((stack, index) => {
                const style = themeColors[stack.color];
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
                    <span className="flex items-center justify-center w-5 h-5 bg-white/80 dark:bg-black/40 rounded-full overflow-hidden">
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
          </div>
        </div>

        <div className="flex gap-2">
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
        </div>
      </div>
    </Section>
  );
}
