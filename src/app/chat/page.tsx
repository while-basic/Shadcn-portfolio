'use client';

import { Chat } from '@/components/chat';
import { Breadcrumb } from '@/components/breadcrumb';

export default function ChatPage() {
  const breadcrumbItems = [
    { label: 'Chat' }
  ];

  return (
    <main className="flex-1">
      <div className="container py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          
          <h1 className="mb-8 text-3xl font-bold">Chat with Me</h1>
          <Chat />
        </div>
      </div>
    </main>
  );
}
