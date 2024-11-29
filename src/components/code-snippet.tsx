import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeSnippetProps {
  title: string;
  language: string;
  code: string;
  description: string;
}

export function CodeSnippet({ title, language, code, description }: CodeSnippetProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Card className="my-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="h-8 w-8"
          title="Copy code"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <pre className={cn(
          'rounded-lg bg-muted p-4 overflow-x-auto',
          language && `language-${language}`
        )}>
          <code>{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
