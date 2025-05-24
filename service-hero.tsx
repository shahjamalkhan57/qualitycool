"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Fan, Leaf, Thermometer, Zap, Shield, Clock } from "lucide-react"
import ParticleEffect from "@/components/particle-effect"

export default function ServiceHero() {
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

  const floatingIcons = [
    { icon: Fan, delay: 0 },
    { icon: Thermometer, delay: 0.5 },
    { icon: Leaf, delay: 1 },
    { icon: Zap, delay: 1.5 },
    { icon: Shield, delay: 2 },
    { icon: Clock, delay: 2.5 },
  ]

  return (
    <section className="relative overflow-hidden py-20 pt-32">
      <div className="absolute inset-0 z-0">
        <ParticleEffect />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-5">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${15 + index * 15}%`,
              top: `${20 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="rounded-full bg-emerald-100/20 p-4 backdrop-blur-sm dark:bg-emerald-900/20">
              <item.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-block rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 px-6 py-2 dark:from-emerald-900/50 dark:to-emerald-800/30"
          >
            <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
              🌟 Premium HVAC Solutions
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
              Expert HVAC
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Services</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
            From emergency repairs to complete system installations, we deliver cutting-edge HVAC solutions that keep
            your space comfortable year-round while maximizing energy efficiency.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Fan, label: "AC & Heating", count: "500+" },
              { icon: Leaf, label: "Energy Efficient", count: "98%" },
              { icon: Shield, label: "Guaranteed", count: "100%" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mb-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{item.count}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent" />
    </section>
  )
}