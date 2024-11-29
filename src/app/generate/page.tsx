import { ImageGenerator } from '@/components/sections/gallery/image-generator';

export default function GeneratePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">AI Image Generator</h1>
        <p className="text-muted-foreground mb-8">
          Generate unique project visualizations using AI. Enter a title and description
          to create professional, modern images for your projects.
        </p>
        <ImageGenerator />
      </div>
    </div>
  );
}
