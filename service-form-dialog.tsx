"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import ServiceForm from "@/components/service-form"

interface ServiceFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  type?: "schedule" | "quote"
}

export default function ServiceFormDialog({
  open,
  onOpenChange,
  type = "schedule",
}: ServiceFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogTitle>
          {type === "schedule" ? "Schedule a Service" : "Get a Quote"}
        </DialogTitle>
        <ServiceForm type={type} />
      </DialogContent>
    </Dialog>
  )
}