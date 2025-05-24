"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Award, Wrench, Phone } from "lucide-react"
import Image from "next/image"

export default function AboutTeamShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const team = [
    {
      name: "Mike Rodriguez",
      role: "Lead Technician",
      experience: "8+ Years",
      specialty: "AC Installation",
      image: "/placeholder.svg?height=300&width=300",
      certifications: ["EPA Certified", "NATE Certified"],
    },
    {
      name: "Sarah Johnson",
      role: "Service Manager",
      experience: "6+ Years",
      specialty: "Customer Relations",
      image: "/placeholder.svg?height=300&width=300",
      certifications: ["HVAC Excellence", "Customer Service"],
    },
    {
      name: "David Chen",
      role: "HVAC Technician",
      experience: "5+ Years",
      specialty: "Heating Systems",
      image: "/placeholder.svg?height=300&width=300",
      certifications: ["Gas Technician", "Safety Certified"],
    },
  ]

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-900"
    >
      <div className="container px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 dark:bg-emerald-900/50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Star className="h-4 w-4 md:h-5 md:w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm md:text-base font-medium text-emerald-800 dark:text-emerald-300">
              Meet Our Team
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            The People Behind{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Quality Service
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our certified technicians bring years of experience and genuine care to every job.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-3 right-3 md:top-4 md:right-4 bg-emerald-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {member.experience}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="h-3 w-3 md:h-4 md:w-4 text-emerald-600" />
                    <span className="text-sm md:text-base text-emerald-600 font-medium">{member.role}</span>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground mb-4">Specializes in {member.specialty}</p>

                  {/* Certifications */}
                  <div className="space-y-1 md:space-y-2">
                    {member.certifications.map((cert, certIndex) => (
                      <motion.div
                        key={certIndex}
                        className="flex items-center gap-2 text-xs md:text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 + certIndex * 0.1 }}
                      >
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-400/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center gap-3 md:gap-4 bg-emerald-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Phone className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base font-semibold">Ready to meet our team? Call (214) 555-0123</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
