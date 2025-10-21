import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Diamond, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const placeholderImage = PlaceHolderImages.find(img => img.id === 'hero-background')!;

export default function Home() {
  const features = [
    {
      title: 'The AGT Book',
      description: 'Explore the "Book of Live-On-Earth Forever" and discover the future of humanity.',
      href: '/book',
      icon: <BookOpen className="h-8 w-8 text-accent" />,
    },
    {
      title: 'Buy GTPS Tokens',
      description: 'Acquire your stake in the future. Purchase GTPS tokens and join the revolution.',
      href: '/buy',
      icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    },
    {
      title: 'Claim Your AGT',
      description: 'If you hold enough GTPS, follow the instructions to claim your AGT.',
      href: '/claim',
      icon: <Diamond className="h-8 w-8 text-accent" />,
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src={placeholderImage.imageUrl}
          alt={placeholderImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={placeholderImage.imageHint}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-shadow-lg">
            Live On Earth Forever
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
            Discover Advanced GeneticSynthesis Technology (AGT) and unlock a life of up to 8000 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/book">
                Read The Book <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/buy">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card border-border/50 hover:border-accent/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {feature.icon}
                  <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button asChild variant="link" className="text-accent p-0">
                    <Link href={feature.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
