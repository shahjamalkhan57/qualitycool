"use client"

import { motion } from 'framer-motion'
import ServiceForm from '@/components/service-form'

export default function BookingPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold">Schedule Service</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Book your HVAC service appointment with our expert technicians
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <ServiceForm type="schedule" />
        </div>
      </div>
    </div>
  )
}