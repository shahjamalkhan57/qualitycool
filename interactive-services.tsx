"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Fan, Flame, Wind, Smartphone, CheckCircle, ArrowRight } from "lucide-react"
import ScheduleButton from "@/components/schedule-button"

const services = [
  {
    id: "cooling",
    icon: Fan,
    title: "Air Conditioning",
    subtitle: "Cool & Efficient",
    description: "Professional AC repair, maintenance, and installation services for all major brands.",
    features: [
      "24/7 Emergency Repairs",
      "Energy-Efficient Installations",
      "Preventative Maintenance",
      "Smart Thermostat Integration",
    ],
    efficiency: 95,
    satisfaction: 98,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    id: "heating",
    icon: Flame,
    title: "Heating Systems",
    subtitle: "Warm & Reliable",
    description: "Complete heating solutions including furnaces, heat pumps, and boiler services.",
    features: [
      "Furnace Repair & Installation",
      "Heat Pump Services",
      "Boiler Maintenance",
      "Energy-Efficient Upgrades",
    ],
    efficiency: 92,
    satisfaction: 96,
    color: "from-orange-500 to-red-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
  {
    id: "air-quality",
    icon: Wind,
    title: "Air Quality",
    subtitle: "Pure & Healthy",
    description: "Advanced air purification and ventilation solutions for healthier indoor environments.",
    features: ["Air Purification Systems", "HEPA Filtration", "Humidity Control", "Duct Cleaning & Sanitizing"],
    efficiency: 89,
    satisfaction: 94,
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    id: "smart-systems",
    icon: Smartphone,
    title: "Smart HVAC",
    subtitle: "Connected & Intelligent",
    description: "Modern smart HVAC controls and automation for maximum comfort and efficiency.",
    features: ["Smart Thermostats", "Home Automation", "Remote Monitoring", "Energy Analytics"],
    efficiency: 97,
    satisfaction: 99,
    color: "from-purple-500 to-indigo-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
]

export default function InteractiveServices() {
  const [activeService, setActiveService] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Premium
            </span>{" "}
            Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our comprehensive range of HVAC services designed to keep your space comfortable and
            energy-efficient.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-500 ${service.bgColor} ${
                  hoveredCard === index ? "shadow-2xl shadow-emerald-500/20" : "shadow-lg"
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500`}
                  animate={{ opacity: hoveredCard === index ? 0.05 : 0 }}
                />

                {/* Floating Icon */}
                <motion.div
                  className="mb-6 flex items-center gap-4"
                  animate={{
                    rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`rounded-xl bg-gradient-to-br ${service.color} p-3 shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </motion.div>

                <p className="mb-6 text-muted-foreground">{service.description}</p>

                {/* Animated Progress Bars */}
                <div className="mb-6 space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>Efficiency Rating</span>
                      <span className="font-semibold">{service.efficiency}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${service.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: hoveredCard === index ? `${service.efficiency}%` : "0%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>Customer Satisfaction</span>
                      <span className="font-semibold">{service.satisfaction}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${service.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: hoveredCard === index ? `${service.satisfaction}%` : "0%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0.7,
                        x: hoveredCard === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <ScheduleButton className={`group w-full bg-gradient-to-r ${service.color} text-white hover:shadow-lg`}>
                  <span>Schedule {service.title} Service</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ScheduleButton>

                {/* Hover Effect Particles */}
                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute h-1 w-1 rounded-full bg-gradient-to-r ${service.color}`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
