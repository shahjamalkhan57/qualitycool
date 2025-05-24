"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Quality cool and heat transformed our home's comfort level while reducing our energy bills by 30%. Their team was professional, knowledgeable, and efficient. I highly recommend their services to anyone looking to improve their home's HVAC system.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    location: "Dallas, TX",
  },
  {
    name: "Michael Rodriguez",
    role: "Business Owner",
    content:
      "As a restaurant owner, maintaining proper air quality and temperature is crucial. Quality's commercial HVAC solution has been reliable and energy-efficient. Their ongoing maintenance program has prevented any major issues and kept our system running smoothly.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    location: "Fort Worth, TX",
  },
  {
    name: "Jennifer Williams",
    role: "Property Manager",
    content:
      "Managing multiple properties requires dependable service providers. Quality Cool has consistently delivered quality HVAC maintenance and prompt emergency service. Their team is always professional and their pricing is transparent.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    location: "Plano, TX",
  },
  {
    name: "David Thompson",
    role: "Homeowner",
    content:
      "The smart thermostat installation and energy-efficient upgrades have made a noticeable difference in our home's comfort and our monthly utility costs. The Quality Cool team took the time to explain all our options and helped us choose the best solution for our needs.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    location: "Arlington, TX",
  },
  {
    name: "Lisa Martinez",
    role: "Office Manager",
    content:
      "Our office building had ongoing issues with uneven cooling and heating. The team diagnosed the problem quickly and implemented a solution that has made our workspace comfortable year-round. Their attention to detail and customer service is outstanding.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    location: "Irving, TX",
  },
  {
    name: "Robert Chen",
    role: "Homeowner",
    content:
      "They helped us select an energy-efficient system that reduced our carbon footprint and saved us money. The installation was quick and clean, and the system has been working perfectly.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    location: "Frisco, TX",
  },
  {
    name: "Amanda Wilson",
    role: "Restaurant Owner",
    content:
      "Quality's commercial HVAC maintenance program has been a game-changer for our restaurant. Regular servicing has prevented unexpected breakdowns during our busiest times. Their technicians are always punctual and professional.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    location: "Garland, TX",
  },
  {
    name: "James Peterson",
    role: "Homeowner",
    content:
      "After our AC failed during a heatwave, they responded quickly and had a new system installed within 24 hours. Their emergency service was a lifesaver, and the new system is much more efficient than our old one.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    location: "McKinney, TX",
  },
]

export default function TestimonialsList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [page, setPage] = useState(0)
  const testimonialsPerPage = 4
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

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

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentTestimonials = testimonials.slice(page * testimonialsPerPage, (page + 1) * testimonialsPerPage)

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Client Reviews</h2>
          <p className="mt-4 text-muted-foreground">
            Hear directly from our valued customers about their experiences
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="wait">
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={page * testimonialsPerPage + index}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-emerald-950/50">
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="mb-6 text-lg font-medium italic text-gray-700 dark:text-gray-300">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-emerald-200 hover:bg-emerald-100 hover:text-emerald-700 dark:border-emerald-800 dark:hover:bg-emerald-900 dark:hover:text-emerald-300"
            onClick={prevPage}
            disabled={page === 0}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous page</span>
          </Button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  page === index ? "bg-emerald-600 dark:bg-emerald-400" : "bg-emerald-200 dark:bg-emerald-800"
                } ${page === index ? "w-6" : "w-2"}`}
                onClick={() => setPage(index)}
              >
                <span className="sr-only">Page {index + 1}</span>
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-emerald-200 hover:bg-emerald-100 hover:text-emerald-700 dark:border-emerald-800 dark:hover:bg-emerald-900 dark:hover:text-emerald-300"
            onClick={nextPage}
            disabled={page === totalPages - 1}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>
    </section>
  )
}