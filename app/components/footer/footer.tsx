'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ];

  const scrollToSection = (target: string) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: target,
      smooth: 1.5,
      ease: 'expoScale(0.5,7,none)',
    });
  };
  return (
    <footer className="bg-background border-border border-t">
      <div className="container mx-auto px-4">
        {/* Top section with logo, contact info, and social links */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
          {/* Logo/Brand */}
          <div className="text-foreground font-mono text-2xl font-bold">
            <div className="text-lg dark:text-white">
              Contact <span className="text-primary">M</span>e
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <Link
                href={'tel:+919080371821'}
                className="hover:text-primary bg:text-white transition-all duration-300"
              >
                +91 9080371821
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="mailto:arunmozhivarman.dev@gmail.com"
                className="hover:text-primary bg:text-white transition-all duration-300"
              >
                arunmozhivarman.dev@gmail.com
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/Arunmozhivarmandev/"
              className="hover:text-primary dark:hover:text-primary dark:text-white transition-all duration-300"
              aria-label="GitHub"
              target="_blank"
            >
              <Github className="h-5 w-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/arunmozhivarman-m-06414a263/"
              className="hover:text-primary dark:hover:text-primary dark:text-white transition-all duration-300"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom section with navigation and attribution */}
        <div className="border-border flex flex-col items-start justify-between gap-4 border-t py-6 md:flex-row md:items-center">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            {navItems.map((item) => (
              <span
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className=" cursor-pointer transition-colors hover:text-primary dark:hover:text-white"
              >
                {item.label}
              </span>
            ))}
          </nav>

          {/* Attribution */}
          <div className="flex items-center gap-1 text-xl font-bold dark:text-white">
            <span>Arunmozhivarman</span>
            <span className="text-purple-500">M</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
