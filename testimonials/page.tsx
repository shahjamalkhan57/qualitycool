"use client"

import TestimonialsHero from "@/components/testimonials-hero"
import TestimonialsStats from "@/components/testimonials-stats"
import TestimonialsList from "@/components/testimonials-list"
import TestimonialsForm from "@/components/testimonials-form"

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
       <TestimonialsStats />
      <TestimonialsList />
      <TestimonialsForm />
    </>
  )
}