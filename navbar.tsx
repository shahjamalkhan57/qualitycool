"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import ScheduleButton from "@/components/schedule-button"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 py-2"
      : "bg-transparent py-4"
  }`

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image
                src="/images/quality-cool-logo.png"
                alt="Quality Cool and Heat"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    pathname === link.href
                      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                      : "text-gray-700 hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Phone Number */}
            <a
              href="tel:4698174051"
              className="hidden items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 transition-all hover:bg-emerald-200 hover:scale-105 dark:bg-emerald-900/30 dark:text-emerald-100 dark:hover:bg-emerald-800/50 md:flex"
            >
              <Phone className="h-4 w-4" />
              <span>(469) 817-4051</span>
            </a>

            {/* Schedule Button */}
            <div className="hidden lg:block">
              <ScheduleButton className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Service
              </ScheduleButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-white dark:bg-gray-900 lg:hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex h-full flex-col items-center justify-center px-6">
                <nav className="flex flex-col items-center gap-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-2xl font-bold transition-colors ${
                          pathname === link.href
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-gray-700 dark:text-gray-200"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="mt-12 flex flex-col gap-4 w-full max-w-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <ScheduleButton className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-medium">
                    Schedule Service
                  </ScheduleButton>
                  <a
                    href="tel:4698174051"
                    className="flex items-center justify-center gap-2 rounded-full bg-emerald-100 px-4 py-3 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-100"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(469) 817-4051</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )}