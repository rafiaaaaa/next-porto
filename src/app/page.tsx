import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <Section>
      <div className="space-y-6">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row-reverse">
          <div className="flex-1 flex justify-center items-center relative">
            <div className="w-52 h-52 md:w-72 md:h-72 rounded-full border-4 p-2 border-purple-950 border-l-0 border-r-0 animate-spin rotate-12">
              <div className="w-full h-full rounded-full border-2 p-2 border-slate-950 border-t-4 border-b-4 rotate-45">
                <div className="w-full h-full rounded-full border-2 border-purple-950 border-t-0 border-b-0 rotate-6" />
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
          <div className="text-center md:text-left flex-1 flex flex-col justify-center relative overflow-visible">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Hi, I’m Rafi Akmal 👋
            </h1>
            <p className="mt-2 text-muted-foreground">
              Full Stack Developer focused on performance and rendering
              strategies.
            </p>
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
