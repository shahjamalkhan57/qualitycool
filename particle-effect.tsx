"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const ParticleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
    }[] = []

    const createParticle = () => {
      const size = Math.random() * 5 + 1
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: `rgba(52, 211, 153, ${Math.random() * 0.5})`,
        alpha: Math.random() * 0.5 + 0.1,
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle, i) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > height) {
          particle.speedY = -particle.speedY
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.alpha
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = 1 - distance / 100
            ctx.beginPath()
            ctx.strokeStyle = `rgba(52, 211, 153, ${opacity * 0.2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(drawParticles)
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", handleResize)
    drawParticles()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

export default ParticleEffect