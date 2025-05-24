"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactHero() {
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
      <div className="absolute inset-0 z-0 bg-emerald-50 dark:bg-emerald-950/20" />

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
            <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Get In Touch</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Quality Cool
            </span>{" "}
            & Heat
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Get in touch with our HVAC experts for all your heating, cooling, and air quality needs.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <a href="tel:4698174051" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                (469) 817-4051
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <a href="mailto:info@qualitycoolandheat.com" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                info@qualitycoolandheat.com
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dallas, TX</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-emerald-950/20 dark:to-transparent" />
    </section>
  )
}