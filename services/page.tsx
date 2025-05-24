"use client"

import { Suspense } from "react"
import ServiceHero from "@/components/service-hero"
import InteractiveServices from "@/components/interactive-services"
import ServiceComparison from "@/components/service-comparison"
import ServiceProcess from "@/components/service-process"
import ServicePricing from "@/components/service-pricing"
import ServiceGuarantee from "@/components/service-guarantee"

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceHero />
      <InteractiveServices />
      <ServiceComparison />
       <ServiceProcess />
      <ServicePricing />
      <ServiceGuarantee />

    </Suspense>
  )
}