import { NextResponse } from 'next/server';
import { generateProjectImage } from '@/lib/replicate';

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();
    console.log('Received request with:', { title, description });

    if (!title || !description) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    console.log('Generating image with Replicate...');
    const imageUrl = await generateProjectImage(title, description);
    console.log('Generated image URL:', imageUrl);

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error('Detailed error in generate-image route:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(
      { error: error.message || 'Failed to generate image' },
      { status: 500 }
    );
  }
}
