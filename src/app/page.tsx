import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <Section>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Hi, I’m Rafi Akmal 👋
          </h1>
          <p className="mt-2 text-muted-foreground">
            Full Stack Developer focused on performance and rendering
            strategies.
          </p>
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
