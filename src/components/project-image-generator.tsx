'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';

interface ProjectImageGeneratorProps {
  onImageGenerated?: (imageUrl: string) => void;
  defaultTitle?: string;
  defaultDescription?: string;
}

export function ProjectImageGenerator({
  onImageGenerated,
  defaultTitle = '',
  defaultDescription = ''
}: ProjectImageGeneratorProps) {
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    setTitle(defaultTitle);
    setDescription(defaultDescription);
  }, [defaultTitle, defaultDescription]);

  const generateImage = async () => {
    if (!title || !description) {
      toast.error('Please provide both title and description');
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image');
      }

      setGeneratedImageUrl(data.imageUrl);
      onImageGenerated?.(data.imageUrl);
      toast.success('Image generated successfully!');
    } catch (error) {
      console.error('Error generating image:', {
        message: error.message,
        cause: error.cause,
      });
      toast.error(`Failed to generate image: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Project Image</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isGenerating}
          />
        </div>
        <div className="space-y-2">
          <Textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isGenerating}
          />
        </div>
        {generatedImageUrl && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={generatedImageUrl}
              alt="Generated project image"
              fill
              className="object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={generateImage}
          disabled={isGenerating || !title || !description}
          className="w-full"
        >
          {isGenerating ? 'Generating...' : 'Generate Image'}
        </Button>
      </CardFooter>
    </Card>
  );
}
