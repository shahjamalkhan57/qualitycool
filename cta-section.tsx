"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock, MapPin, Phone, Mail, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/30 dark:from-emerald-950/20 dark:to-blue-950/10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div variants={floatingVariants} animate="animate" className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ready to Get{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Started?
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Don't let HVAC problems disrupt your comfort. Our expert team is standing by to help you with fast, reliable
            service that gets your system running perfectly.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12"
        >
          {/* Emergency Call */}
          <motion.div variants={itemVariants}>
            <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="mb-6 inline-block">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Phone className="h-8 w-8" />
                  </div>
                </motion.div>
                <h3 className="mb-3 text-xl font-bold">Emergency Service</h3>
                <p className="mb-4 text-red-100">24/7 emergency repairs when you need us most</p>
                <a href="tel:4698174051" className="text-lg font-bold hover:underline">
                  (469) 817-4051
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Schedule Service */}
          <motion.div variants={itemVariants}>
            <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="mb-6 inline-block">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Calendar className="h-8 w-8" />
                  </div>
                </motion.div>
                <h3 className="mb-3 text-xl font-bold">Schedule Service</h3>
                <p className="mb-4 text-emerald-100">Book your appointment online in just a few clicks</p>
                <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Visit Our Office */}
          <motion.div variants={itemVariants}>
            <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="mb-6 inline-block">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <MapPin className="h-8 w-8" />
                  </div>
                </motion.div>
                <h3 className="mb-3 text-xl font-bold">Visit Our Office</h3>
                <p className="mb-4 text-blue-100">Stop by our Dallas location for in-person consultation</p>
                <p className="text-sm font-medium">
                  1301 Young St
                  <br />
                  Dallas, TX 75202
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={itemVariants}>
            <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.6 }} className="mb-6 inline-block">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Clock className="h-8 w-8" />
                  </div>
                </motion.div>
                <h3 className="mb-3 text-xl font-bold">Business Hours</h3>
                <div className="space-y-1 text-purple-100 text-sm">
                  <p>Mon-Fri: 8AM - 5PM</p>
                  <p>Saturday: 9AM - 2PM</p>
                  <p>Sunday: Emergency Only</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <span className="text-muted-foreground">or</span>
            <a href="tel:4698174051">
              <Button
                size="lg"
                variant="outline"
                className="group border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (469) 817-4051
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
