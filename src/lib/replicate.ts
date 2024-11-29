import Replicate from 'replicate';

if (!process.env.REPLICATE_API_KEY) {
  throw new Error('REPLICATE_API_KEY is not defined in environment variables');
}

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export async function generateProjectImage(
  projectTitle: string,
  projectDescription: string
): Promise<string> {
  try {
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: `A professional, modern visualization of ${projectTitle}. ${projectDescription}. Highly detailed, photorealistic, 4k, trending on artstation.`,
          negative_prompt: "text, watermark, low quality, blurry, distorted",
          width: 1024,
          height: 1024,
          num_outputs: 1,
          scheduler: "K_EULER",
          num_inference_steps: 50,
          guidance_scale: 7.5,
        }
      }
    );

    // Replicate returns an array of image URLs
    return Array.isArray(output) ? output[0] : output;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}
