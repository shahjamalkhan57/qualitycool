"use client"

import BlogHero from "@/components/blog-hero"
import BlogCategory from "@/components/blog-categories"
import BlogGrid from "@/components/blog-grid"
import BlogNewsletter from "@/components/blog-newsletter"


export default function BlogPage() {
  return (
    <>
      <BlogHero />
       <BlogCategory />
       <BlogGrid />
       <BlogNewsletter />

    </>
  )
}