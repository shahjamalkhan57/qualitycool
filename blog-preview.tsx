"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const blogPosts = [
  {
    title: "10 Ways to Improve Your Home's Air Quality",
    excerpt:
      "Discover simple and effective methods to enhance the air quality in your home for better health and comfort.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 10, 2023",
    author: "Emma Johnson",
    category: "Air Quality",
  },
  {
    title: "Energy-Saving Tips for Summer Cooling",
    excerpt: "Learn how to keep your home cool during hot summer months while minimizing energy consumption and costs.",
    image: "/placeholder.svg?height=200&width=400",
    date: "June 15, 2023",
    author: "Michael Chen",
    category: "Energy Efficiency",
  },
  {
    title: "When to Replace vs. Repair Your HVAC System",
    excerpt:
      "Understand the key factors to consider when deciding whether to repair your existing HVAC system or invest in a new one.",
    image: "/placeholder.svg?height=200&width=400",
    date: "July 22, 2023",
    author: "David Wilson",
    category: "Maintenance",
  },
]

export default function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0 bg-emerald-50 dark:bg-emerald-950/20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            HVAC <span className="text-emerald-600 dark:text-emerald-400">Tips</span> & Resources
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Stay informed with our latest articles on HVAC maintenance, energy savings, and seasonal care.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <h3 className="line-clamp-2 text-xl font-bold">{post.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-4 border-t pt-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog`}
                    className="group inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/blog">
            <Button className="group bg-emerald-600 hover:bg-emerald-700">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}