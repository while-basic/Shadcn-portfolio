'use client';

import { MainNav } from '@/components/main-nav';
import ModeToggle from '@/components/mode-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
