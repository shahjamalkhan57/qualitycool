"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CalendarCheck, ClipboardCheck, Settings, Truck, UserCheck } from "lucide-react"

export default function ServiceProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      icon: <CalendarCheck className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Schedule Service",
      description: "Book an appointment online or call us to schedule a service visit at a time that works for you.",
    },
    {
      icon: <Truck className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Technician Arrival",
      description: "Our certified technician arrives at your location on time and ready to address your HVAC needs.",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Diagnosis & Quote",
      description:
        "We thoroughly assess your system, identify any issues, and provide a transparent quote for service.",
    },
    {
      icon: <Settings className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Service Completion",
      description:
        "Our technician completes the necessary repairs or maintenance with attention to detail and quality.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Follow-Up",
      description: "We ensure your complete satisfaction and provide recommendations for future maintenance.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 z-0 bg-emerald-50 dark:bg-emerald-950/20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Service Process</h2>
          <p className="mt-4 text-muted-foreground">How we deliver exceptional HVAC service from start to finish</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-emerald-200 dark:bg-emerald-800 md:left-1/2 md:-ml-0.5" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative mb-8">
              <div className={`flex md:justify-${index % 2 === 0 ? "end" : "start"} items-center`}>
                <div className={`flex w-full items-center md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "flex-row md:justify-end" : "flex-row-reverse md:justify-start"
                    } w-full items-center`}
                  >
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white md:absolute md:left-1/2 md:ml-[-16px]">
                      <span>{index + 1}</span>
                    </div>

                    <div
                      className={`w-full rounded-lg border bg-white p-6 shadow-md dark:bg-emerald-950/30 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div className="mb-2 flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                        {step.icon}
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
