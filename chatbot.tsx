"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from './ui/button'

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

interface TypingIndicatorProps {
  visible: boolean
}

interface FormattedTextProps {
  text: string
  className?: string
}

const FormattedText = ({ text, className = "" }: FormattedTextProps) => {
  // Clean the text and handle basic formatting
  const cleanText = text.replace(/\\n/g, '\n') // Convert literal \n to actual newlines
  
  // Handle bold text
  const formattedText = cleanText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

  return (
    <div 
      className={`${className} whitespace-pre-line`}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  )
}

const TypingIndicator = ({ visible }: TypingIndicatorProps) => {
  if (!visible) return null

  return (
    <div className="flex items-center space-x-2 p-4">
      <motion.div
        className="h-2 w-2 rounded-full bg-emerald-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="h-2 w-2 rounded-full bg-emerald-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="h-2 w-2 rounded-full bg-emerald-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  )
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input // Store the input before clearing
    setInput("")
    setIsTyping(true)

    try {
      const response = await fetch(
        "https://shahkhan08.app.n8n.cloud/webhook/bf6519cf-c81b-4da2-b594-6e41289c1aa9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: currentInput }),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      let botReply = ""
      const responseText = await response.text()
      console.log("Raw webhook response:", responseText)

      // Try to parse as JSON
      try {
        const data = JSON.parse(responseText)
        console.log("Parsed webhook JSON:", data)
        
        let extractedText = ""
        
        // Handle array responses (like your webhook returns)
        if (Array.isArray(data)) {
          console.log("Response is an array with length:", data.length)
          if (data.length > 0) {
            const firstItem = data[0]
            console.log("First item in array:", firstItem)
            extractedText = firstItem.output || 
                          firstItem.message || 
                          firstItem.text || 
                          firstItem.response || 
                          firstItem.reply || ""
          }
        } else if (typeof data === 'object' && data !== null) {
          // Handle object responses
          console.log("Response is an object")
          extractedText = data.output ||
                        data.message || 
                        data.text || 
                        data.response || 
                        data.reply || ""
        } else {
          // Handle primitive responses
          extractedText = String(data)
        }
        
        console.log("Extracted text:", extractedText)
        
        // Clean up the extracted text and ensure proper formatting
        if (extractedText && typeof extractedText === 'string') {
          // Replace literal \n with actual newlines
          botReply = extractedText.replace(/\\n/g, '\n').trim()
        } else {
          botReply = "Could not extract text from response"
        }
        
      } catch (parseError) {
        console.log("Response is not JSON, using as plain text:", responseText)
        // If it's not JSON, clean up the raw text
        botReply = responseText.replace(/\\n/g, '\n').trim()
      }

      // Final fallback if botReply is still empty
      if (!botReply || botReply.trim() === "") {
        botReply = "I received your message but got an empty response. Please try again."
      }

      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          text: botReply,
          isUser: false,
          timestamp: new Date(),
        },
      ])

    } catch (error) {
      console.error("Webhook error:", error)
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          isUser: false,
          timestamp: new Date(),
        },
      ])
    }
  }

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-emerald-600 p-0 shadow-lg hover:bg-emerald-700"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 z-50 w-[calc(100%-2rem)] max-w-md rounded-2xl bg-white shadow-2xl dark:bg-gray-800 sm:w-96"
          >
            <div className="flex items-center justify-between border-b p-4 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                  <MessageCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold">Chat with us</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div
              ref={chatContainerRef}
              className="h-[400px] overflow-y-auto scroll-smooth p-4"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isUser
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                    }`}
                  >
                    <p className="break-words">{message.text}</p>
                    <div
                      className={`mt-1 text-xs ${
                        message.isUser
                          ? "text-emerald-100"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              <TypingIndicator visible={isTyping} />
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <Button
                  onClick={handleSend}
                  className="h-10 w-10 rounded-full bg-emerald-600 p-0 hover:bg-emerald-700"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}