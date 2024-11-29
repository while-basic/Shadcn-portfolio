'use client';

import { Chat } from '@/components/chat';

export default function ChatPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">Chat with Me</h1>
        <Chat />
      </div>
    </div>
  );
}
