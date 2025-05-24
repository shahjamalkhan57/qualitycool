"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Fan, Leaf, Thermometer } from "lucide-react"
import ParticleEffect from "@/components/particle-effect"
import ServiceFormDialog from "@/components/service-form-dialog"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formType, setFormType] = useState<"schedule" | "quote">("schedule")
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleOpenDialog = (type: "schedule" | "quote") => {
    setFormType(type)
    setDialogOpen(true)
  }

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
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <ParticleEffect />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-20"
      >
        <motion.div
          ref={containerRef}
          className="grid gap-8 md:grid-cols-2 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="flex flex-col justify-center space-y-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  Your Green
                </span>
                <span className="block text-gray-900 dark:text-white">HVAC Experts</span>
              </h1>
            </motion.div>

            <motion.p
              className="max-w-md text-lg text-gray-600 dark:text-gray-300"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Cooling, Heating & Air Quality Solutions for Dallas
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-emerald-600 text-white hover:bg-emerald-600"
                onClick={() => handleOpenDialog("schedule")}
              >
                <span className="relative z-10">Schedule Service</span>
                <motion.span
                  className="absolute inset-0 z-0 bg-emerald-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950 dark:hover:text-emerald-300"
                onClick={() => handleOpenDialog("quote")}
              >
                <span>Get a Free Quote</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Button>
            </motion.div>

            <motion.div className="flex flex-wrap gap-6 pt-4" variants={itemVariants}>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                  <Fan className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">24/7 Emergency Service</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                  <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Eco-Friendly Solutions</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                  <Thermometer className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Energy Efficient</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-4 border-emerald-300/20 shadow-2xl dark:border-emerald-700/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-900/80 dark:from-emerald-900/40 dark:to-emerald-950/90" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-48 w-48">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-500/20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-500/10"
                    animate={{ scale: [1.2, 1.5, 1.2], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Fan className="h-24 w-24 text-emerald-300/80 dark:text-emerald-400/80" />
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 backdrop-blur-sm dark:bg-emerald-950/80"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <h3 className="text-lg font-medium text-emerald-700 dark:text-emerald-400">
                  Breathe Better, Live Better
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our eco-friendly HVAC solutions improve air quality while reducing your carbon footprint and energy
                  bills.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="absolute -right-6 -top-6 rounded-full bg-emerald-100 p-3 shadow-lg dark:bg-emerald-900/70"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 rounded-full bg-emerald-100 p-3 shadow-lg dark:bg-emerald-900/70"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            >
              <Thermometer className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-emerald-950/20 dark:to-transparent" />

      <ServiceFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        type={formType}
      />
    </section>
  )
}