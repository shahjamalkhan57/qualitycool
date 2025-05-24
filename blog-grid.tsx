"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Calendar, Search, User } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "10 Ways to Improve Your Home's Air Quality",
    excerpt:
      "Discover simple and effective methods to enhance the air quality in your home for better health and comfort.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 10, 2023",
    author: "Emma Johnson",
    category: "Air Quality",
    slug: "improve-home-air-quality",
  },
  {
    title: "Energy-Saving Tips for Summer Cooling",
    excerpt: "Learn how to keep your home cool during hot summer months while minimizing energy consumption and costs.",
    image: "/placeholder.svg?height=200&width=400",
    date: "June 15, 2023",
    author: "Michael Chen",
    category: "Energy Efficiency",
    slug: "summer-cooling-tips",
  },
  {
    title: "When to Replace vs. Repair Your HVAC System",
    excerpt:
      "Understand the key factors to consider when deciding whether to repair your existing HVAC system or invest in a new one.",
    image: "/placeholder.svg?height=200&width=400",
    date: "July 22, 2023",
    author: "David Wilson",
    category: "Maintenance",
    slug: "replace-vs-repair-hvac",
  },
  {
    title: "The Benefits of Regular HVAC Maintenance",
    excerpt:
      "Discover why regular maintenance is crucial for the longevity, efficiency, and performance of your HVAC system.",
    image: "/placeholder.svg?height=200&width=400",
    date: "August 5, 2023",
    author: "Sarah Thompson",
    category: "Maintenance",
    slug: "benefits-of-hvac-maintenance",
  },
  {
    title: "Understanding HVAC Energy Efficiency Ratings",
    excerpt:
      "Learn about SEER, EER, and HSPF ratings and how they impact your HVAC system's energy consumption and costs.",
    image: "/placeholder.svg?height=200&width=400",
    date: "September 12, 2023",
    author: "Robert Garcia",
    category: "Energy Efficiency",
    slug: "hvac-efficiency-ratings",
  },
  {
    title: "Smart Thermostats: A Comprehensive Guide",
    excerpt:
      "Explore the features, benefits, and options available in modern smart thermostats for optimal home comfort.",
    image: "/placeholder.svg?height=200&width=400",
    date: "October 3, 2023",
    author: "Jennifer Lee",
    category: "Smart Systems",
    slug: "smart-thermostat-guide",
  },
  {
    title: "Preparing Your HVAC System for Winter",
    excerpt:
      "Essential steps to ensure your heating system is ready to keep you warm and comfortable during the cold months.",
    image: "/placeholder.svg?height=200&width=400",
    date: "November 8, 2023",
    author: "Mark Williams",
    category: "Seasonal Care",
    slug: "winter-hvac-preparation",
  },
  {
    title: "Common HVAC Problems and How to Solve Them",
    excerpt: "Troubleshooting guide for the most frequent HVAC issues homeowners face and when to call a professional.",
    image: "/placeholder.svg?height=200&width=400",
    date: "December 15, 2023",
    author: "Lisa Rodriguez",
    category: "Troubleshooting",
    slug: "common-hvac-problems",
  },
  {
    title: "The Environmental Impact of Your HVAC Choices",
    excerpt: "How your heating and cooling decisions affect the environment and eco-friendly alternatives to consider.",
    image: "/placeholder.svg?height=200&width=400",
    date: "January 20, 2024",
    author: "Thomas Green",
    category: "Sustainability",
    slug: "environmental-impact-hvac",
  },
]

export default function BlogGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-16">
      <div className="container">
        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="my-16 text-center">
            <h3 className="mb-2 text-xl font-medium">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        ) : (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post, index) => (
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
                      href={`/blog/${post.slug}`}
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
        )}

        <div className="mt-12 flex justify-center">
          <Button className="group bg-emerald-600 hover:bg-emerald-700">
            Load More Articles
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
          </Button>
        </div>
      </div>
    </section>
  )
}
