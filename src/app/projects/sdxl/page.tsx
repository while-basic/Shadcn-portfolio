import { SDXLGenerator } from '@/components/sdxl-generator';

export default function SDXLPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">SDXL Image Generator</h1>
      <p className="text-gray-600 mb-8">
        Generate high-quality images using Stability AI&apos;s SDXL model through the Replicate API.
        Simply enter a text description, and watch as AI brings your ideas to life.
      </p>
      <SDXLGenerator />
    </div>
  );
}
