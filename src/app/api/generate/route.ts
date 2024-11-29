import { NextResponse } from 'next/server';
import { generateProjectImage } from '@/lib/replicate';

export async function POST(req: Request) {
  try {
    const { title, description } = await req.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const imageUrl = await generateProjectImage(title, description);

    return NextResponse.json({ imageUrl }, { status: 200 });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}
