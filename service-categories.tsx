"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Fan, Flame, Leaf, Smartphone, Timer, Wind } from "lucide-react"

export default function ServiceCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const categories = [
    {
      icon: <Fan className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Cooling",
      description: "AC repair, maintenance, and installation services",
      link: "#cooling",
    },
    {
      icon: <Flame className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Heating",
      description: "Furnace and heat pump services",
      link: "#heating",
    },
    {
      icon: <Wind className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Air Quality",
      description: "Air purification and ventilation solutions",
      link: "#air-quality",
    },
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Energy Efficiency",
      description: "Energy-saving HVAC upgrades",
      link: "#energy-efficiency",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Smart Systems",
      description: "Smart thermostats and HVAC controls",
      link: "#smart-systems",
    },
    {
      icon: <Timer className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Emergency Services",
      description: "24/7 emergency HVAC repairs",
      link: "#emergency",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Service Categories</h2>
          <p className="mt-4 text-muted-foreground">Explore our comprehensive range of HVAC services</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/services${category.link}`} className="block h-full">
                <div className="group flex h-full flex-col items-center rounded-lg border bg-card p-6 text-center transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20">
                  <motion.div
                    className="mb-4 rounded-full bg-emerald-100 p-4 dark:bg-emerald-900/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="mb-2 text-xl font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      Learn More
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
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}