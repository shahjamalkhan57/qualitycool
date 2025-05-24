"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, CheckCircle } from "lucide-react"

export default function CalendlySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const benefits = [
    {
      icon: Calendar,
      title: "Choose Your Time",
      description: "Pick a time that works best for your schedule",
    },
    {
      icon: Clock,
      title: "Quick & Easy",
      description: "Book your appointment in under 2 minutes",
    },
    {
      icon: CheckCircle,
      title: "Instant Confirmation",
      description: "Get immediate confirmation and reminders",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Schedule Your <span className="text-emerald-600 dark:text-emerald-400">Free Consultation</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Book a convenient time to discuss your HVAC needs with our experts. No obligation, just honest advice and
            transparent pricing.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="mb-4 inline-block">
                <div className="w-12 h-12 mx-auto bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Calendly Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
              <h3 className="text-xl font-semibold text-center">Select Your Preferred Time</h3>
              <p className="text-center text-emerald-100 mt-2">All appointments include a free estimate</p>
            </div>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/shahjamalkhan08"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Need immediate assistance? Call us at{" "}
            <a href="tel:4698174051" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              (469) 817-4051
            </a>{" "}
            for emergency service
          </p>
        </motion.div>
      </div>
    </section>
  )
}