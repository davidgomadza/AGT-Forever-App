import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const bookContent = {
  overview: "LIVE ON EARTH FOREVER GET YOUR LIFE EXTENDED UP TO 8000 YEARS WITHOUT DYING, THIS IS NOT A JOKE, IT IS BASED ON SCIENCE. WE ARE SELLING THE CURE FOR DEATH. THE AGT IS THE BEST TECHNOLOGY EVER BUILT ON EARTH, SO LIVE THE BEST LIFE EVER. The technology is called Advanced GeneticSynthesis Technology AGT. It involves using multiple technologies to reverse aging, and cure all diseases including cancer, HIV, diabetes, and others. We use a combination of gene editing, cellular reprogramming, and advanced drug delivery systems to rejuvenate the body at a cellular level.",
  benefits: [
    "Removes menopause in women and allows them to have children at any age.",
    "Cures all known human diseases including cancer, kidney condition, diabetes, and all others.",
    "Increases human intelligence (IQ) by a factor of 10.",
    "Reverses aging and makes you look and feel younger.",
    "Increases physical strength and stamina.",
    "Enhances sensory perception (sight, hearing, etc.).",
    "Boosts the immune system to be resistant to future diseases.",
    "Improves mental health and eliminates conditions like depression and anxiety.",
    "Extends lifespan up to 8000 years.",
    "Provides a perfect, healthy, and youthful body.",
  ],
  incomeSources: [
    "Global Transaction Payment Solution (GTPS)",
    "Bitcoin (BTC)",
    "Bitcoin AGT (BTCAGT)",
    "Bitcoin YT (BTCYT)",
  ],
  gtpsDetails: "The GTPS is a cryptocurrency built on the Optimism blockchain. It is the primary token for accessing AGT services. Total Supply: 90,000,000 GTPS. Optimism Contract: 0x9427A2a738AffBc5880F0646b5251069c022e525.",
  howItWorks: "The AGT works by targeting the fundamental causes of aging and disease. It uses CRISPR-based gene editing to correct genetic defects, cellular reprogramming to turn old cells into young, healthy cells, and nanotechnology for precise drug delivery. The process is safe, effective, and has been tested rigorously.",
  claimProcess: "To claim your 8000 AGT, you need to hold at least 500 GTPS tokens in your wallet. The AGT tokens represent your right to the life extension treatment. Once you have the required GTPS, you can follow the claim instructions to receive your AGT.",
  repositories: [
      { name: "AGT-Forever", url: "https://github.com/davidgomadza/AGT-Forever", description: "Next.js starter for forever tech." },
      { name: "AGT-Platform", url: "https://github.com/davidgomadza/AGT-Platform", description: "Payment platform code." },
      { name: "84", url: "https://github.com/davidgomadza/84", description: "84 subsets for AGT cures." },
      { name: "AGTagt", url: "https://github.com/davidgomadza/AGTagt", description: "AGT core." },
      { name: "Studio", url: "https://github.com/davidgomadza/studio", description: "Development studio." },
  ]
};

export default function BookPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">The AGT: Book of Live-On-Earth Forever</h1>
        <p className="mt-4 text-lg text-muted-foreground">Your guide to understanding the future of humanity.</p>
      </div>

      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-headline">Overview</AccordionTrigger>
          <AccordionContent className="text-base text-foreground/80 leading-relaxed">
            {bookContent.overview}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-headline">Benefits of AGT</AccordionTrigger>
          <AccordionContent>
            <ul className="list-decimal list-inside space-y-2 text-base text-foreground/80">
              {bookContent.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-headline">Sources of Income & GTPS Details</AccordionTrigger>
          <AccordionContent className="space-y-4 text-base text-foreground/80">
            <p>The project is supported by several stores of value:</p>
            <ul className="list-disc list-inside space-y-2">
              {bookContent.incomeSources.map((source, index) => <li key={index}>{source}</li>)}
            </ul>
            <p className="pt-4 border-t border-border mt-4">{bookContent.gtpsDetails}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-headline">How It Works</AccordionTrigger>
          <AccordionContent className="text-base text-foreground/80 leading-relaxed">
            {bookContent.howItWorks}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-headline">Claim Process</AccordionTrigger>
          <AccordionContent className="text-base text-foreground/80 leading-relaxed">
            {bookContent.claimProcess}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-xl font-headline">GitHub Repositories</AccordionTrigger>
          <AccordionContent>
             <div className="space-y-3 text-base text-foreground/80">
                {bookContent.repositories.map((repo) => (
                    <div key={repo.name} className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold">{repo.name}</p>
                            <p className="text-sm text-muted-foreground">{repo.description}</p>
                        </div>
                        <Link href={repo.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 text-sm">
                            View <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
