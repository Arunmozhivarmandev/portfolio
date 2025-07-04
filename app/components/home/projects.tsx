'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A dynamic e-commerce frontend solution with inventory display, cart functionality, and a responsive user interface.',
    image: '/dekobuddy.png',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'React Bootstrap'],
    liveUrl: 'https://dekobuddyrugs.com',
    place: 'Zinavo Pvt Ltd',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description:
      'A responsive e-commerce frontend with admin panel for product management and secure payment integration.',
    image: '/rebuyit2.png',
    technologies: ['Next.js', 'Sass', 'Redux', 'Razorpay'],
    liveUrl: 'https://rebuyit.in',
    place: 'Zinavo Pvt Ltd',
  },
  {
    id: 3,
    title: 'Software & Services Marketplace',
    description:
      'A marketplace platform for software and services, with vendor and customer dashboards for seamless management and purchases.',
    image: '/siliconserv.png',
    technologies: ['Next.js', 'Tailwind', 'Redux', 'Typescript'],
    place: 'Zinavo Pvt Ltd',
  },
  {
    id: 4,
    title: 'Aerospace News & Media Portal',
    description:
      'A responsive web platform for subscribing to magazines and accessing the latest news in the aerospace and defence industry.',
    image: '/aeromagasia.png',
    technologies: ['Next.js', 'Typescript', 'Zustand', 'Razorpay'],
    place: 'Zinavo Pvt Ltd',
  },
];

export default function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 80,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse',
              },
            },
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section
      ref={containerRef}
      id={'projects'}
      className="from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10 min-h-screen bg-gradient-to-br px-4 py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 ref={titleRef} className="text-primary mb-2 text-3xl font-bold">
            My Projects
          </h2>
          <p ref={subtitleRef} className="mx-auto leading-relaxed">
            A collection of projects that showcase my skills in modern web
            development, from full-stack applications to creative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => addToRefs(el, index)}
              className={` ${index % 2 === 1 ? 'lg:mt-12' : ''}`}
            >
              <Card className="bg-card/50 hover:bg-card/80 dark:bg-card/30 dark:hover:bg-card/50 group overflow-hidden border-0 py-0 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="h-75 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {project.liveUrl && (
                  <div className="absolute right-4 top-4 flex translate-y-2 transform gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 text-black shadow-lg backdrop-blur-sm hover:bg-white"
                      asChild
                    >
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}

                <CardContent className="p-6">
                  <h3 className="group-hover:text-primary mb-3 text-2xl font-bold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Badge className="border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                    {project.place}
                  </Badge>
                  <p className="text-foreground my-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-muted hover:bg-muted dark:bg-muted/30 dark:hover:bg-muted/50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* <Button
                    className="group/btn mx-auto w-[200px] flex-1 text-center transition-all duration-300 hover:shadow-lg"
                    asChild
                  >
                    <Link href={project.liveUrl} target="_blank">
                      <span className="transition-all duration-300 group-hover/btn:mr-2">
                        View Live
                      </span>
                      <ExternalLink className="h-4 w-4 opacity-0 transition-all duration-300 group-hover/btn:opacity-100" />
                    </Link>
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
