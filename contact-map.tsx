"use client"

import { motion } from "framer-motion"

export default function GoogleMapsEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-96 w-full overflow-hidden rounded-2xl shadow-2xl"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.7234567890123!2d-96.7969!3d32.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e991b9685b3e9%3A0x123456789abcdef!2s1301%20Young%20St%2C%20Dallas%2C%20TX%2075202!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Quality Cool and Heat Location"
      />
      
      {/* Overlay with contact info */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h3 className="font-semibold text-gray-900">Quality Cool and Heat</h3>
        <p className="text-sm text-gray-600">1301 Young St</p>
        <p className="text-sm text-gray-600">Dallas, TX 75202</p>
      </div>
    </motion.div>
  )
}