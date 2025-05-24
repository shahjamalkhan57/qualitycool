"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Award, Clock, ThumbsUp, CheckCircle } from "lucide-react"

const guarantees = [
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    description: "If you're not completely happy with our service, we'll make it right or refund your money.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind and protection.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "We respect your time. Our technicians arrive when scheduled or we'll credit your account.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: ThumbsUp,
    title: "Quality Workmanship",
    description: "All work is performed to the highest standards with premium parts and materials.",
    color: "from-orange-500 to-orange-600",
  },
]

export default function ServiceGuarantee() {
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
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Guarantee
            </span>{" "}
            to You
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We stand behind our work with industry-leading guarantees and commitments to excellence.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-gray-800"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${guarantee.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${guarantee.color} p-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <guarantee.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="mb-4 text-2xl font-bold">{guarantee.title}</h3>
                  <p className="text-muted-foreground">{guarantee.description}</p>

                  {/* Animated Check Mark */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-emerald-600"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Guaranteed</span>
                  </motion.div>
                </div>

                {/* Floating Particles */}
                <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute h-1 w-1 rounded-full bg-gradient-to-r ${guarantee.color}`}
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
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-400 p-8 text-white">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <motion.div
                  className="mb-2 text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  2,500+
                </motion.div>
                <div className="text-emerald-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="mb-2 text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  98%
                </motion.div>
                <div className="text-emerald-100">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="mb-2 text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  12+
                </motion.div>
                <div className="text-emerald-100">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
