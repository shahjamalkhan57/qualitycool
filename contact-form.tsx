"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Send Us a Message</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-lg border bg-card p-6 shadow-sm dark:bg-emerald-950/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    required
                    className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    required
                    className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Inquiry Type</Label>
                <RadioGroup defaultValue="general" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general" className="font-normal">
                      General Inquiry
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="service" id="service" />
                    <Label htmlFor="service" className="font-normal">
                      Service Request
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="quote" id="quote" />
                    <Label htmlFor="quote" className="font-normal">
                      Quote Request
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feedback" id="feedback" />
                    <Label htmlFor="feedback" className="font-normal">
                      Feedback
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please describe how we can help you..."
                  className="min-h-[150px] resize-none border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-600"
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="terms" className="mt-1" required />
                <Label htmlFor="terms" className="text-xs font-normal">
                  I agree to the terms and conditions and consent to having my information stored and used to contact me
                  regarding my HVAC service needs.
                </Label>
              </div>

              <Button
                type="submit"
                className="group relative w-full overflow-hidden bg-emerald-600 text-white hover:bg-emerald-600"
              >
                <span className="relative z-10">Send Message</span>
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
              <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Message Sent!</h3>
              <p className="mt-2 text-muted-foreground">
                Thank you for contacting us. We've received your message and will get back to you shortly.
              </p>
              <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700" onClick={() => setSubmitted(false)}>
                Send Another Message
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
