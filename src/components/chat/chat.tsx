'use client'

import * as React from 'react'
import { Card } from '@/components/ui/card'
import { ChatInput } from './chat-input'
import { ChatMessage } from './chat-message'
import { Button } from '@/components/ui/button'

interface Message {
  id: string
  content: string
  isUser: boolean
}

const examplePrompts = [
  {
    title: 'What is the weather',
    subtitle: 'in San Francisco?'
  },
  {
    title: 'Help me draft an essay',
    subtitle: 'about Silicon Valley'
  }
]

export function Chat() {
  const [messages, setMessages] = React.useState<Message[]>([])
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true
    }
    setMessages(prev => [...prev, newMessage])
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: 'This is a simulated AI response. You can integrate with your preferred AI service here.',
        isUser: false
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center space-y-4">
            <div className="text-center space-y-2">
              <p className="text-lg font-medium">Welcome to the Chat</p>
              <p className="text-sm text-muted-foreground">
                Try these example prompts or enter your own message below.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {examplePrompts.map((prompt, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="h-auto flex flex-col p-4 text-left"
                  onClick={() => handleSend(prompt.title + ' ' + prompt.subtitle)}
                >
                  <span className="font-medium">{prompt.title}</span>
                  <span className="text-sm text-muted-foreground">{prompt.subtitle}</span>
                </Button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.isUser}
              avatar={message.isUser ? '/images/user-avatar.png' : '/images/ai-avatar.png'}
              username={message.isUser ? 'User' : 'AI'}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <ChatInput onSubmit={handleSend} />
      </div>
    </Card>
  )
}
