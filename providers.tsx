"use client"

import { useEffect, useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import { ParallaxProvider } from 'react-scroll-parallax'

export function Providers({ children }: { children: React.ReactNode }) {
  // Prevent hydration mismatch by mounting components only after initial render
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </ThemeProvider>
  )
}