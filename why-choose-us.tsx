"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
  CheckCircle,
  Users,
  Clock,
  Award,
  ThumbsUp,
  Zap,
  Thermometer,
  Shield,
  Wrench,
  Fan,
  Snowflake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// More realistic stats for an HVAC company
const stats = [
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Happy Customers",
    description: "Families enjoying comfort",
  },
  {
    icon: Clock,
    value: 12,
    suffix: "+",
    label: "Years Experience",
    description: "Serving Dallas homes",
  },
  {
    icon: Award,
    value: 24,
    suffix: "/7",
    label: "Service Available",
    description: "Emergency response",
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "From verified reviews",
  },
]

// Animated counter component
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const totalFrames = duration * 60
      const increment = end / totalFrames

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={counterRef} className="font-bold">
      {count}
      {suffix}
    </span>
  )
}

// Floating particle component
function FloatingParticle({
  icon: Icon,
  delay = 0,
  size = 20,
  color = "text-emerald-400",
}: {
  icon: any
  delay?: number
  size?: number
  color?: string
}) {
  return (
    <motion.div
      className={`absolute text-opacity-30 ${color}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.5, 0],
        y: [0, -60, -120],
        x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
        rotate: [0, Math.random() * 90 - 45],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
    >
      <Icon size={size} />
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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

  // Icons for floating particles
  const particleIcons = [Fan, Snowflake, Thermometer, Wrench, Zap, Shield]

  return (
    <section className="relative overflow-hidden py-20">
      {/* Subtle background pattern with floating particles */}
      <div className="absolute inset-0 z-0 bg-emerald-50 dark:bg-emerald-950/20">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Floating HVAC-themed icons */}
        <div className="absolute inset-0 overflow-hidden">
          {particleIcons.map((Icon, index) => (
            <FloatingParticle
              key={index}
              icon={Icon}
              delay={index * 1.5}
              size={16 + Math.random() * 12}
              color={index % 2 === 0 ? "text-emerald-400" : "text-cyan-400"}
            />
          ))}
          {particleIcons.map((Icon, index) => (
            <FloatingParticle
              key={`right-${index}`}
              icon={Icon}
              delay={index * 1.2 + 3}
              size={16 + Math.random() * 12}
              color={index % 2 === 0 ? "text-emerald-400" : "text-cyan-400"}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <motion.h2
            className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why <span className="text-emerald-600 dark:text-emerald-400">Choose</span> Us
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            For over a decade, we've been keeping Dallas families comfortable with reliable service, fair pricing, and
            expert technicians who treat your home like their own.
          </motion.p>
        </div>

        {/* Stats Section with Animated Counters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)",
                transition: { duration: 0.2 },
              }}
              className="relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 dark:bg-slate-800"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-emerald-100 opacity-50 dark:bg-emerald-900/30"></div>
              <div className="relative z-10">
                <div className="mb-3 inline-flex rounded-lg bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="mb-1 flex items-end text-3xl font-bold text-slate-900 dark:text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-medium text-slate-900 dark:text-white">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 lg:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="HVAC Technicians" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Your Comfort, Our Priority</h3>
                <p className="mt-2 pb-8 sm:pb-0">
                  Our certified technicians are ready to keep your home comfortable in every season.
                </p>
              </div>
            </div>

            {/* Response time bubble - now smaller and positioned at the edge of the image */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-0 right-4 translate-y-1/2 rounded-xl bg-emerald-600 p-2.5 px-3.5 text-white shadow-lg sm:right-6 sm:p-3 sm:px-4"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="rounded-full bg-white/20 p-1.5 sm:p-2">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <div>
                  <div className="text-base font-bold sm:text-lg">1 Hour</div>
                  <div className="text-xs sm:text-xs">Response Time</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">What Makes Us Different</h3>
            <p className="text-muted-foreground">
              At Quality Cool and Heat, we understand that HVAC issues can be stressful and disruptive. That's why we
              focus on fast, reliable service with clear pricing and no surprises. Our goal is simple: solve your
              problem quickly and make sure you're completely satisfied.
            </p>

            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-medium">No Surprise Pricing</h5>
                  <p className="text-sm text-muted-foreground">
                    We provide upfront, honest quotes before any work begins. No hidden fees, ever.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-medium">Same-Day Service</h5>
                  <p className="text-sm text-muted-foreground">
                    Don't sweat through a Texas summer. We offer same-day repairs for most HVAC issues.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-medium">Experienced Technicians</h5>
                  <p className="text-sm text-muted-foreground">
                    Our team is fully licensed, insured, and background-checked for your peace of mind.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/50">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-medium">Satisfaction Guaranteed</h5>
                  <p className="text-sm text-muted-foreground">
                    If you're not 100% happy with our work, we'll make it right. That's our promise.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <Link href="/about">
                <Button className="group relative overflow-hidden bg-emerald-600 text-white hover:bg-emerald-600">
                  <span className="relative z-10">Learn More About Us</span>
                  <motion.span
                    className="absolute inset-0 z-0 bg-emerald-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}