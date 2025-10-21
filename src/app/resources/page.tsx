import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const githubRepos = [
  { name: "AGT-Forever", description: "Next.js starter for forever tech", url: "https://github.com/davidgomadza/AGT-Forever" },
  { name: "AGT-Platform", description: "Payment platform code", url: "https://github.com/davidgomadza/AGT-Platform" },
  { name: "84", description: "84 subsets for AGT cures", url: "https://github.com/davidgomadza/84" },
  { name: "AGTagt", description: "AGT core", url: "https://github.com/davidgomadza/AGTagt" },
  { name: "Studio", description: "Development studio", url: "https://github.com/davidgomadza/studio" },
];

const externalLinks = [
    { name: "Bitcoin AYT", url: "https://bitcoinayt.world" },
    { name: "Two Future", url: "https://twofuture.world" },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">Resources</h1>
        <p className="mt-4 text-lg text-muted-foreground">Explore the codebases and related projects.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-1">
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Github className="h-6 w-6"/>
                    <CardTitle className="font-headline text-2xl">GitHub Repositories</CardTitle>
                </div>
                <CardDescription>The source code and related projects for AGT.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {githubRepos.map((repo) => (
                    <div key={repo.name} className="flex items-center justify-between p-3 rounded-lg bg-card-foreground/5">
                         <div>
                            <p className="font-semibold">{repo.name}</p>
                            <p className="text-sm text-muted-foreground">{repo.description}</p>
                        </div>
                         <Link href={repo.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1.5 text-sm transition-colors">
                            View on GitHub <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <ExternalLink className="h-6 w-6"/>
                    <CardTitle className="font-headline text-2xl">External Links</CardTitle>
                </div>
                <CardDescription>Other relevant websites and platforms.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {externalLinks.map((link) => (
                    <div key={link.name} className="flex items-center justify-between p-3 rounded-lg bg-card-foreground/5">
                        <p className="font-semibold">{link.name}</p>
                         <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1.5 text-sm transition-colors">
                            Visit Site <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
