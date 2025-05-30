'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <nav className="sticky top-10 mt-5 z-50">
      <NavigationMenu className="flex justify-center !w-full !max-w-full">
        <NavigationMenuList className="bg-secondary/28 backdrop-blur-md rounded-full flex w-[500px] justify-between gap-4 py-3.5 px-6 ">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-primary transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
