"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Fan, Flame, Leaf, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "AC Repair & Maintenance",
    description: "Expert repair and maintenance services for all air conditioning systems.",
    icon: <Fan className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    link: "/services#ac-repair",
  },
  {
    title: "Heating System Services",
    description: "Installation, repair, and maintenance for all types of heating systems.",
    icon: <Flame className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    link: "/services#heating",
  },
  {
    title: "Indoor Air Quality",
    description: "Solutions for cleaner, healthier air including filters and purifiers.",
    icon: <Wind className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    link: "/services#air-quality",
  },
  {
    title: "Energy-Efficient Upgrades",
    description: "Upgrade to energy-efficient HVAC systems to reduce costs and environmental impact.",
    icon: <Leaf className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    link: "/services#energy-efficient",
  },
]

export default function FeaturedServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="bg-gray-50 py-24 dark:bg-emerald-950/20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                Comprehensive
              </span>{" "}
              HVAC Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We provide a complete range of heating, cooling, and air quality
              solutions for residential and commercial clients in Dallas.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={service.link} className="block h-full">
                <Card className="group h-full overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20">
                  <CardHeader className="pb-2">
                    <motion.div
                      className="mb-2 text-emerald-600 dark:text-emerald-400"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full" />
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}