"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Star, ThumbsUp, Users } from "lucide-react"

export default function TestimonialsStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    {
      icon: <Star className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      value: "4.9",
      label: "Average Rating",
      suffix: "/5",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      value: "500+",
      label: "Happy Customers",
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      value: "15+",
      label: "Years of Service",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-12 bg-gradient-to-b from-transparent to-emerald-50/50 dark:to-emerald-950/20">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center justify-center rounded-lg border border-emerald-200/50 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-emerald-800/50 dark:bg-gray-800"
            >
              <div className="mb-4 rounded-full bg-emerald-100/50 p-3 dark:bg-emerald-900/50">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}