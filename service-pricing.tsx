"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Star, Zap, Shield, Clock } from "lucide-react"
import ScheduleButton from "@/components/schedule-button"

const pricingTiers = [
  {
    name: "Essential",
    price: 89,
    period: "service call",
    description: "Perfect for basic maintenance and minor repairs",
    features: [
      "System Inspection",
      "Basic Cleaning",
      "Filter Replacement",
      "Performance Report",
      "1-Year Parts Warranty",
    ],
    color: "from-gray-600 to-gray-500",
    popular: false,
    icon: Clock,
  },
  {
    name: "Premium",
    price: 149,
    period: "service call",
    description: "Comprehensive service for optimal performance",
    features: [
      "Complete System Tune-up",
      "Deep Cleaning & Sanitizing",
      "Efficiency Optimization",
      "Smart Thermostat Setup",
      "2-Year Parts Warranty",
      "Priority Scheduling",
    ],
    color: "from-emerald-600 to-emerald-500",
    popular: true,
    icon: Star,
  },
  {
    name: "Elite",
    price: 249,
    period: "service call",
    description: "Premium service with advanced diagnostics",
    features: [
      "Advanced System Analysis",
      "Energy Efficiency Audit",
      "Air Quality Testing",
      "Smart Home Integration",
      "5-Year Parts Warranty",
      "24/7 Priority Support",
      "Annual Maintenance Plan",
    ],
    color: "from-purple-600 to-purple-500",
    popular: false,
    icon: Zap,
  },
]

export default function ServicePricing() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
            Transparent{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            No hidden fees, no surprises. Choose the service level that's right for your needs.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredTier(index)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              {tier.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-500 ${
                  tier.popular
                    ? "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/20"
                    : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                } ${hoveredTier === index ? "shadow-2xl shadow-emerald-500/20 scale-105" : "shadow-lg"}`}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0`}
                  animate={{ opacity: hoveredTier === index ? 0.05 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Header */}
                <div className="mb-6 text-center">
                  <motion.div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${tier.color}`}
                    animate={{ rotate: hoveredTier === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <tier.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 text-center">
                  <motion.div
                    className="text-4xl font-bold"
                    animate={{ scale: hoveredTier === index ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={`bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                      ${tier.price}
                    </span>
                  </motion.div>
                  <p className="text-sm text-muted-foreground">per {tier.period}</p>
                </div>

                {/* Features */}
                <div className="mb-8 space-y-3">
                  {tier.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredTier === index ? 1 : 0.8,
                        x: hoveredTier === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <ScheduleButton
                  className={`w-full ${
                    tier.popular
                      ? `bg-gradient-to-r ${tier.color} text-white hover:shadow-lg`
                      : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  }`}
                >
                  Choose {tier.name}
                </ScheduleButton>

                {/* Floating Particles on Hover */}
                {hoveredTier === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute h-1 w-1 rounded-full bg-gradient-to-r ${tier.color}`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
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
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
            <Shield className="mx-auto mb-4 h-8 w-8 text-emerald-500" />
            <h3 className="mb-2 text-lg font-semibold">100% Satisfaction Guarantee</h3>
            <p className="text-sm text-muted-foreground">
              If you're not completely satisfied with our service, we'll make it right or your money back.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
