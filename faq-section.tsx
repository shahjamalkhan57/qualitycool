"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How often should I service my HVAC system?",
    answer:
      "We recommend servicing your HVAC system at least twice a year - once before the cooling season and once before the heating season. Regular maintenance helps prevent breakdowns, extends the life of your system, and maintains energy efficiency.",
  },
  {
    question: "What size HVAC system do I need for my home?",
    answer:
      "The correct size depends on multiple factors including your home's square footage, insulation levels, window efficiency, and local climate. Our technicians perform a detailed load calculation to determine the perfect size for your specific needs, avoiding both undersized and oversized systems that can lead to comfort issues and wasted energy.",
  },
  {
    question: "How long do HVAC systems typically last?",
    answer:
      "With proper maintenance, most HVAC systems last 15-20 years. However, factors like usage patterns, local climate, and maintenance frequency can affect lifespan. Regular professional maintenance can help maximize your system's operational life.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We accept all major credit cards, cash, and checks. We also offer financing options with approved credit to make larger installations or repairs more manageable with monthly payments. Our team can help you explore available rebates and incentives to reduce your costs further.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes, we provide 24/7 emergency HVAC services. Our technicians are on call and ready to respond to your emergency needs any time of day or night, including weekends and holidays.",
  },
  {
    question: "How can I improve my indoor air quality?",
    answer:
      "There are several ways to improve indoor air quality, including regular HVAC maintenance, upgrading to high-efficiency air filters, installing air purification systems, controlling humidity levels, and ensuring proper ventilation. We can assess your specific needs and recommend the most effective solutions for your home.",
  },
]

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Asked
            </span>{" "}
            Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to our most commonly asked questions. If you don't see
            what you're looking for, feel free to contact us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-4xl divide-y divide-gray-200 dark:divide-gray-800"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <motion.button
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                onClick={() => toggleItem(index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 transform text-emerald-500 transition-transform duration-300",
                      activeIndex === index ? "rotate-180" : ""
                    )}
                  />
                </span>
              </motion.button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FaqSection