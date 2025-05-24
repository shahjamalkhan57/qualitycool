"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2, Star } from "lucide-react"

export default function TestimonialsForm() {
  const [rating, setRating] = useState<number>(5)
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Share Your Experience</h2>
          <p className="mt-4 text-muted-foreground">
            We value your feedback! Let us know about your experience with EcoAir HVAC.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-lg border bg-card p-6 shadow-sm dark:bg-emerald-950/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6 flex flex-col items-center">
                <Label className="mb-2">Your Rating</Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="rounded-full p-1 focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          (hoverRating !== null ? star <= hoverRating : star <= rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    required
                    className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label>Service Type</Label>
                <RadioGroup defaultValue="residential" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="residential" id="residential" />
                    <Label htmlFor="residential" className="font-normal">
                      Residential
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="commercial" id="commercial" />
                    <Label htmlFor="commercial" className="font-normal">
                      Commercial
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maintenance" id="maintenance" />
                    <Label htmlFor="maintenance" className="font-normal">
                      Maintenance
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="installation" id="installation" />
                    <Label htmlFor="installation" className="font-normal">
                      Installation
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="testimonial">Your Testimonial</Label>
                <Textarea
                  id="testimonial"
                  placeholder="Share your experience with our services..."
                  className="min-h-[150px] resize-none border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-600"
                  required
                />
              </div>

              <div className="mt-6 flex items-start space-x-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <Label htmlFor="consent" className="text-xs font-normal">
                  I consent to having my testimonial and name displayed on the EcoAir HVAC website and other marketing
                  materials.
                </Label>
              </div>

              <Button
                type="submit"
                className="group relative mt-6 w-full overflow-hidden bg-emerald-600 text-white hover:bg-emerald-600"
              >
                <span className="relative z-10">Submit Testimonial</span>
                <motion.span
                  className="absolute inset-0 z-0 bg-emerald-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center rounded-lg border bg-card p-12 text-center shadow-sm dark:bg-emerald-950/30"
            >
              <div className="mb-4 rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/50">
                <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Thank You for Your Feedback!</h3>
              <p className="mt-2 text-muted-foreground">
                Your testimonial has been submitted and will be reviewed by our team before being published.
              </p>
              <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700" onClick={() => setSubmitted(false)}>
                Submit Another Testimonial
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
