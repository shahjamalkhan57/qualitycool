"use client"

import { motion } from "framer-motion"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Phone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Phone",
      content: "(469) 817-4051",
      action: "tel:4698174051",
      actionText: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Email",
      content: "info@ecoairhvac.com",
      action: "mailto:info@ecoairhvac.com",
      actionText: "Send Email",
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Address",
      content: "1301 Young St, Dallas, TX 75202",
      action: "https://maps.google.com",
      actionText: "Get Directions",
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Business Hours",
      content: "Monday - Friday: 8AM - 5PM\nSaturday: 9AM - 2PM\nSunday: Closed",
      action: null,
      actionText: null,
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Information</h2>
          <p className="mt-4 text-muted-foreground">Reach out to us through any of the following channels</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/50">{item.icon}</div>
                    <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                    <div className="mb-4 whitespace-pre-line text-muted-foreground">{item.content}</div>
                    {item.action && (
                      <a
                        href={item.action}
                        className="group inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                        target={item.action.startsWith("http") ? "_blank" : undefined}
                        rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.actionText}
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "easeInOut",
                          }}
                          className="ml-2"
                        >
                          →
                        </motion.span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
