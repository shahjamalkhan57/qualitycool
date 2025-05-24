import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "@/components/providers"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatBot from '@/components/chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quality Cool and Heat | HVAC Experts in Dallas',
  description: 'Professional HVAC services in Dallas offering cooling, heating, and air quality solutions with 24/7 emergency service and eco-friendly options.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div suppressHydrationWarning>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ChatBot />
          </div>
        </Providers>
      </body>
    </html>
  )
}