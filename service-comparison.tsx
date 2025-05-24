"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, X, Star, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const comparisonData = [
  {
    feature: "24/7 Emergency Service",
    us: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Licensed & Insured",
    us: true,
    others: true,
    highlight: false,
  },
  {
    feature: "Upfront Pricing",
    us: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Same-Day Service",
    us: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Energy Efficiency Guarantee",
    us: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Smart Home Integration",
    us: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Lifetime Warranty Options",
    us: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Free Estimates",
    us: true,
    others: true,
    highlight: false,
  },
]

export default function ServiceComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Quality Cool and Heat
            </span>
            ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See how we stack up against the competition with our premium service offerings.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            <div></div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-xl p-6 shadow-lg">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <h3 className="text-xl font-bold">Quality Cool & Heat</h3>
                <p className="text-emerald-100 text-sm">Premium Service</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl p-6">
                <h3 className="text-xl font-bold">Other Companies</h3>
                <p className="text-gray-500 text-sm">Standard Service</p>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`grid grid-cols-3 gap-4 p-4 rounded-xl transition-all duration-300 ${
                  item.highlight
                    ? "bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="flex items-center">
                  <span className={`font-medium ${item.highlight ? "text-emerald-900 dark:text-emerald-100" : ""}`}>
                    {item.feature}
                  </span>
                  {item.highlight && <Star className="h-4 w-4 text-emerald-500 ml-2" />}
                </div>

                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      item.us ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {item.us ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                  </motion.div>
                </div>

                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      item.others ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {item.others ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-2xl p-8">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Experience the Difference</h3>
              <p className="text-emerald-100 mb-6">
                Join thousands of satisfied customers who chose quality over compromise.
              </p>
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Get Your Free Estimate
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}