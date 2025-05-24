"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function TestimonialsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative overflow-hidden py-20 pt-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-transparent" />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1.5 dark:bg-emerald-900/50"
          >
            <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Customer Stories</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Read testimonials from our satisfied customers about their experience with EcoAir HVAC services.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-emerald-950/20 dark:to-transparent" />
    </section>
  )
}
