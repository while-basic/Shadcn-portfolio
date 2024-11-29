'use client';

import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import TextReveal from '@/components/motion/text-reveal';
import Link from 'next/link';
import { Project } from '@/types/project';

interface HeaderProps {
  metadata: Project;
}

const Header = (props: HeaderProps) => {
  const {
    metadata: { title, description, website, github }
  } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold md:text-4xl">
          <TextReveal>{title}</TextReveal>
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          <TextReveal>{description}</TextReveal>
        </p>
      </div>
      <div className="flex gap-2">
        {website && (
          <Button variant="outline" size="sm" asChild>
            <Link href={website} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              Visit Website
            </Link>
          </Button>
        )}
        {github && (
          <Button variant="outline" size="sm" asChild>
            <Link href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              View Source
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
export default Header;
