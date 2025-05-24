"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Users, Clock, Star, Thermometer, Wind, Snowflake } from "lucide-react"

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const floatingIcons = [
    { Icon: Thermometer, delay: 0, x: 10, y: 20 },
    { Icon: Wind, delay: 0.5, x: 80, y: 30 },
    { Icon: Snowflake, delay: 1, x: 20, y: 70 },
    { Icon: Star, delay: 1.5, x: 90, y: 80 },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden pt-16 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-emerald-950/20 dark:via-gray-900 dark:to-emerald-900/20" />

        {/* Floating Icons - Hidden on mobile for performance */}
        <div className="hidden md:block">
          {floatingIcons.map(({ Icon, delay, x, y }, index) => (
            <motion.div
              key={index}
              className="absolute text-emerald-200 dark:text-emerald-800"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + index,
                repeat: Number.POSITIVE_INFINITY,
                delay: delay,
                ease: "easeInOut",
              }}
            >
              <Icon size={20 + index * 2} />
            </motion.div>
          ))}
        </div>

        {/* Interactive Particles - Desktop only */}
        <motion.div
          className="absolute inset-0 opacity-30 hidden md:block"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container relative z-10 flex min-h-screen items-center px-4 sm:px-6">
        <motion.div className="grid gap-8 lg:grid-cols-2 lg:gap-12 w-full" style={{ y }}>
          {/* Content Side */}
          <motion.div
            className="flex flex-col justify-center space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 md:px-4 md:py-2 dark:bg-emerald-900/50 self-start"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Star className="h-3 w-3 md:h-4 md:w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs md:text-sm font-medium text-emerald-800 dark:text-emerald-300">Our Story</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About{" "}
              <motion.span
                className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent block sm:inline"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Quality Cool and Heat
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A trusted Dallas HVAC company dedicated to keeping your home comfortable year-round. We combine reliable
              service with modern technology to deliver exceptional results.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Clock, value: "8+", label: "Years Experience", color: "emerald" },
                { icon: Users, value: "6", label: "Expert Technicians", color: "blue" },
                { icon: Award, value: "3", label: "Certifications", color: "purple" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl bg-white/80 p-3 md:p-4 shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        className={`mb-1 md:mb-2 rounded-full bg-${stat.color}-100 p-1.5 md:p-2 dark:bg-${stat.color}-900/50`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon
                          className={`h-3 w-3 md:h-5 md:w-5 text-${stat.color}-600 dark:text-${stat.color}-400`}
                        />
                      </motion.div>
                      <motion.div
                        className={`text-lg md:text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs md:text-xs text-muted-foreground leading-tight">{stat.label}</div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/20 to-${stat.color}-400/20 opacity-0 group-hover:opacity-100`}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Quality Cool and Heat Team"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent" />

              {/* Content Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h3 className="mb-2 md:mb-3 text-xl sm:text-2xl md:text-3xl font-bold">Professional HVAC Services</h3>
                <p className="text-sm sm:text-base text-emerald-100">
                  Certified technicians providing reliable heating, cooling, and air quality solutions for Dallas homes.
                </p>
              </motion.div>
            </motion.div>

            {/* Floating Badge - Made Smaller */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 rounded-xl md:rounded-2xl bg-emerald-600 p-3 sm:p-4 md:p-5 text-white shadow-xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 1.2,
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">500+</div>
                  <div className="text-xs sm:text-sm text-emerald-100">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
