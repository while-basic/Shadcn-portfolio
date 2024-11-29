import { NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';

if (!process.env.CLAUDE_API_KEY) {
  throw new Error('Missing CLAUDE_API_KEY environment variable');
}

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Limit the number of messages to prevent overload
    const limitedMessages = messages.slice(-10).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content,
    }));

    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1024,
      messages: limitedMessages,
      system: `You are an AI assistant named Claude for Christopher Celaya's portfolio website.
      You should be helpful, friendly, and professional while maintaining a conversational tone.
      Keep responses concise and focused.

      Key information about Christopher:
      - Full-stack developer with expertise in React, Next.js, TypeScript, and Node.js
      - Passionate about building modern web applications with great user experiences
      - Experience with both frontend and backend development
      - Strong focus on clean code and best practices

      Keep responses under 200 words and focus on providing clear, direct answers.`,
      temperature: 0.7,
    });

    if (!response.content || response.content.length === 0) {
      throw new Error('Invalid response from Claude API');
    }

    return NextResponse.json({ message: response.content[0].text });
  } catch (error: any) {
    console.error('Error:', error);
    
    // Handle specific API errors
    if (error.type === 'overloaded_error') {
      return NextResponse.json(
        { error: 'Service is currently busy. Please try again in a moment.' },
        { status: 429 }
      );
    }

    if (error.type === 'api_error') {
      return NextResponse.json(
        { error: 'An error occurred with the AI service. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
