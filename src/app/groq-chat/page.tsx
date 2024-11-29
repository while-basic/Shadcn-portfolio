'use client';

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Remove Groq SDK import for now
// import { Groq } from 'groq-sdk';

const GroqChat = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = useCallback(async () => {
    if (!input.trim()) return;

    // Add user message to conversation
    const updatedMessages = [...messages, { role: 'user', content: input }];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate API call (replace with actual Groq API when ready)
      const response = await fetch('/api/groq-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.message || 'Sorry, I could not generate a response.' 
      }]);
    } catch (error) {
      console.error('Error in chat:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, there was an error processing your request.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages]);

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold mb-4">AI Chat (Coming Soon)</h1>
      <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg ${
              message.role === 'user' 
                ? 'bg-blue-100 text-blue-800 self-end' 
                : 'bg-green-100 text-green-800 self-start'
            }`}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="text-gray-500 italic">Generating response...</div>
        )}
      </div>
      <div className="flex space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Chat functionality coming soon..."
          disabled={true}
        />
        <Button onClick={handleSend} disabled={true}>
          Send
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Note: Full AI chat functionality will be implemented soon.
      </p>
    </div>
  );
};

export default GroqChat;
