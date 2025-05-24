"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Fan, Flame, Leaf, Settings, Smartphone, ThumbsUp, Timer, Wind } from "lucide-react"

export default function BlogCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const categories = [
    {
      icon: <Fan className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      name: "Cooling",
      count: 12,
    },
    {
      icon: <Flame className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      name: "Heating",
      count: 8,
    },
    {
      icon: <Wind className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      name: "Air Quality",
      count: 10,
    },
    {
      icon: <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      name: "Energy Efficiency",
      count: 15,
    },
    {
      icon: <Smartphone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      name: "Smart Systems",
      count: 7,
    },
    {
      icon: <Settings className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      name: "Maintenance",
      count: 14,
    },
    {
      icon: <ThumbsUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      name: "Tips & Tricks",
      count: 9,
    },
    {
      icon: <Timer className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      name: "Seasonal Care",
      count: 6,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section className="py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <h2 className="text-2xl font-bold">Browse by Category</h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={`#${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <motion.div
                  className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 transition-all hover:border-emerald-400 hover:bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30 dark:hover:border-emerald-600 dark:hover:bg-emerald-900/50"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    {category.count}
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
