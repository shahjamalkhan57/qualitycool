"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Award,
  BadgeCheck,
  Clock,
  Leaf,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Emergency Service",
    description:
      "HVAC problems don't wait for business hours. Our technicians are available around the clock for emergency repairs.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Licensed & Insured",
    description:
      "Our technicians are fully licensed, insured, and background-checked for your complete peace of mind.",
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind our work with a 100% satisfaction guarantee on all services we provide.",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Eco-Friendly Options",
    description:
      "We offer energy-efficient systems and eco-friendly solutions that reduce your carbon footprint.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Award-Winning Service",
    description:
      "Recognized for excellence in customer service and technical expertise in the HVAC industry.",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Factory-Trained Technicians",
    description:
      "Our technicians receive ongoing training to stay current with the latest HVAC technologies and techniques.",
  },
]

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                Quality
              </span>{" "}
              Cool & Heat?
            </h2>

            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              For over 15 years, we've been Dallas's most trusted HVAC service provider, delivering exceptional comfort solutions with a focus on quality, reliability, and customer satisfaction.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-4"
                >
                  <div className="rounded-lg bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <div className="aspect-w-4 aspect-h-3 relative h-full min-h-[450px] w-full overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-emerald-900/20" />
                <Image
                  src="https://images.pexels.com/photos/4079277/pexels-photo-4079277.jpeg"
                  alt="HVAC technician working on an air conditioning unit"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>

              <motion.div
                initial={{ x: "100%" }}
                animate={isInView ? { x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 max-w-xs rounded-xl bg-white p-6 shadow-xl dark:bg-emerald-900"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-800">
                    <ThumbsUp className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      4.9/5
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Customer Satisfaction
                    </p>
                  </div>
                </div>
                <p className="text-sm italic text-gray-600 dark:text-gray-300">
                  "Quality Cool & Heat has serviced our home for years. Their technicians are professional, thorough, and always on time!"
                </p>
                <div className="mt-3 text-sm font-medium text-gray-900 dark:text-white">
                  — Sarah J., Dallas
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection