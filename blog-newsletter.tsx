"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Mail } from "lucide-react"

export default function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-400 p-8 text-white shadow-lg sm:p-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            {!submitted ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                >
                  <Mail className="h-8 w-8 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  Subscribe to Our Newsletter
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-8 text-lg text-emerald-50"
                >
                  Stay updated with the latest HVAC tips, energy-saving advice, and exclusive offers.
                </motion.p>

                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onSubmit={handleSubmit}
                  className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 border-white bg-white/10 text-white placeholder:text-white/70 focus:border-white/50 focus:ring-white/50"
                  />
                  <Button type="submit" className="bg-white text-emerald-600 hover:bg-emerald-50">
                    Subscribe
                  </Button>
                </motion.form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="mb-4 rounded-full bg-white/20 p-3">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Thank You for Subscribing!</h3>
                <p className="mt-2 text-emerald-50">
                  You've been added to our newsletter. Look out for HVAC tips and updates in your inbox soon.
                </p>
                <Button
                  className="mt-6 bg-white text-emerald-600 hover:bg-emerald-50"
                  onClick={() => {
                    setSubmitted(false)
                    setEmail("")
                  }}
                >
                  Subscribe Another Email
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
