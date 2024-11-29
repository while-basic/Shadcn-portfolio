'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  // { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/gallery", label: "Gallery" },
  // { href: "/audio", label: "Audio" },
  // { href: "/blog", label: "Blog" },
  { href: "/chat", label: "Chat" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "w-full transition-all duration-200 relative",
                    "hover:pl-6",
                    pathname === item.href 
                      ? "font-medium text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <Link 
          href="/" 
          className="mr-6 flex items-center space-x-2 font-bold transition-all duration-200 hover:text-primary hover:scale-105"
        >
          <span>Christopher Celaya</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative transition-all duration-200 hover:text-primary group",
                "after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 group-hover:after:scale-x-100",
                pathname === item.href 
                  ? "text-primary after:scale-x-100" 
                  : "text-muted-foreground hover:-translate-y-[2px]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
