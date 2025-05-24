"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Shield, Heart, Zap, CheckCircle, Target, Lightbulb } from "lucide-react"

export default function AboutStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable service you can count on, every time.",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your comfort and satisfaction are our top priorities.",
      color: "red",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Energy-efficient solutions that save you money.",
      color: "yellow",
      gradient: "from-yellow-500 to-yellow-600",
    },
  ]

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-950/20" />

      {/* Floating Background Shapes - Desktop only */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 dark:bg-emerald-900/50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Target className="h-4 w-4 md:h-5 md:w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm md:text-base font-medium text-emerald-800 dark:text-emerald-300">Our Mission</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Bringing Comfort to{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Dallas Homes
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2016, we've been dedicated to providing honest, reliable HVAC services to our neighbors in Dallas. We
            believe everyone deserves a comfortable home, and we're here to make that happen.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16" style={{ y }}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-gray-100 dark:bg-gray-800/80 dark:border-gray-700 overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-${value.color}-100 dark:bg-${value.color}-900/50 mb-4 md:mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon
                    className={`h-6 w-6 md:h-8 md:w-8 text-${value.color}-600 dark:text-${value.color}-400`}
                  />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-emerald-600 transition-colors">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{value.description}</p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
              <span className="text-sm md:text-base font-semibold text-emerald-600">Our Beginning</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold">Started with a Simple Goal</h3>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Quality Cool and Heat began when our founder realized Dallas families needed an HVAC company they could
              truly trust. No surprise fees, no pushy sales tactics—just honest work and fair prices.
            </p>

            <div className="space-y-2 md:space-y-3">
              {[
                "Family-owned and operated",
                "Transparent, upfront pricing",
                "Same-day emergency service",
                "100% satisfaction guarantee",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center px-4">
                  <motion.div
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 md:mb-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    500+
                  </motion.div>
                  <div className="text-lg md:text-xl">Satisfied Customers</div>
                  <div className="text-emerald-100 mt-1 md:mt-2 text-sm md:text-base">and counting...</div>
                </div>
              </div>

              {/* Floating Elements - Desktop only */}
              <div className="hidden md:block">
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-6 h-6 bg-white/30 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
