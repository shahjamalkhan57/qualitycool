"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin, Users, ThumbsUp, Clock, Shield } from "lucide-react"

export default function AboutAchievements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const achievements = [
    {
      year: "2016",
      title: "Company Founded",
      description: "Started with a vision to provide honest HVAC services to Dallas families",
      icon: Calendar,
      color: "emerald",
    },
    {
      year: "2018",
      title: "EPA Certification",
      description: "Achieved EPA certification for refrigerant handling and environmental safety",
      icon: Shield,
      color: "blue",
    },
    {
      year: "2020",
      title: "500+ Customers",
      description: "Reached milestone of serving over 500 satisfied customers in Dallas area",
      icon: Users,
      color: "purple",
    },
    {
      year: "2023",
      title: "24/7 Service",
      description: "Expanded to offer round-the-clock emergency HVAC services",
      icon: Clock,
      color: "orange",
    },
  ]

  const stats = [
    { icon: ThumbsUp, value: "98%", label: "Customer Satisfaction", color: "emerald" },
    { icon: MapPin, value: "Dallas", label: "Service Area", color: "blue" },
    { icon: Users, value: "6", label: "Team Members", color: "purple" },
    { icon: Calendar, value: "8+", label: "Years Experience", color: "orange" },
  ]

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-950/20 overflow-hidden"
    >
      <div className="container px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 dark:bg-emerald-900/50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Calendar className="h-4 w-4 md:h-5 md:w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm md:text-base font-medium text-emerald-800 dark:text-emerald-300">Our Journey</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Growing with{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Dallas
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every milestone represents our commitment to serving our community better.
          </p>
        </motion.div>

        {/* Timeline - Mobile Optimized */}
        <motion.div className="relative mb-16 md:mb-20" style={{ y }}>
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-emerald-200 to-emerald-400 transform md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`flex items-start md:items-center gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Mobile Timeline Node */}
                <motion.div
                  className="relative z-10 md:hidden"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-${achievement.color}-500 border-2 border-white dark:border-gray-900 shadow-lg`}
                  />
                </motion.div>

                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className={`p-1.5 md:p-2 rounded-lg bg-${achievement.color}-100 dark:bg-${achievement.color}-900/50`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <achievement.icon
                          className={`h-4 w-4 md:h-5 md:w-5 text-${achievement.color}-600 dark:text-${achievement.color}-400`}
                        />
                      </motion.div>
                      <span
                        className={`text-sm md:text-base font-bold text-${achievement.color}-600 dark:text-${achievement.color}-400`}
                      >
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{achievement.description}</p>
                  </motion.div>
                </div>

                {/* Desktop Timeline Node */}
                <motion.div
                  className="relative z-10 hidden md:block"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-${achievement.color}-500 border-4 border-white dark:border-gray-900 shadow-lg`}
                  />
                </motion.div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300">
                <motion.div
                  className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-${stat.color}-100 dark:bg-${stat.color}-900/50 mb-3 md:mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`h-5 w-5 md:h-6 md:w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </motion.div>
                <motion.div
                  className={`text-2xl md:text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-1 md:mb-2`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
