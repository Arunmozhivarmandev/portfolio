'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import gsap from 'gsap';
import ContactPopup from '../home/contactForm';
import { Toggle } from './themetoggle';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

export default function Header() {
  const scrollToSection = (target: string) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: target,
      smooth: 1.5, 
      ease: 'expoScale(0.5,7,none)', 
    });
  };
  return (
    <nav className="sticky top-10 z-50">
      <NavigationMenu className="flex !w-full !max-w-full justify-center">
        <NavigationMenuList className="bg-secondary/28 shadow-sm dark:shadow-none flex w-[500px] justify-between gap-4 rounded-full px-6 py-3.5 backdrop-blur-md">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <span
                onClick={() => scrollToSection(item.href)}
                className="text-primary cursor-pointer text-sm font-medium transition-colors hover:text-black dark:hover:text-white"
              >
                {item.label}
              </span>
            </NavigationMenuItem>
          ))}
          <Toggle />
        </NavigationMenuList>
        <ContactPopup />
      </NavigationMenu>
    </nav>
  );
}
