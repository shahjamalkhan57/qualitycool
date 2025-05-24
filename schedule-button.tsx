"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import ServiceFormDialog from "@/components/service-form-dialog"

interface ScheduleButtonProps {
  size?: "default" | "lg"
  className?: string
  children?: React.ReactNode
}

const ScheduleButton = ({
  size = "default",
  className,
  children,
}: ScheduleButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button
        className={cn(
          "group relative overflow-hidden bg-emerald-600 text-white hover:bg-emerald-600",
          className
        )}
        size={size}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setDialogOpen(true)}
      >
        <span className="relative z-10">
          {children || "Schedule Service"}
        </span>
        <motion.span
          className="absolute inset-0 z-0 bg-emerald-500"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>

      <ServiceFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        type="schedule"
      />
    </>
  )
}

export default ScheduleButton