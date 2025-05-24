"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-emerald-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <Image
                  src="/images/quality-cool-logo.png"
                  alt="Quality Cool and Heat"
                  width={200}
                  height={67}
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm text-emerald-100">
                Your HVAC experts providing cooling, heating & air quality solutions for Dallas.
              </p>
              <div className="mt-6 flex space-x-4">
                <motion.a
                  href="#"
                  className="rounded-full bg-emerald-800 p-2 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="rounded-full bg-emerald-800 p-2 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="rounded-full bg-emerald-800 p-2 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="rounded-full bg-emerald-800 p-2 text-emerald-100 transition-colors hover:bg-emerald-700 hover:text-white"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-4 text-lg font-medium text-white">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    AC Repair & Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    Heating System Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    Indoor Air Quality
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    Energy-Efficient Upgrades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    Commercial HVAC
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="mb-4 text-lg font-medium text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    Schedule Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    Blog & Tips
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group flex items-center text-emerald-100 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="mb-4 text-lg font-medium text-white">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <span className="text-emerald-100">1301 Young St, Dallas, TX 75202</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <a href="tel:4698174051" className="text-emerald-100 hover:text-white">
                    (469) 817-4051
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <a href="mailto:info@ecoairhvac.com" className="text-emerald-100 hover:text-white">
                    info@qualitycoolandheat.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <span className="text-emerald-100">Mon-Fri: 8AM-5PM</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-emerald-100">&copy; {currentYear} Quality Cool and Heat. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-emerald-100 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-emerald-100 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-emerald-800 py-2">
        <div className="animate-marquee flex whitespace-nowrap">
          <span className="mx-4 text-sm text-emerald-100">💡 Tip: Change your air filters every 1-3 months</span>
          <span className="mx-4 text-sm text-emerald-100">🌡️ Set your thermostat to 78°F in summer to save energy</span>
          <span className="mx-4 text-sm text-emerald-100">
            🍃 Regular maintenance can reduce energy costs by up to 15%
          </span>
          <span className="mx-4 text-sm text-emerald-100">❄️ Keep your outdoor unit clear of debris and vegetation</span>
          <span className="mx-4 text-sm text-emerald-100">
            🔍 Schedule bi-annual HVAC check-ups for optimal performance
          </span>
        </div>
      </div>
    </footer>
  )
}
